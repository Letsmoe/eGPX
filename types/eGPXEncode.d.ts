import { eGPXEncodeV1_0_0 } from "./v1.0.0/encode";
type VersionedArgumentTypes = {
    "1.0.0": Parameters<typeof eGPXEncodeV1_0_0>[0];
};
export declare function eGPXEncode<T extends keyof VersionedArgumentTypes>(source: VersionedArgumentTypes[T], version?: keyof VersionedArgumentTypes): Uint8Array;
export {};
//# sourceMappingURL=eGPXEncode.d.ts.map