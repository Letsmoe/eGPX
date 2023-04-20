import {
	GeospatialDataPoint,
	parseGeospatialDataFile,
	eGPXFile,
} from "./dist/index.js";

const file = new eGPXFile(
	[
		new GeospatialDataPoint(
			56.6758328268945,
			-4.03601769647726,
			undefined,
			undefined,
			"SCH 001"
		),

		new GeospatialDataPoint(
			56.6753865835736,
			-4.03583038137853,
			undefined,
			undefined,
			"SCH 002"
		),

		new GeospatialDataPoint(
			56.6735618299578,
			-4.03614000315429,
			undefined,
			undefined,
			"SCH 003"
		),

		new GeospatialDataPoint(
			56.6726922276694,
			-4.03711323311608,
			undefined,
			undefined,
			"SCH 004"
		),

		new GeospatialDataPoint(
			56.6708156570976,
			-4.03921535478461,
			undefined,
			undefined,
			"SCH 005"
		),

		new GeospatialDataPoint(
			56.668930361342,
			-4.04184722532733,
			undefined,
			undefined,
			"SCH 006"
		),

		new GeospatialDataPoint(
			56.668213511889,
			-4.04446052766014,
			undefined,
			undefined,
			"SCH 007"
		),

		new GeospatialDataPoint(
			56.6682858833434,
			-4.04552528394144,
			undefined,
			undefined,
			"SCH 008"
		),

		new GeospatialDataPoint(
			56.6678413316366,
			-4.04660281552745,
			undefined,
			undefined,
			"SCH 009"
		),

		new GeospatialDataPoint(
			56.6661616045966,
			-4.04765411258453,
			undefined,
			undefined,
			"SCH 010"
		),

		new GeospatialDataPoint(
			56.6661461800892,
			-4.04859165516911,
			undefined,
			undefined,
			"SCH 011"
		),

		new GeospatialDataPoint(
			56.6661682564118,
			-4.04998002402942,
			undefined,
			undefined,
			"SCH 012"
		),

		new GeospatialDataPoint(
			56.6652399416136,
			-4.05041918562081,
			undefined,
			undefined,
			"SCH 013"
		),

		new GeospatialDataPoint(
			56.6647376925656,
			-4.05226859370801,
			undefined,
			undefined,
			"SCH 014"
		),

		new GeospatialDataPoint(
			56.6650414290397,
			-4.0542842076448,
			undefined,
			undefined,
			"SCH 015"
		),

		new GeospatialDataPoint(
			56.6654239126298,
			-4.05561057219045,
			undefined,
			undefined,
			"SCH 016"
		),

		new GeospatialDataPoint(
			56.6655323240078,
			-4.05720761852072,
			undefined,
			undefined,
			"SCH 017"
		),

		new GeospatialDataPoint(
			56.6647987798379,
			-4.05945231429954,
			undefined,
			undefined,
			"SCH 018"
		),

		new GeospatialDataPoint(
			56.6648404813131,
			-4.06100490639477,
			undefined,
			undefined,
			"SCH 019"
		),

		new GeospatialDataPoint(
			56.6639578590415,
			-4.06275177865564,
			undefined,
			undefined,
			"SCH 020"
		),

		new GeospatialDataPoint(
			56.6639178489245,
			-4.06381031031149,
			undefined,
			undefined,
			"SCH 021"
		),

		new GeospatialDataPoint(
			56.6640682068479,
			-4.0642265010295,
			undefined,
			undefined,
			"SCH 022"
		),

		new GeospatialDataPoint(
			56.6636317367161,
			-4.0661608680014,
			undefined,
			undefined,
			"SCH 023"
		),

		new GeospatialDataPoint(
			56.6635678988414,
			-4.06729967594798,
			undefined,
			undefined,
			"SCH 024"
		),

		new GeospatialDataPoint(
			56.6645325456174,
			-4.07008594317652,
			undefined,
			undefined,
			"SCH 025"
		),

		new GeospatialDataPoint(
			56.6646271433996,
			-4.07115187088159,
			undefined,
			undefined,
			"SCH 026"
		),

		new GeospatialDataPoint(
			56.6648863100754,
			-4.07177806089648,
			undefined,
			undefined,
			"SCH 027"
		),

		new GeospatialDataPoint(
			56.6653774369754,
			-4.07331456263909,
			undefined,
			undefined,
			"SCH 028"
		),

		new GeospatialDataPoint(
			56.6656332229853,
			-4.07549094973673,
			undefined,
			undefined,
			"SCH 029"
		),

		new GeospatialDataPoint(
			56.6654706790411,
			-4.07715475708222,
			undefined,
			undefined,
			"SCH 030"
		),

		new GeospatialDataPoint(
			56.6658433607951,
			-4.0803983938441,
			undefined,
			undefined,
			"SCH 031"
		),

		new GeospatialDataPoint(
			56.6657085935658,
			-4.08308369800892,
			undefined,
			undefined,
			"SCH 032"
		),

		new GeospatialDataPoint(
			56.6656913596524,
			-4.08679545454817,
			undefined,
			undefined,
			"SCH 033"
		),

		new GeospatialDataPoint(
			56.6656592305536,
			-4.08871123027875,
			undefined,
			undefined,
			"SCH 034"
		),

		new GeospatialDataPoint(
			56.6654891203157,
			-4.08947699433228,
			undefined,
			undefined,
			"SCH 035"
		),

		new GeospatialDataPoint(
			56.6655907727544,
			-4.09278733564568,
			undefined,
			undefined,
			"SCH 036"
		),

		new GeospatialDataPoint(
			56.6654648415451,
			-4.09359632994024,
			undefined,
			undefined,
			"SCH 037"
		),

		new GeospatialDataPoint(
			56.6657530084886,
			-4.09516268121721,
			undefined,
			undefined,
			"SCH 038"
		),

		new GeospatialDataPoint(
			56.6661261281559,
			-4.09701937330206,
			undefined,
			undefined,
			"SCH 039"
		),

		new GeospatialDataPoint(
			56.666583500041,
			-4.09920718895852,
			undefined,
			undefined,
			"SCH 040"
		),

		new GeospatialDataPoint(
			56.6668895070955,
			-4.10013813805868,
			undefined,
			undefined,
			"SCH 041"
		),

		new GeospatialDataPoint(
			56.6665747421354,
			-4.09919364584093,
			undefined,
			undefined,
			"SCH 042"
		),

		new GeospatialDataPoint(
			56.6661293622529,
			-4.09704076876584,
			undefined,
			undefined,
			"SCH 043"
		),

		new GeospatialDataPoint(
			56.665744414777,
			-4.09513935667372,
			undefined,
			undefined,
			"SCH 044"
		),

		new GeospatialDataPoint(
			56.6654684327018,
			-4.09359652912738,
			undefined,
			undefined,
			"SCH 045"
		),

		new GeospatialDataPoint(
			56.6655899846037,
			-4.09278076411384,
			undefined,
			undefined,
			"SCH 046"
		),

		new GeospatialDataPoint(
			56.6654874068318,
			-4.08947200362192,
			undefined,
			undefined,
			"SCH 047"
		),

		new GeospatialDataPoint(
			56.6656509315738,
			-4.08872382671289,
			undefined,
			undefined,
			"SCH 048"
		),

		new GeospatialDataPoint(
			56.6656839627926,
			-4.0867542466085,
			undefined,
			undefined,
			"SCH 049"
		),

		new GeospatialDataPoint(
			56.6657100915772,
			-4.08304787757306,
			undefined,
			undefined,
			"SCH 050"
		),

		new GeospatialDataPoint(
			56.6658488306812,
			-4.08033994461078,
			undefined,
			undefined,
			"SCH 051"
		),

		new GeospatialDataPoint(
			56.6654564502891,
			-4.07714581434348,
			undefined,
			undefined,
			"SCH 052"
		),

		new GeospatialDataPoint(
			56.6656362146319,
			-4.07541930829843,
			undefined,
			undefined,
			"SCH 053"
		),

		new GeospatialDataPoint(
			56.66539109407,
			-4.07330388920503,
			undefined,
			undefined,
			"SCH 054"
		),

		new GeospatialDataPoint(
			56.66488500289,
			-4.07174861460556,
			undefined,
			undefined,
			"SCH 055"
		),

		new GeospatialDataPoint(
			56.6646431682058,
			-4.07116090969098,
			undefined,
			undefined,
			"SCH 056"
		),

		new GeospatialDataPoint(
			56.6645318918242,
			-4.0700712201935,
			undefined,
			undefined,
			"SCH 057"
		),

		new GeospatialDataPoint(
			56.6635714359081,
			-4.0673031333756,
			undefined,
			undefined,
			"SCH 058"
		),

		new GeospatialDataPoint(
			56.6636194380499,
			-4.0661438762168,
			undefined,
			undefined,
			"SCH 059"
		),

		new GeospatialDataPoint(
			56.6640754433675,
			-4.0642236329916,
			undefined,
			undefined,
			"SCH 060"
		),

		new GeospatialDataPoint(
			56.6639243498078,
			-4.06379761073934,
			undefined,
			undefined,
			"SCH 061"
		),

		new GeospatialDataPoint(
			56.6639699420457,
			-4.06278181269763,
			undefined,
			undefined,
			"SCH 062"
		),

		new GeospatialDataPoint(
			56.6648409671923,
			-4.06097555849278,
			undefined,
			undefined,
			"SCH 063"
		),

		new GeospatialDataPoint(
			56.6648155145236,
			-4.05947281026543,
			undefined,
			undefined,
			"SCH 064"
		),

		new GeospatialDataPoint(
			56.6655432055018,
			-4.05720168380928,
			undefined,
			undefined,
			"SCH 065"
		),

		new GeospatialDataPoint(
			56.6654471749405,
			-4.05561673483686,
			undefined,
			undefined,
			"SCH 066"
		),

		new GeospatialDataPoint(
			56.6650316507914,
			-4.05422329450664,
			undefined,
			undefined,
			"SCH 067"
		),

		new GeospatialDataPoint(
			56.6647481060832,
			-4.05223652177122,
			undefined,
			undefined,
			"SCH 068"
		),

		new GeospatialDataPoint(
			56.6652459193012,
			-4.05038360795913,
			undefined,
			undefined,
			"SCH 069"
		),

		new GeospatialDataPoint(
			56.6661662610513,
			-4.04993748455135,
			undefined,
			undefined,
			"SCH 070"
		),

		new GeospatialDataPoint(
			56.6661524647914,
			-4.04859199626553,
			undefined,
			undefined,
			"SCH 071"
		),

		new GeospatialDataPoint(
			56.6661683452242,
			-4.04762673485601,
			undefined,
			undefined,
			"SCH 072"
		),

		new GeospatialDataPoint(
			56.6678603197906,
			-4.04659568496954,
			undefined,
			undefined,
			"SCH 073"
		),

		new GeospatialDataPoint(
			56.6682959867437,
			-4.04545728516469,
			undefined,
			undefined,
			"SCH 074"
		),

		new GeospatialDataPoint(
			56.6682195414525,
			-4.04442168501949,
			undefined,
			undefined,
			"SCH 075"
		),

		new GeospatialDataPoint(
			56.6689449136366,
			-4.0418365880427,
			undefined,
			undefined,
			"SCH 076"
		),

		new GeospatialDataPoint(
			56.670828333406,
			-4.0392095110979,
			undefined,
			undefined,
			"SCH 077"
		),

		new GeospatialDataPoint(
			56.6735601676694,
			-4.03613175205858,
			undefined,
			undefined,
			"SCH 078"
		),

		new GeospatialDataPoint(
			56.6753837567767,
			-4.03583839065357,
			undefined,
			undefined,
			"SCH 079"
		),

		new GeospatialDataPoint(
			56.675826302125,
			-4.03603203579921,
			undefined,
			undefined,
			"SCH 080"
		),
	],
	1
);

const buffer = await file.toBinary().arrayBuffer();
const result = parseGeospatialDataFile(buffer);
console.log(result);
