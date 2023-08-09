import { eGPXDecodeV1_1 } from "./v1.1/decode.js";
type VersionedReturnTypes = {
    "1.1": ReturnType<typeof eGPXDecodeV1_1>;
};
export declare function eGPXDecode<T extends keyof VersionedReturnTypes>(data: Uint8Array, version?: keyof VersionedReturnTypes): VersionedReturnTypes[T];
export {};
//# sourceMappingURL=eGPXDecode.d.ts.map