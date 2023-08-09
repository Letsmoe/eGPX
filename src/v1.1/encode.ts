import protobuf from "protobufjs";
import { eGPX } from "./eGPX";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import moment from "moment";

const __dirname = dirname(fileURLToPath(import.meta.url));


export function eGPXEncodeV1_1(source: eGPX.File): Uint8Array {
	const root = protobuf.loadSync(join(__dirname, "../../schemas/v1.1/eGPX.proto"));

	// Prepare the message by checking the `trk` and `rte` property and converting it to an array.
	if (source.trk && !Array.isArray(source.trk)) {
		let track = (source.trk as eGPX.Track);
		if (track.trkseg && !Array.isArray(track.trkseg)) {
			track.trkseg = [track.trkseg];
		}

		source.trk = [source.trk];
	}
	
	if (source.wpt && !Array.isArray(source.wpt)) {
		source.wpt = [source.wpt];
	}
	

	if (source.rte && !Array.isArray(source.rte)) {
		source.rte = [source.rte];
	}

	// Convert the time for all waypoints from a string to a number
	if (source.wpt) {
		for (let i = 0; i < source.wpt.length; i++) {
			if (source.wpt[i].time) {
				source.wpt[i].time = moment(source.wpt[i].time).unix();
			}
		}
	}
	if (source.rte) {
		for (let i = 0; i < source.rte.length; i++) {
			if (source.rte[i].rtept) {
				for (let j = 0; j < source.rte[i].rtept.length; j++) {
					if (source.rte[i].rtept[j].time) {
						source.rte[i].rtept[j].time = moment(source.rte[i].rtept[j].time).unix();
					}
				}
			}
		}
	}
	if (source.trk) {
		for (let i = 0; i < source.trk.length; i++) {
			if (source.trk[i].trkseg) {
				for (let j = 0; j < source.trk[i].trkseg.length; j++) {
					if (source.trk[i].trkseg[j].trkpt) {
						for (let k = 0; k < source.trk[i].trkseg[j].trkpt.length; k++) {
							if (source.trk[i].trkseg[j].trkpt[k].time) {
								source.trk[i].trkseg[j].trkpt[k].time = moment(source.trk[i].trkseg[j].trkpt[k].time).unix();
							}
						}
					}
				}
			}
		}
	}
	

	const FileMessage = root.lookupType("eGPX.File");

	const message = FileMessage.create(source);


	const buffer = FileMessage.encode(message).finish();

	return buffer;
}