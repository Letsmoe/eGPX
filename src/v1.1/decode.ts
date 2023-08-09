import protobuf from "protobufjs";
import { eGPX } from "./eGPX";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function eGPXDecodeV1_1(source: Uint8Array): eGPX.File {
	const root = protobuf.loadSync(
		join(__dirname, "../../schemas/v1.1/eGPX.proto")
	);
	const FileMessage = root.lookupType("eGPX.File");

	const message = FileMessage.decode(source).toJSON();

	return message as eGPX.File;
}
