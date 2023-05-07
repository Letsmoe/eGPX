import protobuf from "protobufjs";
import { eGPX } from "./egpx";

export function eGPXEncodeV1_0_0(source: eGPX.File): Uint8Array {
	const root = protobuf.loadSync("./src/egpx.proto");
	const FileMessage = root.lookupType("eGPX.File");

	const message = FileMessage.create(source);

	const buffer = FileMessage.encode(message).finish();

	return buffer;
}