import * as dependency_1 from "../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export declare namespace eGPX {
    class File extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            version?: string;
            creator?: string;
            metadata?: Metadata;
            wpt?: Waypoint[];
            trk?: Track[];
            rte?: Route[];
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
        });
        get version(): string;
        set version(value: string);
        get creator(): string;
        set creator(value: string);
        get metadata(): Metadata;
        set metadata(value: Metadata);
        get has_metadata(): boolean;
        get wpt(): Waypoint[];
        set wpt(value: Waypoint[]);
        get trk(): Track[];
        set trk(value: Track[]);
        get rte(): Route[];
        set rte(value: Route[]);
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        static fromObject(data: {
            version?: string;
            creator?: string;
            metadata?: ReturnType<typeof Metadata.prototype.toObject>;
            wpt?: ReturnType<typeof Waypoint.prototype.toObject>[];
            trk?: ReturnType<typeof Track.prototype.toObject>[];
            rte?: ReturnType<typeof Route.prototype.toObject>[];
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
        }): File;
        toObject(): {
            version?: string | undefined;
            creator?: string | undefined;
            metadata?: {
                name?: string | undefined;
                desc?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                author?: {
                    name?: string | undefined;
                    email?: {
                        id?: string | undefined;
                        domain?: string | undefined;
                    } | undefined;
                    link?: {
                        href?: string | undefined;
                        text?: string | undefined;
                        type?: string | undefined;
                    } | undefined;
                } | undefined;
                time?: number | undefined;
                copyright?: {
                    year?: number | undefined;
                    license?: string | undefined;
                    author?: string | undefined;
                } | undefined;
                keywords?: string | undefined;
                bounds?: {
                    minlat?: number | undefined;
                    minlon?: number | undefined;
                    maxlat?: number | undefined;
                    maxlon?: number | undefined;
                } | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
            } | undefined;
            wpt?: {
                lat?: number | undefined;
                lon?: number | undefined;
                ele?: number | undefined;
                time?: number | undefined;
                magvar?: number | undefined;
                geoidheight?: number | undefined;
                name?: string | undefined;
                cmt?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                sym?: string | undefined;
                type?: string | undefined;
                fix?: string | undefined;
                sat?: number | undefined;
                hdop?: number | undefined;
                vdop?: number | undefined;
                pdop?: number | undefined;
                ageofdgpsdata?: number | undefined;
                dgpsid?: number | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
            }[] | undefined;
            trk?: {
                name?: string | undefined;
                cmt?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                number?: number | undefined;
                type?: string | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
                trkseg?: {
                    trkpt?: {
                        lat?: number | undefined;
                        lon?: number | undefined;
                        ele?: number | undefined;
                        time?: number | undefined;
                        magvar?: number | undefined;
                        geoidheight?: number | undefined;
                        name?: string | undefined;
                        cmt?: string | undefined;
                        desc?: string | undefined;
                        src?: string | undefined;
                        link?: {
                            href?: string | undefined;
                            text?: string | undefined;
                            type?: string | undefined;
                        }[] | undefined;
                        sym?: string | undefined;
                        type?: string | undefined;
                        fix?: string | undefined;
                        sat?: number | undefined;
                        hdop?: number | undefined;
                        vdop?: number | undefined;
                        pdop?: number | undefined;
                        ageofdgpsdata?: number | undefined;
                        dgpsid?: number | undefined;
                        extensions?: {
                            [key: string]: {
                                type_url?: string | undefined;
                                value?: Uint8Array | undefined;
                            };
                        } | undefined;
                    }[] | undefined;
                    extensions?: {
                        [key: string]: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        };
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            rte?: {
                name?: string | undefined;
                cmt?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                number?: number | undefined;
                type?: string | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
                rtept?: {
                    lat?: number | undefined;
                    lon?: number | undefined;
                    ele?: number | undefined;
                    time?: number | undefined;
                    magvar?: number | undefined;
                    geoidheight?: number | undefined;
                    name?: string | undefined;
                    cmt?: string | undefined;
                    desc?: string | undefined;
                    src?: string | undefined;
                    link?: {
                        href?: string | undefined;
                        text?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    sym?: string | undefined;
                    type?: string | undefined;
                    fix?: string | undefined;
                    sat?: number | undefined;
                    hdop?: number | undefined;
                    vdop?: number | undefined;
                    pdop?: number | undefined;
                    ageofdgpsdata?: number | undefined;
                    dgpsid?: number | undefined;
                    extensions?: {
                        [key: string]: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        };
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): File;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): File;
    }
    class Link extends pb_1.Message {
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
    class Waypoint extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            magvar?: number;
            geoidheight?: number;
            name?: string;
            cmt?: string;
            desc?: string;
            src?: string;
            link?: Link[];
            sym?: string;
            type?: string;
            fix?: string;
            sat?: number;
            hdop?: number;
            vdop?: number;
            pdop?: number;
            ageofdgpsdata?: number;
            dgpsid?: number;
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
        });
        get lat(): number;
        set lat(value: number);
        get lon(): number;
        set lon(value: number);
        get ele(): number;
        set ele(value: number);
        get time(): number;
        set time(value: number);
        get magvar(): number;
        set magvar(value: number);
        get geoidheight(): number;
        set geoidheight(value: number);
        get name(): string;
        set name(value: string);
        get cmt(): string;
        set cmt(value: string);
        get desc(): string;
        set desc(value: string);
        get src(): string;
        set src(value: string);
        get link(): Link[];
        set link(value: Link[]);
        get sym(): string;
        set sym(value: string);
        get type(): string;
        set type(value: string);
        get fix(): string;
        set fix(value: string);
        get sat(): number;
        set sat(value: number);
        get hdop(): number;
        set hdop(value: number);
        get vdop(): number;
        set vdop(value: number);
        get pdop(): number;
        set pdop(value: number);
        get ageofdgpsdata(): number;
        set ageofdgpsdata(value: number);
        get dgpsid(): number;
        set dgpsid(value: number);
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        static fromObject(data: {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            magvar?: number;
            geoidheight?: number;
            name?: string;
            cmt?: string;
            desc?: string;
            src?: string;
            link?: ReturnType<typeof Link.prototype.toObject>[];
            sym?: string;
            type?: string;
            fix?: string;
            sat?: number;
            hdop?: number;
            vdop?: number;
            pdop?: number;
            ageofdgpsdata?: number;
            dgpsid?: number;
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
        }): Waypoint;
        toObject(): {
            lat?: number | undefined;
            lon?: number | undefined;
            ele?: number | undefined;
            time?: number | undefined;
            magvar?: number | undefined;
            geoidheight?: number | undefined;
            name?: string | undefined;
            cmt?: string | undefined;
            desc?: string | undefined;
            src?: string | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            sym?: string | undefined;
            type?: string | undefined;
            fix?: string | undefined;
            sat?: number | undefined;
            hdop?: number | undefined;
            vdop?: number | undefined;
            pdop?: number | undefined;
            ageofdgpsdata?: number | undefined;
            dgpsid?: number | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Waypoint;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Waypoint;
    }
    class Route extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            cmt?: string;
            desc?: string;
            src?: string;
            link?: Link[];
            number?: number;
            type?: string;
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
            rtept?: Waypoint[];
        });
        get name(): string;
        set name(value: string);
        get cmt(): string;
        set cmt(value: string);
        get desc(): string;
        set desc(value: string);
        get src(): string;
        set src(value: string);
        get link(): Link[];
        set link(value: Link[]);
        get number(): number;
        set number(value: number);
        get type(): string;
        set type(value: string);
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        get rtept(): Waypoint[];
        set rtept(value: Waypoint[]);
        static fromObject(data: {
            name?: string;
            cmt?: string;
            desc?: string;
            src?: string;
            link?: ReturnType<typeof Link.prototype.toObject>[];
            number?: number;
            type?: string;
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
            rtept?: ReturnType<typeof Waypoint.prototype.toObject>[];
        }): Route;
        toObject(): {
            name?: string | undefined;
            cmt?: string | undefined;
            desc?: string | undefined;
            src?: string | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            number?: number | undefined;
            type?: string | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
            rtept?: {
                lat?: number | undefined;
                lon?: number | undefined;
                ele?: number | undefined;
                time?: number | undefined;
                magvar?: number | undefined;
                geoidheight?: number | undefined;
                name?: string | undefined;
                cmt?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                sym?: string | undefined;
                type?: string | undefined;
                fix?: string | undefined;
                sat?: number | undefined;
                hdop?: number | undefined;
                vdop?: number | undefined;
                pdop?: number | undefined;
                ageofdgpsdata?: number | undefined;
                dgpsid?: number | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
            }[] | undefined;
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
            cmt?: string;
            desc?: string;
            src?: string;
            link?: Link[];
            number?: number;
            type?: string;
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
            trkseg?: TrackSegment[];
        });
        get name(): string;
        set name(value: string);
        get cmt(): string;
        set cmt(value: string);
        get desc(): string;
        set desc(value: string);
        get src(): string;
        set src(value: string);
        get link(): Link[];
        set link(value: Link[]);
        get number(): number;
        set number(value: number);
        get type(): string;
        set type(value: string);
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        get trkseg(): TrackSegment[];
        set trkseg(value: TrackSegment[]);
        static fromObject(data: {
            name?: string;
            cmt?: string;
            desc?: string;
            src?: string;
            link?: ReturnType<typeof Link.prototype.toObject>[];
            number?: number;
            type?: string;
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
            trkseg?: ReturnType<typeof TrackSegment.prototype.toObject>[];
        }): Track;
        toObject(): {
            name?: string | undefined;
            cmt?: string | undefined;
            desc?: string | undefined;
            src?: string | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            number?: number | undefined;
            type?: string | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
            trkseg?: {
                trkpt?: {
                    lat?: number | undefined;
                    lon?: number | undefined;
                    ele?: number | undefined;
                    time?: number | undefined;
                    magvar?: number | undefined;
                    geoidheight?: number | undefined;
                    name?: string | undefined;
                    cmt?: string | undefined;
                    desc?: string | undefined;
                    src?: string | undefined;
                    link?: {
                        href?: string | undefined;
                        text?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    sym?: string | undefined;
                    type?: string | undefined;
                    fix?: string | undefined;
                    sat?: number | undefined;
                    hdop?: number | undefined;
                    vdop?: number | undefined;
                    pdop?: number | undefined;
                    ageofdgpsdata?: number | undefined;
                    dgpsid?: number | undefined;
                    extensions?: {
                        [key: string]: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        };
                    } | undefined;
                }[] | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Track;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Track;
    }
    class TrackSegment extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            trkpt?: Waypoint[];
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
        });
        get trkpt(): Waypoint[];
        set trkpt(value: Waypoint[]);
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        static fromObject(data: {
            trkpt?: ReturnType<typeof Waypoint.prototype.toObject>[];
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
        }): TrackSegment;
        toObject(): {
            trkpt?: {
                lat?: number | undefined;
                lon?: number | undefined;
                ele?: number | undefined;
                time?: number | undefined;
                magvar?: number | undefined;
                geoidheight?: number | undefined;
                name?: string | undefined;
                cmt?: string | undefined;
                desc?: string | undefined;
                src?: string | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                sym?: string | undefined;
                type?: string | undefined;
                fix?: string | undefined;
                sat?: number | undefined;
                hdop?: number | undefined;
                vdop?: number | undefined;
                pdop?: number | undefined;
                ageofdgpsdata?: number | undefined;
                dgpsid?: number | undefined;
                extensions?: {
                    [key: string]: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    };
                } | undefined;
            }[] | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TrackSegment;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): TrackSegment;
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
    class Metadata extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            desc?: string;
            link?: Link[];
            author?: Author;
            time?: number;
            copyright?: Copyright;
            keywords?: string;
            bounds?: Bounds;
            extensions?: Map<string, dependency_1.google.protobuf.Any>;
        });
        get name(): string;
        set name(value: string);
        get desc(): string;
        set desc(value: string);
        get link(): Link[];
        set link(value: Link[]);
        get author(): Author;
        set author(value: Author);
        get has_author(): boolean;
        get time(): number;
        set time(value: number);
        get copyright(): Copyright;
        set copyright(value: Copyright);
        get has_copyright(): boolean;
        get keywords(): string;
        set keywords(value: string);
        get bounds(): Bounds;
        set bounds(value: Bounds);
        get has_bounds(): boolean;
        get extensions(): Map<string, dependency_1.google.protobuf.Any>;
        set extensions(value: Map<string, dependency_1.google.protobuf.Any>);
        static fromObject(data: {
            name?: string;
            desc?: string;
            link?: ReturnType<typeof Link.prototype.toObject>[];
            author?: ReturnType<typeof Author.prototype.toObject>;
            time?: number;
            copyright?: ReturnType<typeof Copyright.prototype.toObject>;
            keywords?: string;
            bounds?: ReturnType<typeof Bounds.prototype.toObject>;
            extensions?: {
                [key: string]: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            };
        }): Metadata;
        toObject(): {
            name?: string | undefined;
            desc?: string | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            author?: {
                name?: string | undefined;
                email?: {
                    id?: string | undefined;
                    domain?: string | undefined;
                } | undefined;
                link?: {
                    href?: string | undefined;
                    text?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
            time?: number | undefined;
            copyright?: {
                year?: number | undefined;
                license?: string | undefined;
                author?: string | undefined;
            } | undefined;
            keywords?: string | undefined;
            bounds?: {
                minlat?: number | undefined;
                minlon?: number | undefined;
                maxlat?: number | undefined;
                maxlon?: number | undefined;
            } | undefined;
            extensions?: {
                [key: string]: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                };
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Metadata;
    }
    class Copyright extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            year?: number;
            license?: string;
            author?: string;
        });
        get year(): number;
        set year(value: number);
        get license(): string;
        set license(value: string);
        get author(): string;
        set author(value: string);
        static fromObject(data: {
            year?: number;
            license?: string;
            author?: string;
        }): Copyright;
        toObject(): {
            year?: number | undefined;
            license?: string | undefined;
            author?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Copyright;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Copyright;
    }
    class Author extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            name?: string;
            email?: Email;
            link?: Link;
        });
        get name(): string;
        set name(value: string);
        get email(): Email;
        set email(value: Email);
        get has_email(): boolean;
        get link(): Link;
        set link(value: Link);
        get has_link(): boolean;
        static fromObject(data: {
            name?: string;
            email?: ReturnType<typeof Email.prototype.toObject>;
            link?: ReturnType<typeof Link.prototype.toObject>;
        }): Author;
        toObject(): {
            name?: string | undefined;
            email?: {
                id?: string | undefined;
                domain?: string | undefined;
            } | undefined;
            link?: {
                href?: string | undefined;
                text?: string | undefined;
                type?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Author;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Author;
    }
    class Email extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            id?: string;
            domain?: string;
        });
        get id(): string;
        set id(value: string);
        get domain(): string;
        set domain(value: string);
        static fromObject(data: {
            id?: string;
            domain?: string;
        }): Email;
        toObject(): {
            id?: string | undefined;
            domain?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Email;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Email;
    }
    class Bounds extends pb_1.Message {
        #private;
        constructor(data?: any[] | {
            minlat?: number;
            minlon?: number;
            maxlat?: number;
            maxlon?: number;
        });
        get minlat(): number;
        set minlat(value: number);
        get minlon(): number;
        set minlon(value: number);
        get maxlat(): number;
        set maxlat(value: number);
        get maxlon(): number;
        set maxlon(value: number);
        static fromObject(data: {
            minlat?: number;
            minlon?: number;
            maxlat?: number;
            maxlon?: number;
        }): Bounds;
        toObject(): {
            minlat?: number | undefined;
            minlon?: number | undefined;
            maxlat?: number | undefined;
            maxlon?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Bounds;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Bounds;
    }
}
//# sourceMappingURL=eGPX.d.ts.map