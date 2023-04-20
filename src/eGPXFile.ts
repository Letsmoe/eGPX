import { GeospatialDataPoint } from "./GeospatialDataPoint";

export class eGPXFile {
	public constructor(public points: GeospatialDataPoint[], public version: number = 1) {

	}

	public toBinary() {
		const fileBuffer = new ArrayBuffer(1);
		const fileView = new DataView(fileBuffer);
		fileView.setUint8(0, this.version);

		const pointBuffers: ArrayBuffer[] = [];

		for (const point of this.points) {
			pointBuffers.push(point.toBinary());
		}

		return new Blob([fileBuffer, ...pointBuffers]);
	}
}