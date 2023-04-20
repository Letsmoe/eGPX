export declare class GeospatialDataPoint {
    latitude: number;
    longitude: number;
    elevation: number | undefined;
    date: Date | undefined;
    description: string | undefined;
    constructor(latitude: number, longitude: number, elevation?: number | undefined, date?: Date | undefined, description?: string | undefined);
    toBinary(): ArrayBuffer;
}
//# sourceMappingURL=GeospatialDataPoint.d.ts.map