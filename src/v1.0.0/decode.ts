import protobuf from "protobufjs";
import { eGPX } from "./egpx";

export function eGPXDecodeV1_0_0(source: Uint8Array): eGPX.File {
	const root = protobuf.loadSync("./src/egpx.proto");
	const FileMessage = root.lookupType("eGPX.File");

	const message = FileMessage.decode(source).toJSON();

	return (message as eGPX.File);
}