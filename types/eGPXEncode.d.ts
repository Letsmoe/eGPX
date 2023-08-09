import { eGPXEncodeV1_1 } from "./v1.1/encode.js";
type VersionedArgumentTypes = {
    "1.1": Parameters<typeof eGPXEncodeV1_1>[0];
};
export declare function eGPXEncode<T extends keyof VersionedArgumentTypes>(source: VersionedArgumentTypes[T], version?: keyof VersionedArgumentTypes): Uint8Array;
export {};
//# sourceMappingURL=eGPXEncode.d.ts.map