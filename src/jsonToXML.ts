import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { eGPX } from "./v1.1/eGPX";
import * as x from "xmlbuilder2";
import moment from "moment";

function add(
	e: XMLBuilder,
	name: string,
	value:
		| string
		| number
		| boolean
		| Date
		| undefined
		| null
		| Record<string, string>
		| Record<string, string>[]
		| Map<string, any>
		| any[]
) {
	if (value && typeof value !== "boolean") {
		if (typeof value === "object") {
			if (Array.isArray(value)) {
				for (const v of value) {
					return e.ele(name).txt(v);
				}
			}
		} else {
			return e.ele(name).txt(value.toString());
		}
	} else if (typeof value == "boolean") {
		return e.ele(name).txt(value.toString());
	}

	return e;
}

function addTime(e: XMLBuilder, time: number) {
	if (time) {
		return e.ele("time").txt(moment.unix(time).toISOString());
	}

	return e;
}

interface Options {
	accuracy: number;
	version: keyof VersionedReturnTypes;
}

function addWaypoint(
	e: XMLBuilder,
	wpt: eGPX.Waypoint,
	overrideName: string = "wpt",
	options: Options
) {
	const a = e.ele(overrideName, { lat: wpt.lat.toFixed(options.accuracy), lon: wpt.lon.toFixed(options.accuracy) });
	addNumber(a, "ele", wpt.ele, 1);
	addTime(a, wpt.time);
	addNumber(a, "magvar", wpt.magvar, options.accuracy);
	addNumber(a, "geoidheight", wpt.geoidheight, options.accuracy);
	add(a, "name", wpt.name);
	add(a, "cmt", wpt.cmt);
	add(a, "desc", wpt.desc);
	add(a, "src", wpt.src);
	add(a, "sym", wpt.sym);
	add(a, "type", wpt.type);
	add(a, "fix", wpt.fix);
	add(a, "sat", wpt.sat);
	addNumber(a, "hdop", wpt.hdop, options.accuracy);
	addNumber(a, "vdop", wpt.vdop, options.accuracy);
	addNumber(a, "pdop", wpt.pdop, options.accuracy);
	add(a, "ageofdgpsdata", wpt.ageofdgpsdata);
	add(a, "dgpsid", wpt.dgpsid);
	add(a, "extensions", wpt.extensions);
	addLinks(a, wpt.link);

	return a;
}

function addLinks(e: XMLBuilder, link: eGPX.Link[]) {
	if (link) {
		for (const l of link) {
			const a = e.ele("link", { href: l.href });
			add(a, "text", l.text);
			add(a, "type", l.type);
		}
	}
}

function addNumber(e: XMLBuilder, name: string, value: number, accuracy: number) {
	if (value) {
		// Accuracy is simply the maximum accuracy, if the value is 1.23456789 and the accuracy is 5, the value will be 1.23456
		// if it is 1.2 it is 1.2
		return e.ele(name).txt(value.toFixed(accuracy));
	}

	return e;
}

type VersionedReturnTypes = {
	"1.1": string;
};


export function jsonToXML<T extends keyof VersionedReturnTypes>(
	json: eGPX.File,
	gpxProperties: Record<string, string>,
	config: Partial<Options> = {}
): VersionedReturnTypes[T] {
	let options = ({ accuracy: 7, version: "1.1", ...config } as Options);

	let gpx: XMLBuilder;
	if (options.version === "1.1") {
		gpx = x
			.create({ version: "1.0", encoding: "UTF-8" })
			.ele("gpx", gpxProperties);

		if (json.metadata) {
			gpx.ele("metadata", json.metadata);
		}

		if (json.wpt) {
			for (const wpt of json.wpt) {
				addWaypoint(gpx, wpt, "wpt", options);
			}
		}

		if (json.rte) {
			for (const rte of json.rte) {
				const addedRoute = gpx.ele("rte");
				add(addedRoute, "name", rte.name);
				add(addedRoute, "cmt", rte.cmt);
				add(addedRoute, "desc", rte.desc);
				add(addedRoute, "src", rte.src);
				addLinks(addedRoute, rte.link);
				add(addedRoute, "number", rte.number);
				add(addedRoute, "type", rte.type);
				add(addedRoute, "extensions", rte.extensions);
				if (rte.rtept) {
					for (const rtept of rte.rtept) {
						addWaypoint(gpx, rtept, "rtept", options);
					}
				}
			}
		}

		if (json.trk) {
			for (const trk of json.trk) {
				const addedTrack = gpx.ele("trk");
				add(addedTrack, "name", trk.name);
				add(addedTrack, "cmt", trk.cmt);
				add(addedTrack, "desc", trk.desc);
				add(addedTrack, "src", trk.src);
				addLinks(addedTrack, trk.link);
				add(addedTrack, "number", trk.number);
				add(addedTrack, "type", trk.type);
				add(addedTrack, "extensions", trk.extensions);
				if (trk.trkseg) {
					for (const trkseg of trk.trkseg) {
						const addedTrackSegment = addedTrack.ele("trkseg");
						if (trkseg.trkpt) {
							for (const trkpt of trkseg.trkpt) {
								addWaypoint(addedTrackSegment, trkpt, "trkpt", options);
							}
						}
					}
				}
			}
		}
	} else {
		throw new Error(`Unsupported version: ${options.version}`);
	}

	return gpx.end({ prettyPrint: true });
}
