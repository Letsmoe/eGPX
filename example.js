import { eGPXEncode, eGPXDecode } from "./dist/index.js";

const message = {
  version: 1,
	tracks: [{
		name: "My first Track",
		points: [{
			lat: 12.4,
			lon: 13.1,
			time: Date.now()
		}]
	}],
  metadata: {
    name: "Sample GPX",
    author: {
      name: "John Doe",
      email: "johndoe@example.com",
    },
  },
}

const buffer =  eGPXEncode(message);
const newMessage = eGPXDecode(buffer);

console.log("Starting Message: ", message);
console.log("Encoded Buffer: ", buffer);
console.log("Final Message: ", newMessage);