import { eGPXEncodeV1_1 } from "./v1.1/encode.js";

type VersionedArgumentTypes = {
	"1.1": Parameters<typeof eGPXEncodeV1_1>[0];
};

const defaultVersion: keyof VersionedArgumentTypes = "1.1";

export function eGPXEncode<T extends keyof VersionedArgumentTypes>(
	source: VersionedArgumentTypes[T],
	version?: keyof VersionedArgumentTypes
): Uint8Array {
	// If the version was set in the `data` we will just use that version to ensure compatibility.
	// Otherwise we must rely on the version that was passed to the function.
	version = version || defaultVersion;

	switch (version) {
		case "1.1":
			return eGPXEncodeV1_1(source);
		default:
			throw new Error(`Unsupported version: ${version}`);
	}
}
