import { eGPX } from "./v1.1/eGPX";
interface Options {
    accuracy: number;
    version: keyof VersionedReturnTypes;
}
type VersionedReturnTypes = {
    "1.1": string;
};
export declare function jsonToXML<T extends keyof VersionedReturnTypes>(json: eGPX.File, gpxProperties: Record<string, string>, config?: Partial<Options>): VersionedReturnTypes[T];
export {};
//# sourceMappingURL=jsonToXML.d.ts.map