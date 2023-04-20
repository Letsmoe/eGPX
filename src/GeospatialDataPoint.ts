export class GeospatialDataPoint {
	public constructor(
		public latitude: number,
		public longitude: number,
		public elevation: number | undefined = undefined,
		public date: Date | undefined = undefined,
		public description: string | undefined = undefined
	) {}

	public toBinary() {
		/**
		 * Metadata Flag - 1
		 * Latitude - 4
		 * Longitude - 4
		 * Elevation - 0 | 2
		 * Date - 0 | 4
		 * Description - any
		 */
		let byteLength = 9;
		let flag = 0;

		if (typeof this.elevation !== "undefined") {
			byteLength += 2;
			flag += 1;
		}

		if (typeof this.date !== "undefined") {
			byteLength += 4;
			flag += 2;
		}

		if (typeof this.description !== "undefined") {
			byteLength += this.description.length;
			// The description length has to be stored as well.
			byteLength += 2;
			flag += 128;
		}

		const data = new ArrayBuffer(byteLength);

		const dataView = new DataView(data);

		let offset = 0;
		dataView.setUint8(offset, flag);
		offset += 1;
		dataView.setInt32(offset, Math.round(this.latitude * 1e6));
		offset += 4;
		dataView.setInt32(offset, Math.round(this.longitude * 1e6));
		offset += 4;

		if (typeof this.description !== "undefined") {
			dataView.setUint16(offset, this.description.length);
			offset += 2;
		}

		if (typeof this.elevation !== "undefined") {
			dataView.setUint16(offset, this.elevation);
			offset += 2;
		}

		if (typeof this.date !== "undefined") {
			dataView.setUint32(offset, Math.round(this.date.getTime() / 1000));
			offset += 4;
		}

		if (typeof this.description !== "undefined") {
			for (let i = 0; i < this.description.length; i++) {
				dataView.setUint8(offset, this.description.charCodeAt(i));
				offset += 1;
			}
		}

		return data;
	}
}
