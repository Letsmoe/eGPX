import { eGPXDecodeV1_1 } from "./v1.1/decode.js";

type VersionedReturnTypes = {
	"1.1": ReturnType<typeof eGPXDecodeV1_1>;
};

const defaultVersion: keyof VersionedReturnTypes = "1.1";

export function eGPXDecode<T extends keyof VersionedReturnTypes>(
	data: Uint8Array,
	version?: keyof VersionedReturnTypes
): VersionedReturnTypes[T] {
	// If the version was set in the `data` we will just use that version to ensure compatibility.
	// Otherwise we must rely on the version that was passed to the function.
	version = version || defaultVersion;

	switch (version) {
		case "1.1":
			return eGPXDecodeV1_1(data);
		default:
			throw new Error(`Unsupported version: ${version}`);
	}
}
