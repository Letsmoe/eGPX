import { GeospatialDataPoint, parseGeospatialDataFile, eGPXFile } from "./dist/index.js";

const file = new eGPXFile(
	[
		new GeospatialDataPoint(
			43.04302,
			42.72279,
			undefined,
			undefined,
			undefined
		)
	],
	1
);

const buffer = await file.toBinary().arrayBuffer();
const result = parseGeospatialDataFile(buffer);
console.log(result);