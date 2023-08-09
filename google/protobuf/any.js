import * as pb_1 from "google-protobuf";
export var google;
(function (google) {
    var protobuf;
    (function (protobuf) {
        class Any extends pb_1.Message {
            #one_of_decls = [];
            constructor(data) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("type_url" in data && data.type_url != undefined) {
                        this.type_url = data.type_url;
                    }
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get type_url() {
                return pb_1.Message.getFieldWithDefault(this, 1, "");
            }
            set type_url(value) {
                pb_1.Message.setField(this, 1, value);
            }
            get value() {
                return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
            }
            set value(value) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data) {
                const message = new Any({});
                if (data.type_url != null) {
                    message.type_url = data.type_url;
                }
                if (data.value != null) {
                    message.value = data.value;
                }
                return message;
            }
            toObject() {
                const data = {};
                if (this.type_url != null) {
                    data.type_url = this.type_url;
                }
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w) {
                const writer = w || new pb_1.BinaryWriter();
                if (this.type_url.length)
                    writer.writeString(1, this.type_url);
                if (this.value.length)
                    writer.writeBytes(2, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes) {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Any();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.type_url = reader.readString();
                            break;
                        case 2:
                            message.value = reader.readBytes();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary() {
                return this.serialize();
            }
            static deserializeBinary(bytes) {
                return Any.deserialize(bytes);
            }
        }
        protobuf.Any = Any;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google || (google = {}));
