import { GeospatialDataPoint } from "./GeospatialDataPoint.js";

/**
 * Parses eGPX and returns the result as an array of Geospatial Data Points.
 * eGPX expects the following format:
 * 	- 1 byte integer signifying the available metadata.
 * 	-	4 byte integer for the latitude of a point.
 * 	- 4 byte integer for the longitude of a point.
 * 	- [optional - 128] 2 byte integer specifying the length of a possible description if the metadata flag 8 was turned on.
 * 	- [optional - 1] 2 byte integer for the elevation of a point.
 * 	- [optional - 2] 4 byte integer for the time in seconds since the unix epoch from when the point was captured.
 * @param data An ArrayBuffer containing the raw binary to parse.
 * @returns An array of pata points.
 */
export function parseGeospatialDataFile(data: ArrayBuffer): GeospatialDataPoint[] {
  const dataView = new DataView(data);
  const points: GeospatialDataPoint[] = [];

	const version = dataView.getUint8(0);

	let offset = 1;

	while(offset < data.byteLength) {
		let bytesRead = 0;
		
		// Read the metadata byte.
		const metadata = dataView.getUint8(offset);
		offset += 1;

		const latitude = dataView.getInt32(offset, false) / 1e6;
		offset += 4
		const longitude = dataView.getInt32(offset, false) / 1e6;
		offset += 4

		const point: GeospatialDataPoint = new GeospatialDataPoint(latitude, longitude);
		let descriptionLength: number = 0;

		// We need to check if the "description" flag 8 was turned on.
		if (metadata & 128) {
			// Next two bytes will indicate the length of the description
			descriptionLength = dataView.getUint16(offset);
			offset += 2
		}

		// Latitude and Longitude must always be given, therefore, the first flag will signify the existence of an elevation.
		if (metadata & 1) {
			point.elevation = dataView.getUint16(offset);
			offset += 2
		}

		if (metadata & 2) {
			point.date = new Date(dataView.getUint32(offset, false) * 1000);
			offset += 4
		}

		if (descriptionLength > 0) {
			// We have a description, we need to read it as ascii.
			let description = "";
			for (let i = 0; i < descriptionLength; i++) {
				const charCode = dataView.getUint8(offset);
				offset += 1
				const char = String.fromCharCode(charCode)
				description += char;
			}

			point.description = description;
		}

		points.push(point)
	}

  return points;
}
