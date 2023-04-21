import protobuf from "protobufjs";
import { eGPX } from "./egpx";

export function eGPXEncode(source: eGPX.File): Uint8Array {
	const root = protobuf.loadSync("./src/egpx.proto");
	const FileMessage = root.lookupType("eGPX.File");

	const message = FileMessage.create(source);

	const buffer = FileMessage.encode(message).finish();

	return buffer;
}