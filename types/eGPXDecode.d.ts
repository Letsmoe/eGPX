import { eGPXDecodeV1_0_0 } from "./v1.0.0/decode";
type VersionedReturnTypes = {
    "1.0.0": ReturnType<typeof eGPXDecodeV1_0_0>;
};
export declare function eGPXDecode<T extends keyof VersionedReturnTypes>(data: Uint8Array, version?: keyof VersionedReturnTypes): VersionedReturnTypes[T];
export {};
//# sourceMappingURL=eGPXDecode.d.ts.map