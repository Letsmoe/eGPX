import { GeospatialDataPoint } from "./GeospatialDataPoint";
export declare class eGPXFile {
    points: GeospatialDataPoint[];
    version: number;
    constructor(points: GeospatialDataPoint[], version?: number);
    toBinary(): Blob;
}
//# sourceMappingURL=eGPXFile.d.ts.map