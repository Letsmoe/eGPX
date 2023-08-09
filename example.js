import {
	eGPXEncode,
	eGPXDecode
} from "./dist/index.js";
import * as fs from "fs";
import xml2json from "xml2json";
import {
	jsonToXML
} from "./dist/index.js"

let fileName = process.argv[2];

const xml = fs.readFileSync(fileName, "utf-8");

const json = xml2json.toJson(xml, {
	object: true
});

const startEncode = performance.now();
const buffer = eGPXEncode(json.gpx, json.gpx.version);
const newMessage = eGPXDecode(buffer);
const endDecode = performance.now();

function calculateSavings(originalSize, newSize) {
	const savingsBytes = originalSize - newSize;
	const savingsPercent = ((originalSize - newSize) / originalSize) * 100;

	console.log(`Original size: ${originalSize} bytes`);
	console.log(`New size: ${newSize} bytes`);
	console.log(`Savings: ${savingsBytes} bytes (${savingsPercent.toFixed(2)}%)`);
	console.log(`Potential load time saved: ${((savingsBytes / 1024) / 1024).toFixed(2)}s (assuming 1MB/s connection)`);
	console.log(`Potential storage space saved: ${((savingsBytes / 1024) / 1024 * 10000).toFixed(2)}MB (assuming 10 000 samples)`);
}

calculateSavings(JSON.stringify(newMessage).length, buffer.byteLength);
console.log(`Time Taken: ${endDecode - startEncode}ms`)


fs.writeFileSync(fileName + "-buffer", buffer, "utf-8")
fs.writeFileSync(fileName + "-json.gpx", JSON.stringify(newMessage), "utf-8")

const startGenerate = performance.now();
const generatedXML = jsonToXML(newMessage, {
	xmlns: "http://www.topografix.com/GPX/1/1",
	"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	"xsi:schemaLocation": "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"
});

const endGenerate = performance.now();
console.log(`XML Regeneration took: ${endGenerate - startGenerate}ms`)
console.log(`Expanded Size: ${generatedXML.length} bytes (${((generatedXML.length / buffer.byteLength) * 100).toFixed(2)}% compared to buffer)`)
fs.writeFileSync(fileName + "-expanded.gpx", generatedXML, "utf-8")