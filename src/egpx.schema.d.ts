export interface eGPXFile {
	version: number;
	metadata: eGPXMetadata;
	waypoints: eGPXWaypoint[];
	tracks: eGPXTrack[];
	routes: eGPXRoute[];
}

export interface eGPXRoute {
	name: string;
	comment: string;
	desc: string;
	src: string;
	id: string;
	link: string;
	type: string;
	points: eGPXPoint[];
	distance: eGPXDistance;
	elevation: eGPXElevation;
	slopes: number[];
}

export interface eGPXTrack {
	name: string;
	comment: string;
	desc: string;
	/**
	 * Used device
	 */
	src: string;
	/**
	 * Track identifier
	 */
	id: string;
	/**
	 * Link to a web address
	 */
	link: string;
	type: string;
	points: eGPXPoint[];
	distance: eGPXDistance;
	elevation: eGPXElevation;
	/**
	 * Slope of each sub-segment
	 */
	slopes: number[];
}

export interface eGPXElevation {
	max: number;
	min: number;
	/**
	 * Positive elevation difference
	 */
	pos: number;
	/**
	 * Negative elevation difference
	 */
	neg: number;
	/**
	 * Average elevation
	 */
	avg: number;
}

export interface eGPXDistance {
	/**
	 * Total distance of the Route/TrackTotal distance of the Route/Track
	 */
	total: number;
	/**
	 * Cumulative distance at each point of the Route/Track
	 */
	cumul: number;
}

export interface eGPXPoint {
	lat: number;
	lon: number;
	ele: number;
	time: Date;
}

export interface eGPXWaypoint {
	name: string;
	comment: string;
	desc: string;
	lat: number;
	lon: number;
	ele: number;
	time: Date;
}

export interface eGPXMetadata {
	name: string;
	desc: string;
	link: string;
	/**
	 * Author Object
	 */
	author: eGPXAuthor;
	/**
	 * Time
	 */
	time: Date;
}

export interface eGPXAuthor {
	name: string;
	/**
	 * Email address of the author
	 */
	email: string;
	/**
	 * 	Web address
	 */
	link: eGPXLink;
}

export interface eGPXLink {
	href: string;
	text: string;
	type: string;
}
