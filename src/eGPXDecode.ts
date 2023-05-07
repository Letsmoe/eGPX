import { eGPXDecodeV1_0_0 } from "./v1.0.0/decode";

type VersionedReturnTypes = {
	"1.0.0": ReturnType<typeof eGPXDecodeV1_0_0>;
};

const defaultVersion: keyof VersionedReturnTypes = "1.0.0";

export function eGPXDecode<T extends keyof VersionedReturnTypes>(
	data: Uint8Array,
	version?: keyof VersionedReturnTypes
): VersionedReturnTypes[T] {
	// If the version was set in the `data` we will just use that version to ensure compatibility.
	// Otherwise we must rely on the version that was passed to the function.
	version = version || defaultVersion;

	switch (version) {
		case "1.0.0":
			return eGPXDecodeV1_0_0(data);
		default:
			throw new Error(`Unsupported version: ${version}`);
	}
}
