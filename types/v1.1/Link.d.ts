import * as pb_1 from "google-protobuf";
export declare class Link extends pb_1.Message {
    #private;
    constructor(data?: any[] | {
        href?: string;
        text?: string;
        type?: string;
    });
    get href(): string;
    set href(value: string);
    get text(): string;
    set text(value: string);
    get type(): string;
    set type(value: string);
    static fromObject(data: {
        href?: string;
        text?: string;
        type?: string;
    }): Link;
    toObject(): {
        href?: string | undefined;
        text?: string | undefined;
        type?: string | undefined;
    };
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Link;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Link;
}
//# sourceMappingURL=Link.d.ts.map