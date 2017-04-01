(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dsv')) :
	typeof define === 'function' && define.amd ? define(['exports', 'd3-dsv'], factory) :
	(factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3Dsv) { 'use strict';

	const cartoData = d3Dsv.tsvParse(`code	name	x	y
00AA	City of London	4	3
00AB	Barking and Dagenham	7	3
00AC	Barnet	3	1
00AD	Bexley	7	4
00AE	Brent	2	2
00AF	Bromley	5	5
00AG	Camden	3	2
00AH	Croydon	4	5
00AJ	Ealing	1	2
00AK	Enfield	4	0
00AL	Greenwich	6	4
00AM	Hackney	5	2
00AN	Hammersmith and Fulham	1	3
00AP	Haringey	4	1
00AQ	Harrow	2	1
00AR	Havering	7	2
00AS	Hillingdon	0	2
00AT	Hounslow	0	3
00AU	Islington	4	2
00AW	Kensington and Chelsea	2	3
00AX	Kingston upon Thames	2	5
00AY	Lambeth	3	4
00AZ	Lewisham	5	4
00BA	Merton	3	5
00BB	Newham	6	3
00BC	Redbridge	6	2
00BD	Richmond upon Thames	1	4
00BE	Southwark	4	4
00BF	Sutton	3	6
00BG	Tower Hamlets	5	3
00BH	Waltham Forest	5	1
00BJ	Wandsworth	2	4
00BK	Westminster	3	3`).reduce(function(acc,current){
		acc[current.code] = current;
		return acc;
	},{});

	function londoncarto() {
		let boroughAccessor = function(d){
			return d;
		}; 

		function layout(data){
			return data.map(function(d){
				return {
					data:d,
					x:0,
					y:0,
					name:0,
					code:0,
				};
			})
		}

		layout.boroughAccessor = function(f){
			if(f=== undefined)return boroughAccessor;
			boroughAccessor = f;
			return layout;
		}

		return layout;
	};

	exports.londonCarto = londoncarto;

	Object.defineProperty(exports, '__esModule', { value: true });

}));