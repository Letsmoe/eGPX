import * as pb_1 from "google-protobuf";
export declare namespace eGPX {
    class File extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            version?: number;
            metadata?: Metadata;
            waypoints?: Waypoint[];
            tracks?: Track[];
            routes?: Route[];
        });
        get version(): number;
        set version(value: number);
        get metadata(): Metadata;
        set metadata(value: Metadata);
        get has_metadata(): boolean;
        get waypoints(): Waypoint[];
        set waypoints(value: Waypoint[]);
        get tracks(): Track[];
        set tracks(value: Track[]);
        get routes(): Route[];
        set routes(value: Route[]);
        static fromObject(data: {
            version?: number;
            metadata?: ReturnType<typeof Metadata.prototype.toObject>;
            waypoints?: ReturnType<typeof Waypoint.prototype.toObject>[];
            tracks?: ReturnType<typeof Track.prototype.toObject>[];
            routes?: ReturnType<typeof Route.prototype.toObject>[];
        }): File;
        toObject(): {
            version?: number | undefined;
            metadata?: {
                name?: string | undefined;
                desc?: string | undefined;
                link?: string | undefined;
                author?: {
                    name?: string | undefined;
                    email?: string | undefined;
                    link?: {
                        href?: string | undefined;
                        text?: string | undefined;
                    } | undefined;
                } | undefined;
                time?: number | undefined;
            } | undefined;
            waypoints?: {
                name?: string | undefined;
                comment?: string | undefined;
                desc?: string | undefined;
                lat?: number | undefined;
                lon?: number | undefined;
                elevation?: number | undefined;
                time?: number | undefined;
            }[] | undefined;
            tracks?: {
                name?: string | undefined;
                comment?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                id?: string | undefined;
                link?: string | undefined;
                type?: string | undefined;
                points?: {
                    lat?: number | undefined;
                    lon?: number | undefined;
                    elevation?: number | undefined;
                    time?: number | undefined;
                }[] | undefined;
                distance?: {
                    total?: number | undefined;
                    cumul?: number | undefined;
                } | undefined;
                elevation?: {
                    max?: number | undefined;
                    min?: number | undefined;
                    pos?: number | undefined;
                    neg?: number | undefined;
                    avg?: number | undefined;
                } | undefined;
                slopes?: number[] | undefined;
            }[] | undefined;
            routes?: {
                name?: string | undefined;
                comment?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                id?: string | undefined;
                link?: string | undefined;
                type?: string | undefined;
                points?: {
                    lat?: number | undefined;
                    lon?: number | undefined;
                    elevation?: number | undefined;
                    time?: number | undefined;
                }[] | undefined;
                distance?: {
                    total?: number | undefined;
                    cumul?: number | undefined;
                } | undefined;
                elevation?: {
                    max?: number | undefined;
                    min?: number | undefined;
                    pos?: number | undefined;
                    neg?: number | undefined;
                    avg?: number | undefined;
                } | undefined;
                slopes?: number[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): File;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): File;
    }
    class Route extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            comment?: string;
            desc?: string;
            src?: string;
            id?: string;
            link?: string;
            type?: string;
            points?: Point[];
            distance?: Distance;
            elevation?: Elevation;
            slopes?: number[];
        });
        get name(): string;
        set name(value: string);
        get comment(): string;
        set comment(value: string);
        get desc(): string;
        set desc(value: string);
        get src(): string;
        set src(value: string);
        get id(): string;
        set id(value: string);
        get link(): string;
        set link(value: string);
        get type(): string;
        set type(value: string);
        get points(): Point[];
        set points(value: Point[]);
        get distance(): Distance;
        set distance(value: Distance);
        get has_distance(): boolean;
        get elevation(): Elevation;
        set elevation(value: Elevation);
        get has_elevation(): boolean;
        get slopes(): number[];
        set slopes(value: number[]);
        static fromObject(data: {
            name?: string;
            comment?: string;
            desc?: string;
            src?: string;
            id?: string;
            link?: string;
            type?: string;
            points?: ReturnType<typeof Point.prototype.toObject>[];
            distance?: ReturnType<typeof Distance.prototype.toObject>;
            elevation?: ReturnType<typeof Elevation.prototype.toObject>;
            slopes?: number[];
        }): Route;
        toObject(): {
            name?: string | undefined;
            comment?: string | undefined;
            desc?: string | undefined;
            src?: string | undefined;
            id?: string | undefined;
            link?: string | undefined;
            type?: string | undefined;
            points?: {
                lat?: number | undefined;
                lon?: number | undefined;
                elevation?: number | undefined;
                time?: number | undefined;
            }[] | undefined;
            distance?: {
                total?: number | undefined;
                cumul?: number | undefined;
            } | undefined;
            elevation?: {
                max?: number | undefined;
                min?: number | undefined;
                pos?: number | undefined;
                neg?: number | undefined;
                avg?: number | undefined;
            } | undefined;
            slopes?: number[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Route;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Route;
    }
    class Track extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            comment?: string;
            desc?: string;
            src?: string;
            id?: string;
            link?: string;
            type?: string;
            points?: Point[];
            distance?: Distance;
            elevation?: Elevation;
            slopes?: number[];
        });
        get name(): string;
        set name(value: string);
        get comment(): string;
        set comment(value: string);
        get desc(): string;
        set desc(value: string);
        get src(): string;
        set src(value: string);
        get id(): string;
        set id(value: string);
        get link(): string;
        set link(value: string);
        get type(): string;
        set type(value: string);
        get points(): Point[];
        set points(value: Point[]);
        get distance(): Distance;
        set distance(value: Distance);
        get has_distance(): boolean;
        get elevation(): Elevation;
        set elevation(value: Elevation);
        get has_elevation(): boolean;
        get slopes(): number[];
        set slopes(value: number[]);
        static fromObject(data: {
            name?: string;
            comment?: string;
            desc?: string;
            src?: string;
            id?: string;
            link?: string;
            type?: string;
            points?: ReturnType<typeof Point.prototype.toObject>[];
            distance?: ReturnType<typeof Distance.prototype.toObject>;
            elevation?: ReturnType<typeof Elevation.prototype.toObject>;
            slopes?: number[];
        }): Track;
        toObject(): {
            name?: string | undefined;
            comment?: string | undefined;
            desc?: string | undefined;
            src?: string | undefined;
            id?: string | undefined;
            link?: string | undefined;
            type?: string | undefined;
            points?: {
                lat?: number | undefined;
                lon?: number | undefined;
                elevation?: number | undefined;
                time?: number | undefined;
            }[] | undefined;
            distance?: {
                total?: number | undefined;
                cumul?: number | undefined;
            } | undefined;
            elevation?: {
                max?: number | undefined;
                min?: number | undefined;
                pos?: number | undefined;
                neg?: number | undefined;
                avg?: number | undefined;
            } | undefined;
            slopes?: number[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Track;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Track;
    }
    class Elevation extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            max?: number;
            min?: number;
            pos?: number;
            neg?: number;
            avg?: number;
        });
        get max(): number;
        set max(value: number);
        get min(): number;
        set min(value: number);
        get pos(): number;
        set pos(value: number);
        get neg(): number;
        set neg(value: number);
        get avg(): number;
        set avg(value: number);
        static fromObject(data: {
            max?: number;
            min?: number;
            pos?: number;
            neg?: number;
            avg?: number;
        }): Elevation;
        toObject(): {
            max?: number | undefined;
            min?: number | undefined;
            pos?: number | undefined;
            neg?: number | undefined;
            avg?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Elevation;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Elevation;
    }
    class Distance extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            total?: number;
            cumul?: number;
        });
        get total(): number;
        set total(value: number);
        get cumul(): number;
        set cumul(value: number);
        static fromObject(data: {
            total?: number;
            cumul?: number;
        }): Distance;
        toObject(): {
            total?: number | undefined;
            cumul?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Distance;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Distance;
    }
    class Point extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            lat?: number;
            lon?: number;
            elevation?: number;
            time?: number;
        });
        get lat(): number;
        set lat(value: number);
        get lon(): number;
        set lon(value: number);
        get elevation(): number;
        set elevation(value: number);
        get time(): number;
        set time(value: number);
        static fromObject(data: {
            lat?: number;
            lon?: number;
            elevation?: number;
            time?: number;
        }): Point;
        toObject(): {
            lat?: number | undefined;
            lon?: number | undefined;
            elevation?: number | undefined;
            time?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Point;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Point;
    }
    class Waypoint extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            comment?: string;
            desc?: string;
            lat?: number;
            lon?: number;
            elevation?: number;
            time?: number;
        });
        get name(): string;
        set name(value: string);
        get comment(): string;
        set comment(value: string);
        get desc(): string;
        set desc(value: string);
        get lat(): number;
        set lat(value: number);
        get lon(): number;
        set lon(value: number);
        get elevation(): number;
        set elevation(value: number);
        get time(): number;
        set time(value: number);
        static fromObject(data: {
            name?: string;
            comment?: string;
            desc?: string;
            lat?: number;
            lon?: number;
            elevation?: number;
            time?: number;
        }): Waypoint;
        toObject(): {
            name?: string | undefined;
            comment?: string | undefined;
            desc?: string | undefined;
            lat?: number | undefined;
            lon?: number | undefined;
            elevation?: number | undefined;
            time?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Waypoint;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Waypoint;
    }
    class Metadata extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            desc?: string;
            link?: string;
            author?: Author;
            time?: number;
        });
        get name(): string;
        set name(value: string);
        get desc(): string;
        set desc(value: string);
        get link(): string;
        set link(value: string);
        get author(): Author;
        set author(value: Author);
        get has_author(): boolean;
        get time(): number;
        set time(value: number);
        static fromObject(data: {
            name?: string;
            desc?: string;
            link?: string;
            author?: ReturnType<typeof Author.prototype.toObject>;
            time?: number;
        }): Metadata;
        toObject(): {
            name?: string | undefined;
            desc?: string | undefined;
            link?: string | undefined;
            author?: {
                name?: string | undefined;
                email?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                } | undefined;
            } | undefined;
            time?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Metadata;
    }
    class Author extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            email?: string;
            link?: Link;
        });
        get name(): string;
        set name(value: string);
        get email(): string;
        set email(value: string);
        get link(): Link;
        set link(value: Link);
        get has_link(): boolean;
        static fromObject(data: {
            name?: string;
            email?: string;
            link?: ReturnType<typeof Link.prototype.toObject>;
        }): Author;
        toObject(): {
            name?: string | undefined;
            email?: string | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Author;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Author;
    }
    class Link extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            href?: string;
            text?: string;
        });
        get href(): string;
        set href(value: string);
        get text(): string;
        set text(value: string);
        static fromObject(data: {
            href?: string;
            text?: string;
        }): Link;
        toObject(): {
            href?: string | undefined;
            text?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Link;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Link;
    }
}
//# sourceMappingURL=egpx.d.ts.map