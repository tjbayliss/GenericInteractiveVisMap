	// Configuration. Don't delete this.
	import "./internal/configure";
	import pym from "pym.js";
	
	// `polling` tells pym to update the height of the iframe, according to the size
	// of its content, at a regular interval. You can adjust this value, or totally
	// remove it, depending on how your content is resizing.
	// See http://blog.apps.npr.org/pym.js/api/pym.js/1.3.2/module-pym.Child.html.
	const pymChild = new pym.Child({/* polling: 800 */}); // eslint-disable-line no-unused-vars
	
	
	
	
	
	
	/* Content below is from script.js */
	/*
	Name: Generic Interative World Map Template  
	Developer: J BAYLISS (TR LABS)
	From/to: OCTOBER 2017 to APRIL 2018
	Technologies: D3 v4, Javascript (ES5, ES6), Chosen, Bootstrap

	*/
	
	/*
	var bundleDir = document
					  .querySelector(".trl-wrapper")
					  .getAttribute('data-bundle-dir');
	*/
	
	(function(){ 

		
		function BrowserDetection(){
			//Check if browser is IE
			if (navigator.userAgent.search("MSIE") >= 0) { vis.browser = "MSIE"; }
			//Check if browser is Chrome
			else if (navigator.userAgent.search("Chrome") >= 0) { vis.browser = "Chrome"; }
			//Check if browser is Firefox 
			else if (navigator.userAgent.search("Firefox") >= 0) { vis.browser = "Firefox"; }
			//Check if browser is Safari
			else if (navigator.userAgent.search("Safari") >= 0) { vis.browser = "Safari"; }
			//Check if browser is Opera
			else if (navigator.userAgent.search("Opera") >= 0) { vis.browser = "Opera"; }
			
			return vis.browser;
		}
		BrowserDetection();
		//console.log("Browser is: " + vis.browser);
		

		/*
	
		Name: Generic Interative World Map Template  
		Developer: J BAYLISS (TR LABS)
		From/to: OCTOBER 2017 to APRIL 2018
		Technologies: D3 v4, Javascript (ES5, ES6), Chosen, Bootstrap
		
		File: vis.js -  container for all configuration onload variables.
		
		NOTES: where applicable, default values for parameters are given in UPPERCASE within comments
	
		*/
		/*
			
		var vis = {}; // global object variable to contain all variables prefixed with 'vis.'*/
		
		
		/* 
			initialisation of onlaod scenarios and associated variables
			For those with defaults, this value is given in bracketed comments
		*/
		vis.onLoadVariables = {
							"vars":
									{	
										"controls":true, /* TRUE */
										"panel0":"#FFFFFF",
										"panel1":"#FFFFFF",
										"panel2":"#FFFFFF",
										"panel3":"#FFFFFF",
										"centroidMarkers":false, /* FALSE */
										"centroidMarkerLabels":false, /* FALSE */
										"toolTipType":"box",
										"headers":false, /* FALSE */
										"title":{ "text":"This is a title" , "color":"#000" , "size":"3.0vw" },
										"mainHeader":{ "text":"This is a mainHeader" , "color":"#000" , "size":"1.5vw" },
										"subHeader":{ "text":"This is a subHeader" , "color":"#000" , "size":"1.5vw" },
										"information":{ "text":"This map shows the global locations of individuals and entities, contained in the Thomson Reuters World-Check risk intelligence database, identified as connected to money laundering. Where connections have been identified, lines demonstrate the link." , "color":"#000" , "size":"1.25vw" },
										"legend":[0,0],
										"legendOrientation":"vertical",
										"legendBasePosition":"map",
										"legendSize":[150,200],
										"legendIndent":20,
										"legendCellWidth":15,
										"legendStroke":"#000000",
										"legendStrokeWidth":0.0,
										"legendFill":"#A0A0A0",
										"legendOpacity":0.75,
										"legendCornerRadius":0,
										"legendTextFill":"#FFFFFF",
										"legendElementYOffset":25,
										"legendElementYOffsetBuffer":25,
										"boundarySet":"world-topo-min.json",
										"mapStyle":"boundary",
										/*
											mercator = d3.geoMercator()
											albers = d3.geoAlbers()
											equirectangular = d3.geoEquirectangular()
											eckert4 = d3.geoEckert4()
											robinson = d3.geoRobinson()
											geoSinuMollweide = d3.geoSinuMollweide()
											naturalEarth = d3.geoNaturalEarth()
										*/
										"projection":"naturalEarth",
										"rotate":[80, 0],
										"centre":[0, 0],
										"precision":0.0,
										"parallels":[20, 50],
										"bounds":[
													/* 
														[ top left corner latlon ],
													 	[ bottom right corner latlon ]
																	
														[9.308014629302196, 33.182218662899096], 
														[25.148351781432424, 19.48368521768897]
													*/
												],
										"zoomLevel":1,
										"isPannable":true, /* TRUE */
										"mesh":false, /* FALSE */
										"duration":2000, /* 2000 */
										
										"land":"#CCCCCC",
										"coast":"#3F3F41",
										"coastWidth":"0.25px",
										"backgroundFill":"transparent",
										"solarTerminator":false, /* true , FALSE */
										
										"equator":false, /* true , FALSE */
										"equatorStrokeFill":"none",	
										"equatorStroke":"#000000",
										"equatorStrokeWidth":1.25,	
										"equatorStrokeOpacity":1.0,		
										"equatorStrokeDashArray":"10 10",
										
										"graticule":false, /* true , FALSE */
										"graticuleFill":"none",	
										"graticuleStroke":"#A0A0A0",
										"graticuleStrokeWidth":0.25,	
										"graticuleStrokeOpacity":0.250,
									
										"pathGradientDomain":[0, 100, 200],
										"pathGradientRange":['#1a9641','#ffffbf','#d7191c'],
										"vectorPaths":{
											"files":[/* 'vectorPath0.csv' */] 
										},
										"countriesToRemove":[ "Antarctica" ],
										"countriesToHighlight":{
											"files":[/* "countries.csv" */]
										},
										"flowPaths":{
											"files":[ "flowPoints.csv" , "flows.csv" ]
										},
										"locales":{
											"files":[/* 'locales.csv' */] 
										},
										"contours":{
											"files":[/* 'contour.csv' */] 
										},
										"hulls":{
											"files":[/* 'hulls.csv' */] 
										},
										"routes":{
											"files":[/* 'route0.csv' , 'route1.csv' */] 
										}
										
						}// end "vars"
				
			};// end json
		
		
		vis.dataPath = $(".trl-wrapper").data('path') + "/";
		if( vis.dataPath == undefined || vis.dataPath == '' || vis.dataPath == 'undefined/' ) { vis.dataPath = '../'; }
		else { vis.dataPath = $('.trl-wrapper').data('path') + '/'; }
		

		//vis.width = document.getElementById('container').offsetWidth; // get document container width 
		vis.width = $('.container').width(); // get document container width
		vis.height = (vis.width/2); // calculate container vis.height from container vis.width
		vis.active = d3.select(null); //
		vis.graticule = d3.geoGraticule(); // D3 graticule drawing function
		vis.throttleTimer; // variable for container responsive throttle timer
		vis.countries; // to contain countries loaded from topojson file
		vis.site; // relates to vornoi hull drawing 
		vis.enter; // relates to vornoi hull drawing 
		vis.worldObject; // world object
		vis.g; // glboal highest level group element onto which all else is attached
		vis.topo; // contains individual countries. 
		vis.tipg; //create a container for tooltips
		vis.windowIsResized = false; // defines if window is being.has been resized
		vis.legendElement = 0; // incrementor to travek number of individual legend elements added to main legend	
		vis.routes = {}; // initite object to hold 'routes' definitions. 'Routes' and associated styling are of the form https://bl.ocks.org/mbostock/5851933
		vis.list = []; // initialise an array to contain all the geographic areas on the boundary map displayed. Used to populated chosen text list 
		vis.vectorPaths = []; // initialise an object to contain all 'vectorPaths' to be draw.  
		vis.flowPoints = []; // array to contain all flow points to be displayed on map
		vis.srcflows = []; // array to contain all flow defintions to be displayed
		vis.centroidData = [];  // array to contain all gegroaphic ara centroid defintions. Assists with tooltip placement
		vis.countryCodes = [];
		vis.circle = d3.geoCircle().radius(90); // param to draw curves of solar terminator
		var π = Math.PI, radians = π / 180, degrees = 180/π; // param to draw curves of solar terminator
		var t = [0];
		var annotationtip;
		
		d3.select('.trl-toolTip').remove();
		vis.toolTip;
		
		
		// initialize global variables and 'vis.' object variables.
		d3.select(window).on("resize", throttle); // function call on window resize. Enables map responsive
		
		
		// defines map zoom characterists available.
		vis.zoom = d3.zoom()
					.scaleExtent([1, 10])
					.on("zoom", function(){
						if( vis.onLoadVariables.vars.isPannable == true ){ zoomed(); }
					});
					
					
		// defines false centroids that have to be defined for problematic geographies
		// (e.g. those countries that appear on left and right of map for some projections, as a multi polygon')
		vis.falseCentroids = [
								{ key: "France", value:[ 830.00, 115.00 ] },
								{ key: "China", value:[ 130.00, 155.00 ] },
								{ key: "Indonesia", value:[ 100.00, 310.00 ] },
								{ key: "Russia", value:[ 950.00, 65.00 ] }
							];


	
	
		/*
			NAME:			setup
			DESCRIPTION:	intitialise view constraints based on vis.width and height of viewable area.  	 
			CALLED FROM:	redraw
							Modernizr.svg onload	 
			CALLS:			zoom		
			REQUIRES: 		width - width of viewing window/area
							height - height of viewing window/area
			RETURNS: 		n/a		
		*/
		function setup(){
			
			 
			// switch statement to handle user defined  map projection contained in vis. object
			// uses other parameters such as rotate, centre, parallels to set uop initial map view
			switch (vis.onLoadVariables.vars.projection) {
				
				
				case "mercator":
					vis.projection = d3.geoMercator()
									.center(vis.onLoadVariables.vars.centre)
									.rotate(vis.onLoadVariables.vars.rotate)
									.translate([(vis.width/2), (vis.height/2)])
									.scale(vis.width/2/Math.PI);
					break;
					
					
				case "albers":
					vis.projection = d3.geoAlbers()
									.scale( vis.width / 2 / Math.PI)
									.translate([(vis.width/2), (vis.height/2)])
									.parallels(vis.onLoadVariables.vars.parallels);
					break;
					
					
				case "equirectangular":
					vis.projection = d3.geoEquirectangular()
									.scale( vis.width / 2 / Math.PI)
									.rotate(vis.onLoadVariables.vars.rotate)
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
					
				case "eckert4":
					vis.projection = d3.geoEckert4()
									.center(vis.onLoadVariables.vars.centre)
									.rotate(vis.onLoadVariables.vars.rotate)
									.scale( vis.width / 2 / Math.PI)
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
					
				case "robinson":
					vis.projection = d3.geoRobinson()
									.center(vis.onLoadVariables.vars.centre)
									.rotate(vis.onLoadVariables.vars.rotate)
									.scale( vis.width / 2 / Math.PI)
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
					
				case "geoTransverseMercator":
					vis.projection = d3.geoTransverseMercator()
									.scale((vis.width - 3) / (2*Math.PI))
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
					
				case "geoSinuMollweide":
					vis.projection = d3.geoSinuMollweide()
									.scale((vis.width) / (2*Math.PI))
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
					
				case "naturalEarth":
					vis.projection = d3.geoNaturalEarth()
									.precision(.1)
									.scale((vis.width) / (2*Math.PI))
									.translate([(vis.width/2), (vis.height/2)]);
					break;
					
			}// end switch
						
						
			// initiates parth definition based on user defined map projections		
			vis.path = d3.geoPath().projection(vis.projection);
			
			
			if( vis.onLoadVariables.vars.legendBasePosition == "top" ){
				attachLegendSVG();
			}// end if 
			
			
			// build main svg panel onto which all content is attached
			vis.svg = d3.select("#container")
							.append("svg")
							.attr("id", "svg")
							.attr("class", "trl-svg")
							.attr("width", vis.width)
							.attr("height", vis.height)
							.call(vis.zoom)
							.on("click", stopped, true)
							.append("g");
						
						
			if( vis.onLoadVariables.vars.legendBasePosition == "base" ){
				attachLegendSVG();
			}// end if 
	
					
			// attach invisible panel to handle map mouse events
			vis.svg.append("rect")
				.attr("class", "trl-background")
				.attr("width", vis.width)
				.attr("height", vis.height)
				.style("fill", function(){
					/*if( vis.onLoadVariables.vars.day == true ){ return vis.onLoadVariables.vars.backgroundFillDay; }
					else if( vis.onLoadVariables.vars.day == false ){ return vis.onLoadVariables.vars.backgroundFillNight; }*/
					return vis.onLoadVariables.vars.backgroundFill;
				})
				.on("click", reset);
			
			
			// attach parent g element and attach zoom fucntion to main svg panel
			vis.g = vis.svg.append("g").attr("id", "parent-G");
			vis.svg.call(vis.zoom);
			
			
			// set up background colors for control panels. Colours defined in vis.js
			d3.selectAll(".trl-panel0").style("background-color" , vis.onLoadVariables.vars.panel0);
			d3.selectAll(".trl-panel1").style("background-color" , vis.onLoadVariables.vars.panel1);
			d3.selectAll(".trl-panel2").style("background-color" , vis.onLoadVariables.vars.panel2);
			d3.selectAll(".trl-panel3").style("background-color" , vis.onLoadVariables.vars.panel3);
			
			return;
			
		}// end function setup()


	
	
		/*
			NAME:			attachLegendSVG
			DESCRIPTION:	attaches dedicated SVG panel to main graphic container to hold legend 
			CALLED FROM:	setup
			CALLS:			n/a
			REQUIRES: 		n/a
			RETURNS: 		n/a		
		*/
		function attachLegendSVG(){
			
		
			// append addtional SVG panel to contain legend IF 	legendBasePosition == "base"
			// legendOrientation should be set to horizontal
			vis.svgLegend = d3.select("#container")
							.append("svg")
							.attr("id", "svgLegend")
							.attr("class", "trl-svgLegend")
							.attr("width", vis.width)
							.attr("x", 0 )
							.attr("y", ($("#container").height()));
							
			return;
		
		}// end function attachLegendSVG() 


	
	
		/*
			NAME:			draw
			DESCRIPTION:	[re]draws map graticule and equator, as well as boundary layer  	 
			CALLED FROM:	drawBoundary
							redraw	 
			CALLS:			vis.zoom
							tip
							loadFlows
							loadPaths
							drawSolarTerminator
							loadHulls
							loadRoutes
							loadContours
							loadLocales
							highlightCountries
							zoomTo
							drawLegend		
			REQUIRES: 		topo - object containing all topojson countries. 
			RETURNS: 		n/a		
		*/
		function draw(s){
			
			
			// remove map graticule and equator before redrawing
			d3.selectAll(".trl-graticule").remove();
			d3.selectAll(".trl-equator").remove();
			
			
			// initialise domain and range for colour scale associated to paths drawn
			// update domain and range for colour scale associated to paths drawn with values taken from config file
			vis.linearScale = d3.scaleLinear().domain(-1,1).range(-1,1);
			vis.linearScale.domain(vis.onLoadVariables.vars.pathGradientDomain).range(vis.onLoadVariables.vars.pathGradientRange);
			
			
			// check and action if graticule is needed
			if( vis.onLoadVariables.vars.graticule == true ){
				
				
				// attach graticule grid
				// https://bl.ocks.org/pnavarrc/7dbc309801d07610de44
				vis.svg.append("path")
					.datum(vis.graticule)
					.attr("class", "trl-graticule")
					.attr("d", vis.path)
					.style("fill" , function(){ return "none"; })
					.style("stroke" , function(){ return vis.onLoadVariables.vars.graticuleStroke; })
					.style("stroke-width" , vis.onLoadVariables.vars.graticuleStrokeWidth)
					.style("stroke-opacity" , vis.onLoadVariables.vars.graticuleStrokeOpacity);
			
			} // end if .. 
			
			
			// attach all topojson objects onto parent-G on main SVG panel 
			vis.g.selectAll("path")
				.data(topojson.feature(vis.worldObject,vis. worldObject.objects.countries).features)
				.enter()
				.append("path")
				.attr("d", vis.path)
				.attr("id", function(d,i) { return SpaceToHyphen(d.properties.name); })
				.attr("title", function(d,i) {
					
					
					// push country name onto list to populate selection list on controls
					vis.list.push(d.properties.name);
					return d.properties.name;
				})
				.attr('data-c0', function(d) { return vis.path.centroid(d)[0]; })
				.attr('data-c1', function(d) { return vis.path.centroid(d)[1]; })
				.attr("class", function(d,i){
					
					
					// if country has both valied centroid [lon,lat values , 
					if( isNaN(parseFloat(d3.select(this).attr('data-c0'))) == false && isNaN(parseFloat(d3.select(this).attr('data-c1'))) == false ){
							
						vis.centroidData.push([
									vis.projection.invert([parseFloat(d3.select(this).attr('data-c0')) , parseFloat(d3.select(this).attr('data-c1')) ])[0] ,
									vis.projection.invert([parseFloat(d3.select(this).attr('data-c0')) , parseFloat(d3.select(this).attr('data-c1')) ])[1] ,
									3 ,
									-1 ,
									d.properties.name
									])
					}// end if ... 
					
					
					// if 'centroidMarkers' are to be shown ... 
					if( vis.onLoadVariables.vars.centroidMarkers == true ){
						
						
						// ... and has a valid centroid longitude value
						if( isNaN(d3.select(this).attr('data-c0')) == false ){
					
					
							// attach circle at centroid point
							vis.g.append("circle")
								.attr("class" , "trl-centroidMarkers " + SpaceToUnderscore(d.properties.name))
								.attr("id" , "centroidMarker-" + SpaceToUnderscore(d.properties.name))
								.attr("cx" , parseFloat(d3.select(this).attr('data-c0')) )
								.attr("cy" , parseFloat(d3.select(this).attr('data-c1')) )
								.attr("r" , 3)
								.on("mouseover", function(d,i){ });
						
						
							// if 'centroidMarkerLabels' are to be shown ... 
							if( vis.onLoadVariables.vars.centroidMarkerLabels == true ){
								
					
								// attach text label at centroid point
								vis.g.append("text")
									.attr("class" , "trl-centroidMarkerLabels " + SpaceToUnderscore(d.properties.name))
									.attr("id" , "centroidMarkerLabel-" + SpaceToUnderscore(d.properties.name))
									.attr("x" , (parseFloat(d3.select(this).attr('data-c0')))+3 )
									.attr("y" , (parseFloat(d3.select(this).attr('data-c1')))-3 )
									.text(d.properties.name);
							}
							
						}// end if ...
						
					}// end if...
					
					
					// return class name ....
					return "trl-feature " + SpaceToHyphen(d.properties.name);
				})
				.on("click", clicked)
				.on("mouseover", function(d,i) {
					
					
					// display tooltip
					d3.selectAll('.trl-toolTip').style("display" , "inline");
					
					
					// determine and store selected area's fill colour,
					// modify opacity and fill colour of ALL map geometries
					// modify opacity and fill colour of SELECTED map geometry
					vis.featureColor = d3.select(this).style("fill");
					d3.selectAll(".trl-feature").style("fill-opacity" , 0.33).style("fill" , "ccc" + "!important");
					d3.select(this).style("fill-opacity", 1.0).style("fill" , vis.featureColor + "!important");
				})
				.on('mousemove', function(d,i) {
					
					
					// return information relevant to country selected on map to populate tooltip 
					var result = vis.countryData.filter(function( obj ) {
						return obj.country == d.properties.name;
					});
					
					
					// determine if selected country has tooltip information or a placeholder text has t be used.
					if ( result.length != 0 ){ vis.tooltipVAI = result[0].tooltip; }
					else{ vis.tooltipVAI = "No Information Provided"; }
				
					
					// display tolltip on mousemove over country. Different option available.
					// link line pointer style OR box tyle (similar to Crypto currnecy vis) 
					if( vis.onLoadVariables.vars.toolTipType == "line"){
						
						
						// construct a temporary array of content
						var q = [
								vis.projection.invert([parseFloat(d3.select(this).attr('data-c0')) , parseFloat(d3.select(this).attr('data-c1')) ])[0] ,
								vis.projection.invert([parseFloat(d3.select(this).attr('data-c0')) , parseFloat(d3.select(this).attr('data-c1')) ])[1] ,
								3 ,
								-1 ,
								d.properties.name,
								vis.tooltipVAI 
							];
						
						
						// call function to display tooltip
						tip(q);
					
						
					}// end if ... 
					else if( vis.onLoadVariables.vars.toolTipType == "box"){
						
						
						// get mouse coordinates. helps in positioning of tooltip relative to mouse/country selected
						vis.m = d3.mouse(this);
						if( Number(vis.m[0]) <= vis.width/2 ){ vis.toolTip.style('left', Number(vis.m[0]) + 'px').style('top', Number(vis.m[1]+25) + 'px'); }
						else{ vis.toolTip.style('left', Number(vis.m[0]-325) + 'px').style('top', Number(vis.m[1]+25) + 'px'); }
						
						
						// call function to display country information. Needs refining per project; use case specific
						showCountryInformation(d, vis.tooltipVAI);
						var sel = d3.select("#"+this.id);
						sel.moveToFront();
					}
				})
				.on("mouseout", function() {
					
					
					// modify opacity and fill colour of SELECTED map geometry
					// remove tooltip
					// modify opacity and fill colour of ALL map geometries
					d3.select(this).style("fill" , vis.featureColor);
					vis.tipg.selectAll("g").remove();
					d3.selectAll(".trl-feature").style("fill-opacity" , 1.0);
					
					
					// remove tooltip content
					d3.selectAll(".trl-toolTipFurniture").remove();
					vis.toolTip.style('opacity', 0);
				})
				.style("display", function(d,i){
					
					
					// enter switch statement to determine if country should be displayed or not
					switch( vis.onLoadVariables.vars.countriesToRemove.indexOf(d.properties.name) ) {
						case -1:
							return "inline";
							break;
							
						default:
							return "none";
							
					}// end switch
				})/*
				.style("stroke", function(d,i){
					if( vis.onLoadVariables.vars.day == true ){ return vis.onLoadVariables.vars.coastDay; }
					else if( vis.onLoadVariables.vars.day == false ){ return vis.onLoadVariables.vars.coastNight; }
				})
				.style("stroke-width", function(d,i){
					if( vis.onLoadVariables.vars.day == true ){ return vis.onLoadVariables.vars.coastWidthDay; }
					else if( vis.onLoadVariables.vars.day == false ){ return vis.onLoadVariables.vars.coastWidthNight; }
				})
				.style("fill", function(d,i){
					if( vis.onLoadVariables.vars.day == true ){ return vis.onLoadVariables.vars.landDay; }
					else if( vis.onLoadVariables.vars.day == false ){ return vis.onLoadVariables.vars.landNight; }
				})*/
				.style("stroke", function(d,i){
					return vis.onLoadVariables.vars.coast;
				})
				.style("stroke-width", function(d,i){
					return vis.onLoadVariables.vars.coastWidth;
				})
				.style("fill", function(d,i){
					return vis.onLoadVariables.vars.land;
				});
													
				/*
			vis.toolTip = d3.select('.trl-container')
								.append('div')
								.attr('class', 'trl-toolTip');*/
				
		
			// if map mesh is to be displayed ... 
			if( vis.onLoadVariables.vars.mesh == true ){
					
					
				// attache da path oject for mesh 	
				vis.g.append("path")
					.datum(topojson.mesh(vis.worldObject, vis.worldObject.objects.countries, function(a, b) { return a !== b; }))
					.attr("class", "trl-mesh")
					.attr("d", vis.path);
					
			}// end id .. 
				
				
			// if user wants equator line to be displayed.
			if( vis.onLoadVariables.vars.equator == true ){
				
				
				// draw equator
				vis.g.append("path")
					.datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
					.attr("class", "trl-equator")
					.attr("d", vis.path)
					.style("fill" , vis.onLoadVariables.vars.equatorFill)
					.style("stroke" , vis.onLoadVariables.vars.equatorStroke)
					.style("stroke-width" , vis.onLoadVariables.vars.equatorStrokeWidth)
					.style("stroke-opacity" , vis.onLoadVariables.vars.equatorStrokeOpacity)
					.style("stroke-dasharray" , vis.onLoadVariables.vars.equatorStrokeDashArray);
			
			}// end if...
			
			
			// inidividual checks and function calls depending on style of content to be shown,
			// e.g. flows, vector paths, routes, contours, locations etc...
			if ( vis.onLoadVariables.vars.countriesToHighlight.files.length != 0 ){ highlightCountries(vis.onLoadVariables.vars.countriesToHighlight.files); } // highlight defined countries in choropleth views
			if ( vis.onLoadVariables.vars.flowPaths.files.length != 0 ){ loadFlows(vis.onLoadVariables.vars.flowPaths.files); } // draw spider flow paths , from->to
			if ( vis.onLoadVariables.vars.vectorPaths.files.length != 0 ){ loadPaths(vis.onLoadVariables.vars.vectorPaths.files); } // draw vector paths 
			if ( vis.onLoadVariables.vars.solarTerminator == true ){ drawSolarTerminator(); } // draw solar terminator
			if ( vis.onLoadVariables.vars.hulls.files.length != 0 ){ loadHulls(vis.onLoadVariables.vars.hulls.files); } // draw voronoi hull areas
			if ( vis.onLoadVariables.vars.routes.files.length != 0 ){ loadRoutes(vis.onLoadVariables.vars.routes.files); } // draw route defintions
			if ( vis.onLoadVariables.vars.contours.files.length != 0 ){ loadContours(vis.onLoadVariables.vars.contours.files); } // draw contour areas
			if ( vis.onLoadVariables.vars.locales.files.length != 0 ){ loadLocales(vis.onLoadVariables.vars.locales.files); } // draw discrete point locations
			if ( vis.onLoadVariables.vars.bounds.length != 0 ){ zoomTo(vis.onLoadVariables.vars.bounds); } // zoom map to defined bounding box on load
			if ( vis.onLoadVariables.vars.legend.length != 0 ){ drawLegend(); } // draw map legend REFERENCE URL: 	http://d3-legend.susielu.com
		
		
			vis.tipg = vis.svg.append("g").attr("class", "trl-annotation-tip");
			
			
			return;
			
				
		}// end function draw()
		
		



	
		/*
			NAME: 			highlightCountries
			DESCRIPTION: 	function to highlight countries in choropleth style based on content of vis.countriesToHighlight
			CALLED FROM:	draw
			CALLS:			translateLegendCells 
			REQUIRES: 		file - name of file containing countries to highlight 
			RETURNS: 		n/a		
		*/
		function highlightCountries(file){
			
			
			//var filePath = vis.onLoadVariables.vars.dataFilesPath + file; // define file path to load
			var filePath = vis.dataPath + "data/" + file; // define file path to load
			var legendLabels = []; // initialise array to contain legend labels
			var legendColours = []; // initialise array to define legend element colours
			var legendPositions = []; // initialise array to define legend element colours
			
			
			//file exists
			//console.log(filePath + " does exist");
			var LegendOrder = [];
			
			
			// read in CSV file content
			d3.csv(filePath, function(data) {
				
				
				// store as vis. variable all country data from csv file 
				vis.countryData = data;
				
				
				// for each element in .csv file
				data.forEach(function(d,i){
					
			
					// determine if data point/row/entry is a comment line to be excluded,
					// or true data line that needs to be mapped
					if( d.exclude.length==0 ){
						
						
						if( LegendOrder[+d.legendPosition] === undefined ){
							LegendOrder[+d.legendPosition] = {
																"legendPosition":+d.legendPosition,
																"fill":d.fill,
																"legendEntry":d.legendEntry
															}
						}// end if ... 
						
						
						// update country geometry fill color
						d3.selectAll(".trl-feature."+SpaceToHyphen(d.country)).style("fill" , d.fill);
					}
				})// end forEach
				
				
				// order content for legend.
				LegendOrder.forEach(function(d,i){
					legendLabels.push(d.legendEntry);
					legendColours.push(d.fill);
				})
			
			
				// if map legend is required on display
				// REFERENCE URL: 	http://d3-legend.susielu.com
				if( vis.onLoadVariables.vars.legend != '' ){
							
							   
					var ordinal = d3.scaleOrdinal().domain(legendLabels).range(legendColours); // define ordinal colour range	
					var svg = d3.select("#trl-legend"); // select base SVG element
					
	
					// position SVG element
					svg.append("g")
						.attr("class", "legend legendOrdinal-"+vis.legendElement)
						.attr("id", "legendElement-"+vis.legendElement)
						.attr("transform", "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + ( vis.legendElementYOffset ) + ")");
					
					
					// draw legend content
					var legendOrdinal = d3.legendColor()
											.shapePadding(10)
											.classPrefix("trl-")
											.title("Levels of acceptance")
											.orient(vis.onLoadVariables.vars.legendOrientation)
											.scale(ordinal);
					
					
					svg.select(".legendOrdinal-"+vis.legendElement).call(legendOrdinal);
					d3.selectAll(".trl-label").style("fill" , vis.onLoadVariables.vars.legendTextFill);
					d3.selectAll(".trl-legendTitle").style("fill" , vis.onLoadVariables.vars.legendTextFill);
					
					
					// recalculate yoffset variable to position content after any legend content already present // highlightCountries
					if( vis.onLoadVariables.vars.legendOrientation == "vertical" ){ 
						vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + ((legendLabels.length+1)*22.5); // not sure why this needs to be 22.5!!
					}
					else {
						vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + 50; // not sure why this needs to be 22.5!!
					}
					
					
					//modify height of legend SVG according to amount of legend content
					d3.selectAll(".trl-legendBackground").attr("height" , vis.legendElementYOffset);
					d3.selectAll(".trl-svgLegend").attr("height" , vis.legendElementYOffset);
					vis.legendElement++; // increment legend element counter by 1
					
					
					// modify coloured cell swatch width to reflect horizontal or vertical orinteation of legend
					d3.selectAll(".trl-swatch").attr("width" , vis.onLoadVariables.vars.legendCellWidth);
					
					
					// modify translation of legend cells if orientation is 'horizontal'
					if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
						translateLegendCells(d3.selectAll(".trl-cell")._groups[0]);
					}
					
					
				}// end if .. 
			});
	
/*	
			$.ajax({
					url:(filePath),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log("[" + filePath + "] does not exist");
						
					},// end file load failure
					success: function(){
						
						//file exists
						console.log(filePath + " does exist");
						var LegendOrder = [];
						
						
						// read in CSV file content
						d3.csv(filePath, function(data) {
							
							
							// store as vis. variable all country data from csv file 
							vis.countryData = data;
							
							
							// for each element in .csv file
							data.forEach(function(d,i){
								
						
								// determine if data point/row/entry is a comment line to be excluded,
								// or true data line that needs to be mapped
								if( d.exclude.length==0 ){
									
									
									if( LegendOrder[+d.legendPosition] === undefined ){
										LegendOrder[+d.legendPosition] = {
																			"legendPosition":+d.legendPosition,
																			"fill":d.fill,
																			"legendEntry":d.legendEntry
																		}
									}// end if ... 
									
									
									// update country geometry fill color
									d3.selectAll(".trl-feature."+SpaceToHyphen(d.country)).style("fill" , d.fill);
								}
							})// end forEach
							
							
							
							// order content for legend.
							LegendOrder.forEach(function(d,i){
								legendLabels.push(d.legendEntry);
								legendColours.push(d.fill);
							})
						
						
							// if map legend is required on display
							// REFERENCE URL: 	http://d3-legend.susielu.com
							if( vis.onLoadVariables.vars.legend != '' ){
										
										   
								var ordinal = d3.scaleOrdinal().domain(legendLabels).range(legendColours); // define ordinal colour range	
								var svg = d3.select("#trl-legend"); // select base SVG element
								
				
								// position SVG element
								svg.append("g")
									.attr("class", "legend legendOrdinal-"+vis.legendElement)
									.attr("id", "legendElement-"+vis.legendElement)
									.attr("transform", "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + ( vis.legendElementYOffset ) + ")");
								
								
								// draw legend content
								var legendOrdinal = d3.legendColor()
														.shapePadding(10)
														.classPrefix("trl-")
														.title("Levels of acceptance")
														.orient(vis.onLoadVariables.vars.legendOrientation)
														.scale(ordinal);
								
								
								svg.select(".legendOrdinal-"+vis.legendElement).call(legendOrdinal);
								d3.selectAll(".trl-label").style("fill" , vis.onLoadVariables.vars.legendTextFill);
								d3.selectAll(".trl-legendTitle").style("fill" , vis.onLoadVariables.vars.legendTextFill);
								
								
								// recalculate yoffset variable to position content after any legend content already present // highlightCountries
								if( vis.onLoadVariables.vars.legendOrientation == "vertical" ){ 
									vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + ((legendLabels.length+1)*22.5); // not sure why this needs to be 22.5!!
								}
								else {
									vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + 50; // not sure why this needs to be 22.5!!
								}
								
								
								//modify height of legend SVG according to amount of legend content
								d3.selectAll(".trl-legendBackground").attr("height" , vis.legendElementYOffset);
								d3.selectAll(".trl-svgLegend").attr("height" , vis.legendElementYOffset);
								vis.legendElement++; // increment legend element counter by 1
								
								
								// modify coloured cell swatch width to reflect horizontal or vertical orinteation of legend
								d3.selectAll(".trl-swatch").attr("width" , vis.onLoadVariables.vars.legendCellWidth);
								
								
								// modify translation of legend cells if orientation is 'horizontal'
								if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
									translateLegendCells(d3.selectAll(".trl-cell")._groups[0]);
								}
								
								
							}// end if .. 
						});
					
					}// end file load success
				});
*/
				
			return;
			
		}// end function highlightCountries()



	
		/*
			NAME: 			translateLegendCells
			REFERENCE URL:	
			DESCRIPTION:	function to manipulate legend element content dependent on whether legend orientation is horiztonal or vertical,
							and underlying layer to which it is attached is map or base  	 
			CALLED FROM:	highlightCountries
							drawPaths
							drawFlows
							drawHulls
			CALLS:			n/a	
			REQUIRES: 		cells - array of relevant trl-cell class DOM elements to manipulate	
			RETURNS: 		n/a		
		*/
		function translateLegendCells(cells){
			
			
			
			// loop through all relevant cells on legendElements
			cells.forEach(function(d,i){
				d3.select(d).attr("class" , ".trl-cell trl-cell-"+vis.legendElement).attr("id" , "cell-"+vis.legendElement+"-"+i).attr("transform" , "translate(" + (i*(vis.onLoadVariables.vars.legendCellWidth*1.5)) + "," + (0) + ")");
				d3.select(d).selectAll(".trl-label").attr("transform" , "translate(" + (0) + "," + (33) + ")").style("text-anchor" , "start");
			})// end forEach
			
			
			// reset justify on all trl-legendCells to left edge
			d3.selectAll(".trl-legendCells").attr("transform" , function(d,i){ return "translate(0,11.5)"; });

						
			// initialise yOffset to factor in display on left or right or legend. 	
			vis.yOffset = 25;
			d3.selectAll(".legend")
							.attr("transform" , function(d,i){
								if( isEven(i) == true ){
									if ( i!=0 ){ vis.yOffset = vis.yOffset+75; }
									return "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + (vis.yOffset) + ")";
								}
								else {
									return "translate(" + (vis.width/2) + "," + (vis.yOffset) + ")";
								}
							});
			
			
			d3.selectAll(".trl-legendBackground").attr("height" , vis.yOffset+50);
			d3.selectAll(".trl-svgLegend").attr("height" , vis.yOffset+50);
			
			
			return;
			
			
		}// end function translateLegendCells()



	
		/*
			NAME: 			loadLocales
			REFERENCE URL:	
			DESCRIPTION:	function to load data for locations to plot on map	 	 
			CALLED FROM:	draw	 
			CALLS:			drawLocales
			REQUIRES: 		files - file name containing locations to plot	
			RETURNS: 		n/a		
		*/
		function loadLocales(files){
			
			files.forEach(function(d,i){
				
				// construct realtive file path to laod data from ... 
				//var file = vis.onLoadVariables.vars.dataFilesPath + d;
				var filePath = vis.dataPath + "data/" + d; // define file path to load
				
				
				// read in CSV file content
				d3.csv(filePath, function(data) { drawLocales(data); });
					
/*
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log(file + " does not exist");
					},// end file load failure
					success: function(){
						
						//file exists
						console.log(d + " does exist");
						d3.csv(file, function(data) { drawLocales(data); });
					
					}// end file load success
				});
*/
			})
			
			return;
			
		}// end function loadLocales()




	
		/*
			NAME: 			loadContours
			REFERENCE URL:	https://bl.ocks.org/1wheel/5d6990abfff925e6a37e0557f1de18e5
			DESCRIPTION: 	function to load files containing contour information
			CALLED FROM:	draw
			CALLS:			drawContours
			REQUIRES: 		files - array of csv file names contianing contour area defintions
			RETURNS: 		n/a		
		*/
		function loadContours(files){
			
			files.forEach(function(d,i){
				
				//var file = vis.onLoadVariables.vars.dataFilesPath + d;
				var filePath = vis.dataPath + "data/" + d; // define file path to load
				
				d3.csv(filePath, function(data) { drawContours(data); });
			
/*					
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log(file + " does not exist");
					},// end file load failure
					success: function(){
						
						//file exists
						console.log(d + " does exist");
						d3.csv(file, function(data) { drawContours(data); });
					
					}// end file load success
				});
*/	
			})
			
			return;
			
		}// end function loadContours()




	
		/*
			NAME: 			loadRoutes
			REFERENCE URL:	https://bl.ocks.org/mbostock/5851933
			DESCRIPTION: 	function to lod data for defining individual routes
			CALLED FROM:	draw
			CALLS:			drawRoutes
			REQUIRES: 		files - array of csv file names containing route definitions
			RETURNS: 		n/a	
		*/
		function loadRoutes(files){
			
			
			files.forEach(function(d,i){
				
				
				var fl = d; // initialise file name as local variable
				//var file = vis.onLoadVariables.vars.dataFilesPath + fl; // extend file path to full definition
				var filePath = vis.dataPath + "data/" + d; // define file path to load
					
				
				d3.csv(filePath, function(data){
					
					var routeName = fl.replace(".csv" , ""); // extract route name from file name
					var coordinates = []; // initial ise array to contain route points
					
					
					// construct route object with param names
					vis.routes[routeName] = {};
					vis.routes[routeName].places = {};
					vis.routes[routeName].route = {};
					vis.routes[routeName].placeStyling = {};
					vis.routes[routeName].routeStyling = {};
						
				
					// for each point in data file
					data.forEach(function(d,i){
						
				
						// determine if data point/row/entry is a comment line to be excluded,
						// or true data line that needs to be mapped
						if( d.exclude.length==0 ){
							
							
							coordinates.push([+d.lat,+d.lon]); // temporarily store coordinates to push onto 'vis.routes[routeName].route'
							vis.routes[routeName].places[d.place] = [+d.lat,+d.lon];
							vis.routes[routeName].route = { "type": "LineString", "coordinates": coordinates };
															
															
							// define and populate placeStyling content
							vis.routes[routeName].placeStyling = { 
																"fill":d.fill,
																"stroke":d.stroke,
																"strokeWidth":d.strokeWidth,
																"radius":+d.radius,
																"opacity":+d.opacity
															 };
															 
															
							// define and populate routeStyling content
							vis.routes[routeName].routeStyling = { 
																"routeFill":d.routeFill,
																"routeStroke":d.routeStroke,
																"routeStrokeWidth":d.routeStrokeWidth,
																"routeStrokeOpacity":+d.routeStrokeOpacity
															 };
														 
														 
						}// end if ...
					
					})
				})
			})
			
			
/*
			// for each file listed in vis.routes.files ...
			files.forEach(function(d,i){
				
				
				var fl = d; // initialise file name as local variable
				var file = vis.onLoadVariables.vars.dataFilesPath + fl; // extend file path to full definition
					
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						//console.log(file + " does not exist");
					},// end file load failure
					success: function(){
						//file exists
						//console.log(file + " does exist");
						
						
						var route = {};// initialise local object to contain information of 'route'
						
						
						d3.csv(file, function(data) {
							
							
							var routeName = fl.replace(".csv" , ""); // extract route name from file name
							var coordinates = []; // initial ise array to contain route points
							
							
							// construct route object with param names
							vis.routes[routeName] = {};
							vis.routes[routeName].places = {};
							vis.routes[routeName].route = {};
							vis.routes[routeName].placeStyling = {};
							vis.routes[routeName].routeStyling = {};
						
						
							// for each point in data file
							data.forEach(function(d,i){
								
						
								// determine if data point/row/entry is a comment line to be excluded,
								// or true data line that needs to be mapped
								if( d.exclude.length==0 ){
									
									
									coordinates.push([+d.lat,+d.lon]); // temporarily store coordinates to push onto 'vis.routes[routeName].route'
									vis.routes[routeName].places[d.place] = [+d.lat,+d.lon];
									vis.routes[routeName].route = { "type": "LineString", "coordinates": coordinates };
																	
																	
									// define and populate placeStyling content
									vis.routes[routeName].placeStyling = { 
																		"fill":d.fill,
																		"stroke":d.stroke,
																		"strokeWidth":d.strokeWidth,
																		"radius":+d.radius,
																		"opacity":+d.opacity
																	 };
																	 
																	
									// define and populate routeStyling content
									vis.routes[routeName].routeStyling = { 
																		"routeFill":d.routeFill,
																		"routeStroke":d.routeStroke,
																		"routeStrokeWidth":d.routeStrokeWidth,
																		"routeStrokeOpacity":+d.routeStrokeOpacity
																	 };
																 
																 
								}// end if ...
							})
						});
					}// end file load success
				});
			})
*/
			
			
			// set very short time dely before actually drawing routes
			setTimeout(function(){ drawRoutes(vis.routes); }, 100);
		
		
			return;
			
			
		}// end function loadRoutes()




	
		/*
			NAME: 			loadHulls		
			REFERENCE URL:	https://bl.ocks.org/Fil/6a1ed09f6e5648a5451cb130f2b13d20
							https://gist.github.com/Fil/6a1ed09f6e5648a5451cb130f2b13d20
			DESCRIPTION: 	function to load data defining individual voronoi hulls 
			CALLED FROM:	draw
			CALLS:			drawHulls
			REQUIRES: 		files - array of file names containing information on individual hulls
			RETURNS: 		n/a		
		*/
		function loadHulls(files){
			
			
			// for each file listed in vis.hulls.files ...
			files.forEach(function(d,i){
				
				
				// set as local variable the full file path name ... 
				//var file = vis.onLoadVariables.vars.dataFilesPath + d;
				var filePath = vis.dataPath + "data/" + d; // define file path to load
				
				// load data in file and call function to draw voronoi Hulls
				d3.csv(filePath, function(data) { drawHulls(data); });
				
				
/*	
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log(file + " does not exist");
					},// end file load failure
					success: function(){
						
						//file exists
						console.log(d + " does exist");
						
						
						// load data in file and call function to draw voronoi Hulls
						d3.csv(file, function(data) { drawHulls(data); });
					
					}// end file load success
				});
*/
			})
		
		
			return;
			
			
		}// end function loadHulls()



	
	
		/*
			NAME: 			loadFlows	
			REFERENCE URL:	http://bl.ocks.org/ilyabo/2209220
							http://bl.ocks.org/Andrew-Reid/8de4b9d0d0a87a478770e0cc86e2f5e4
			DESCRIPTION: 	function to load data files containing information of spider flow paths to draw on map
			CALLED FROM:	draw	 
			CALLS:			drawFlows
			REQUIRES: 		files - array of file names containing information on individual flow spider sets
			RETURNS: 		n/a		
		*/
		function loadFlows(files){
	
	
			//file exists
			
			
			// for each file listed in vis.flowPaths.files ...
			files.forEach(function(d,i){
				
				//var file = vis.onLoadVariables.vars.dataFilesPath + d; // construct full file path to load data from
				var filePath = vis.dataPath + "data/" + d; // define file path to load
			
				
				// initialise objects to contain data
				var path = {};
				var flowPoints = {};
				var flow = {};
				var data = {};
				
				
				// if file contains the flow points to definition
				if( d == "flowPoints.csv" ){
					
					d3.csv(filePath, function(data) {
						data.forEach(function(d,i){
							flowPoints[d.place] = { "loc":[+d.lon,+d.lat] , "off":[+d.offX,+d.offY] };
						})	
								
						vis.flowPoints.push(flowPoints);
					});
				}
				if( d == "flows.csv" ){
					
					vis.srcflows[0] = [];
					
					d3.csv(filePath, function(data) {
						
						data.forEach(function(d,i){
							flow = {
										"exclude":d.exclude,
										"destination":d.destination,
										"labelFill":d.labelFill,
										"labelStroke":d.labelStroke,
										"labelStrokeWidth":d.labelStrokeWidth,
										"vol":d.vol,
										"flowStroke":d.flowStroke,
										"pointStroke":d.pointStroke,
										"pointfill":d.pointfill,
										"pointStrokeWidth":d.pointStrokeWidth,
										"displayAt":d.displayAt,
										"tapered":d.tapered,
										"flowStartPoint":d.flowStartPoint,
										"lon":d.lon,
										"lat":d.lat,
										"offX":d.offX,
										"offY":d.offY,
										"lineOpacity":d.lineOpacity,
										"pointOpacity":d.pointOpacity,
										"legendEntry":d.legendEntry
								};
									
							vis.srcflows[0].push(flow);
								
						})// end forEach	
					});
				}
			
				
	/*				
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log(file + " does not exist");
					},// end file load failure
					success: function(){
						
						//file exists
						console.log(d + " does exist");
						
						
						// initialise objects to contain data
						var path = {};
						var flowPoints = {};
						var flow = {};
						var data = {};
						
						
						// if file contains the flow points to definition
						if( d == "flowPoints.csv" ){
							
							d3.csv(file, function(data) {
								data.forEach(function(d,i){
									flowPoints[d.place] = { "loc":[+d.lon,+d.lat] , "off":[+d.offX,+d.offY] };
								})	
										
								vis.flowPoints.push(flowPoints);
							});
						}
						if( d == "flows.csv" ){
							
							vis.srcflows[0] = [];
							
							d3.csv(file, function(data) {
								
								data.forEach(function(d,i){
									flow = {
												"exclude":d.exclude,
												"destination":d.destination,
												"labelFill":d.labelFill,
												"labelStroke":d.labelStroke,
												"labelStrokeWidth":d.labelStrokeWidth,
												"vol":d.vol,
												"flowStroke":d.flowStroke,
												"pointStroke":d.pointStroke,
												"pointfill":d.pointfill,
												"pointStrokeWidth":d.pointStrokeWidth,
												"displayAt":d.displayAt,
												"tapered":d.tapered,
												"flowStartPoint":d.flowStartPoint,
												"lon":d.lon,
												"lat":d.lat,
												"offX":d.offX,
												"offY":d.offY,
												"lineOpacity":d.lineOpacity,
												"pointOpacity":d.pointOpacity,
												"legendEntry":d.legendEntry
										};
											
									vis.srcflows[0].push(flow);
										
								})// end forEach	
							});
						}
					
					}// end file load success
				});
	*/
			})
			
			
			// set very short time dely before actually drawing flows
			setTimeout(function(){ drawFlows(); }, 100);
			
			
			return;
			
			
		}// end function loadFlows()


	
	
	
		/*
			NAME: 			loadPaths		
			REFERENCE URL:	
			DESCRIPTION:	function to load data containing vector path information 	 
			CALLED FROM:	draw
			CALLS:			drawPaths
			REQUIRES: 		files - array of file names containing information on individual vector paths
			RETURNS: 		n/a		
		*/
		function loadPaths(files){
			
			
			files.forEach(function(d,i){
				
				
				//var file = vis.onLoadVariables.vars.dataFilesPath + d;//file exists
				var filePath = vis.dataPath + "data/" + d; // define file path to load
						
				
				// intialize path object
				var path = {};
				
				
				// load data from file
				d3.csv(file, function(data) {
					
					
					// for each element in data
					data.forEach(function(d,i){
					
						
						// check if input data line from .CSV file is a comment line to bypass  
						// or true data line to plot.
						if( d.exclude.length==0 ){
										
							
							// update path object 
							path[d.point] = {
												"loc":[+d.lon,+d.lat],
												"value":+d.value ,
												"projected":d.projected,
												"displayAt":+d.displayAt
											};
											
						}// end if ... 
					})
							
							
					// push path object onto main object			
					vis.vectorPaths.push(path);
					
					
				});
			})
			 
/*			
			files.forEach(function(d,i){
				
				var file = vis.onLoadVariables.vars.dataFilesPath + d;
					
				$.ajax({
					url:(file),
					type:'HEAD',
					error: function(){
						//file not exists
						console.log(file + " does not exist");
					},// end file load failure
					success: function(){//file exists
						
						
						// intialize path object
						var path = {};
						
						
						// load data from file
						d3.csv(file, function(data) {
							
							
							// for each element in data
							data.forEach(function(d,i){
							
								
								// check if input data line from .CSV file is a comment line to bypass  
								// or true data line to plot.
								if( d.exclude.length==0 ){
												
									
									// update path object 
									path[d.point] = {
														"loc":[+d.lon,+d.lat],
														"value":+d.value ,
														"projected":d.projected,
														"displayAt":+d.displayAt
													};
													
								}// end if ... 
							})
									
									
							// push path object onto main object			
							vis.vectorPaths.push(path);
							
							
						});
					}// end file load success
				});
			})
*/			
			
			// set very short time dely before actually drawing vector paths
			setTimeout(function(){ drawPaths(); }, 100);
			
			
			return;
			
			
		}// end function loadPaths()


	
	
	
		/*
			NAME: 			drawContours
			REFERENCE URL:	https://bl.ocks.org/1wheel/5d6990abfff925e6a37e0557f1de18e5		
			DESCRIPTION:	function to individual contour sets 	 
			CALLED FROM:	draw	 
			CALLS:			n/a
			REQUIRES: 		files - array of contour file names
			RETURNS: 		n/a		
		*/
		function drawContours(files){
			
			
			// for each file name...
			files.forEach(function(d,i){
				
		
				// determine if data point/row/entry is a comment line to be excluded,
				// or true data line that needs to be mapped
				if ( d.exclude.length==0 ){
			
				
					var filePath = vis.dataPath + "data/" + d; // define file path to load
					
					// ... constuct full file path to data and load data
					d3.loadData(/*vis.onLoadVariables.vars.dataFilesPath*/vis.dataPath + "data/" + d.contourFile, function(err, res){
						
						
						var points = res[0]; // grab points information
						var color = d3.scaleLog().domain(d.domain.split(",")).range(d.range.split(",")); // define color
						points.forEach(d => d.pos = vis.projection([d.lng, d.lat])) // define color for point
						
						
						// define contour
						var contour = d3.contourDensity()
										.x(d => d.pos[0])
										.y(d => d.pos[1])
										.bandwidth(+d.bandwidth)
										.thresholds(d.thresholds.split(",").map(Number))
										.cellSize(+d.cellSize);
							
							
						// define contour layer 			
						var layerSel = vis.svg.append('g')
							.attr('clip-path', 'url(#clip)')
							.appendMany(contour(points), 'path.trl-contour')
							.at({d: d3.geoPath(), fill: d => color(d.value)})
							
							
					})// end dataLoad
				
					
				}// end if ... 
			
			
			})// end forEach
			
			
			return;
			
			
		}// end function drawContours


	
	
	
		/*
			NAME: 			drawBoundary
			REFERENCE URL:			
			DESCRIPTION:	function to load topojson and store content 	 
			CALLED FROM:	Modernizr.inlinesvg
			CALLS:			draw
			REQUIRES: 		n/a
			RETURNS: 		n/a		
		*/
		function drawBoundary(){
			
			
			// construct topojson file path and load topojson boundary set
			d3.json(/*vis.onLoadVariables.vars.dataFilesPath*/vis.dataPath + "data/"+vis.onLoadVariables.vars.boundarySet, function(error, world) {
				if (error) throw error;
				
				
				// store data as local variable. 
				vis.worldObject = world;
				
				
				// store locally default on load zoom level. zoon map view to that level
				vis.currentZoomLevel = vis.onLoadVariables.vars.zoomLevel;
				vis.zoom.scaleTo(vis.svg, vis.currentZoomLevel);
				
				
				// extract out country geometries. call 'draw' function to plot map content
				vis. countries = topojson.feature(vis.worldObject, vis.worldObject.objects.countries).features;
				vis.topo = vis. countries;
				draw(vis.topo);
					
				
				// disable particular controls in map view is at one of the zoom extremes
				if( vis.currentZoomLevel == vis.zoom.scaleExtent()[1] ){
					$("#zoom_in").addClass("disabled");
					$(".magnify-in").addClass("disabled");
				}
				else if( vis.currentZoomLevel == vis.zoom.scaleExtent()[0] ){
					$("#zoom_out").addClass("disabled");
					$(".magnify-out").addClass("disabled");
				}
				else{ }
				
			
			});
			
			
			return;
			
			
		}// end function drawBoundary()


	
	
	
		/*
			NAME: 			drawSolarTerminator	
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2	
			DESCRIPTION:	function to draw day/night divide solar terminator on map view.
							Will update automatically on screen refresh  	 
			CALLED FROM:	draw
			CALLS:			n/a
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function drawSolarTerminator(){
			
			
			// set up and construct vis.night object
			vis.night = vis.svg.append("path").attr("class", "trl-solarTerminator-night").attr("d", vis.path);
			vis.night.datum(vis.circle.center(antipode(solarPosition(new Date)))).attr("d", vis.path);
			
			
			return;
		
		}// end function redrawSolarTerminator()


	
	
	
		/*
			NAME: 			antipode
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2			
			DESCRIPTION: 	used to draw SolarTerminator 
			CALLED FROM:	drawSolarTerminator 
			CALLS:			n/a	
			REQUIRES: 		position
			RETURNS: 		argument
		*/
		function antipode(position) {
			
			return [position[0] + 180, -position[1]];
		
		}// end function antipode()


	
	
	
		/*
			NAME: 			equationOfTime
			REFERENCE URL: 	http://www.esrl.noaa.gov/gmd/grad/solcalc/
			DESCRIPTION:	Equations based on NOAA’s Solar Calculator; all angles in radians.	 
			CALLED FROM:	solarPosition
			CALLS:			n/a
			REQUIRES: 		centuries
			RETURNS: 		arguments	
		*/
		function equationOfTime(centuries) {
			
			
			// initialise local time based variables
			var e = eccentricityEarthOrbit(centuries),
				m = solarGeometricMeanAnomaly(centuries),
				l = solarGeometricMeanLongitude(centuries),
				y = Math.tan(obliquityCorrection(centuries) / 2);
				y *= y;
				
				
			return y * Math.sin(2 * l)
				- 2 * e * Math.sin(m)
				+ 4 * e * y * Math.sin(m) * Math.cos(2 * l)
				- 0.5 * y * y * Math.sin(4 * l)
				- 1.25 * e * e * Math.sin(2 * m);
				
				
		}// end function equationOfTime

	
	
	
		/*
			NAME: 			solarDeclination
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2			
			DESCRIPTION: 	 
			CALLED FROM:	solarPosition
			CALLS:			solarApparentLongitude
							obliquityCorrection
			REQUIRES: 		centuries
			RETURNS: 		argument
		*/
		function solarDeclination(centuries) {
			
		  return Math.asin(Math.sin(obliquityCorrection(centuries)) * Math.sin(solarApparentLongitude(centuries)));
		
		} // end function solarDeclination


	
	
	
		/*
			NAME: 			solarApparentLongitude
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	solarDeclination
			CALLS:			solarTrueLongitude
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function solarApparentLongitude(centuries) {
			
		  return solarTrueLongitude(centuries) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * centuries) * radians)) * radians;
		
		}// end functionsolarApparentLongitude


	
	
	
		/*
			NAME: 			solarTrueLongitude	
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2	
			DESCRIPTION: 	 
			CALLED FROM:	solarApparentLongitude
			CALLS:			solarGeometricMeanLongitude
							solarEquationOfCenter
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function solarTrueLongitude(centuries) {
			
		  return solarGeometricMeanLongitude(centuries) + solarEquationOfCenter(centuries);
		  
		}// end function solarTrueLongitude


	
	
	
		/*
			NAME: 			solarGeometricMeanAnomaly
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	solarEquationOfCenter
							equationOfTime
			CALLS:			n/a
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function solarGeometricMeanAnomaly(centuries) {
			
		  return (357.52911 + centuries * (35999.05029 - 0.0001537 * centuries)) * radians;
		  
		}// end function solarGeometricMeanAnomaly


	
	
	
		/*
			NAME: 			solarGeometricMeanLongitude
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	equationOfTime 
			CALLS:			n/a	
			REQUIRES: 		centuries
			RETURNS: 		argument
		*/
		function solarGeometricMeanLongitude(centuries) {
			
		  var l = (280.46646 + centuries * (36000.76983 + centuries * 0.0003032)) % 360;  
		  
		  return (l < 0 ? l + 360 : l) / 180 * π;
		
		}// end function solarGeometricMeanLongitude


	
	
	
		/*
			NAME: 			solarEquationOfCenter
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	solarTrueLongitude 
			CALLS:			solarGeometricMeanAnomaly
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function solarEquationOfCenter(centuries) {
			
		  var m = solarGeometricMeanAnomaly(centuries);
		  
		  return (Math.sin(m) * (1.914602 - centuries * (0.004817 + 0.000014 * centuries))
			  + Math.sin(m + m) * (0.019993 - 0.000101 * centuries)
			  + Math.sin(m + m + m) * 0.000289) * radians;
			  
		}// end function solarEquationOfCenter


	
	
	
		/*
			NAME: 			obliquityCorrection	
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	solarDeclination
			CALLS:			meanObliquityOfEcliptic
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function obliquityCorrection(centuries) {
			
		  return meanObliquityOfEcliptic(centuries) + 0.00256 * Math.cos((125.04 - 1934.136 * centuries) * radians) * radians;
		
		}// end function obliquityCorrection


	
	
	
		/*
			NAME: 			meanObliquityOfEcliptic
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2	
			DESCRIPTION: 	 
			CALLED FROM:	obliquityCorrection 
			CALLS:			n/a
			REQUIRES: 		centuries
			RETURNS: 		argument	
		*/
		function meanObliquityOfEcliptic(centuries) {
			
		  return (23 + (26 + (21.448 - centuries * (46.8150 + centuries * (0.00059 - centuries * 0.001813))) / 60) / 60) * radians;
		
		}// end function meanObliquityOfEcliptic


	
	
	
		/*
			NAME: 			eccentricityEarthOrbit	
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	equationOfTime
			CALLS:			n/a	
			REQUIRES: 		centuries
			RETURNS: 		n/a		
		*/
		function eccentricityEarthOrbit(centuries) {
			
		  return 0.016708634 - centuries * (0.000042037 + 0.0000001267 * centuries);
		  
		} // end function eccentricityEarthOrbit


	
	
	
		/*
			NAME: 			solarPosition
			REFERENCE URL:	https://codepen.io/paulnoble/pen/qZaNRB
							http://bl.ocks.org/mbostock/4597134
							http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
			DESCRIPTION: 	 
			CALLED FROM:	drawSolarTerminator 
			CALLS:			equationOfTime
							solarDeclination
			REQUIRES: 		time	
			RETURNS: 		argument	
		*/
		function solarPosition(time) {
			
			
			var centuries = (time - Date.UTC(2000, 0, 1, 12)) / 864e5 / 36525, // since J2000
				longitude = (d3.utcDay
				.floor(time) - time) / 864e5 * 360 - 180;
				
				
			return [
				longitude - equationOfTime(centuries) * degrees,
				solarDeclination(centuries) * degrees
			];
			
			
		}// end function solarPosition


	
	
	
		/*
			NAME: 			redraw		
			DESCRIPTION:  	update view function. equialent to function 'draw'.	 
			CALLED FROM:	throttle
			CALLS:			setup
							draw
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function redraw() {
			
			
			
			//d3.selectAll(".trl-label").style("font-size" , '1.00em');
			
			
			// update values for width and height
			vis.width = document.getElementById('container').offsetWidth;
			vis.height = vis.width / 2;
			
			
			// modify positioning of control panels depending on if screen size is larger or smaller than tabl
			if( vis.width<768 ){
				d3.selectAll(".trl-panel2").attr("class" , "trl-panel trl-panel2 col-sm-12 col-xs-12 col-md-5 col-lg-5");
				d3.selectAll(".trl-panel3").attr("class" , "trl-panel trl-panel3 col-sm-0 col-xs-0 col-md-3 col-lg-3 hide");
			}
			else{
				d3.selectAll(".trl-panel2").attr("class" , "trl-panel trl-panel2 col-sm-8 col-xs-8 col-md-5 col-lg-5");
				d3.selectAll(".trl-panel3").attr("class" , "trl-panel trl-panel3 col-sm-4 col-xs-4 col-md-3 col-lg-3 show");
			}
			
			
			// remove old SVG panel to refresh it
			d3.select('#svg').remove();
			d3.select('#svgLegend').remove();
			
			
			
			// call view build functions
			setup();
			draw();
			
			
			return;
			
			
		}// end function redraw()


	
	
	
		/*
			NAME: 			throttle		
			DESCRIPTION:	function to handle resizing of visual 	 
			CALLED FROM:	 .resize function
			CALLS:			redraw
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function throttle(){
			
		
			// update relevant resize variables.
			vis.windowIsResized = true;
			vis.legendElementYOffset = vis.legendInitialYOffset;
			
			
			
			
			// logical check to determine situation of view at time of resize.
			if( vis.windowIsResized==true && vis.currentZoomLevel==1 ){
				
				
				// clear throttletimer and resize window.
				window.clearTimeout(vis.throttleTimer);
				vis.throttleTimer = window.setTimeout(function(){
					redraw();
				}, 200);
			}// end if ... 
			
			
			return;
			
			
		}// end function throttle()


	
	
	
		/*
			NAME: 			reset	
			DESCRIPTION: 	actions to perform if user resets view back to zoomlevel = 1 
			CALLED FROM:	click event on 'trl-background'
							#reset button
			CALLS:			n/a	
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function reset() {
			
			
			vis.active.classed("trl-active", false);
			vis.active = d3.select(null);
			
			
			vis.svg.transition()
				.duration(vis.onLoadVariables.vars.duration)
				.call( vis.zoom.transform, d3.zoomIdentity );
				
				
			// update values and styling of controls
			$("#reset").addClass("disabled");
			$(".magnify.reset").addClass("disabled");
			$(".trl-button-Zout").addClass("disabled");
			d3.selectAll(".trl-centrePoint").remove();
			d3.select("#trl-longitude").attr("class","trl-form-group has-error");
			d3.select("#trl-latitude").attr("class","trl-form-group has-error");
			$("#positionLongitude").val("").prop("placeholder","[-]123.45");
			$("#positionLatitude").val("").prop("placeholder","[-]12.34");
			
			
			return;
			
			
		}// end function reset


	
	
	
		/*
			NAME: 			zoomed		
			DESCRIPTION:	function called if users changed zoom level on map vis by some means
							(buttom zoon in/out or click on map) 	 
			CALLED FROM:	var zoom	 
			CALLS:			
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function zoomed(){
			
			
			// enable/disable reset button
			if( d3.event.transform.k!=1 || d3.event.transform.x!=0 || d3.event.transform.y!=0 ){
				$(".trl-button-reset").removeClass("disabled");
			}
			else{
				$(".trl-button-reset").addClass("disabled");
			}
			
			
			// update view of all zoomable map content (if any are shown).
			vis.g.attr("transform", d3.event.transform);
			d3.selectAll(".trl-paths").attr("transform", d3.event.transform);
			d3.selectAll(".trl-flows").attr("transform", d3.event.transform);
			d3.selectAll(".trl-placeLabels").attr("transform", d3.event.transform);
			d3.selectAll(".trl-locales").attr("transform", d3.event.transform);
			d3.selectAll(".trl-route").attr("transform", d3.event.transform);
			d3.selectAll(".trl-points").attr("transform", d3.event.transform);
			d3.selectAll(".trl-graticule").attr("transform", d3.event.transform).style("stroke-width", 0.25 + "px");
			d3.selectAll(".trl-gradientPath.trl-flow").attr("transform", d3.event.transform);
			d3.selectAll(".trl-contour").attr("transform", d3.event.transform);
			d3.selectAll(".trl-solarTerminator-night").attr("transform", d3.event.transform);
			d3.selectAll(".trl-annotation-tip").attr("transform", d3.event.transform);
		
		
			// update annotation tooltip 
			d3.selectAll(".trl-annotation-tip.annotation text").attr("transform", d3.event.transform);
			d3.selectAll(".trl-annotation-tip").attr("transform", d3.event.transform);
			
			
			// redraw all flow spiders if any are displayed
			vis.srcflows.forEach(function(d,i){
				var flow = d;
				
				flow.forEach(function(d,i){
					if( d3.event.transform.k>=d.displayAt ){ d3.selectAll(".trl-placeLabels."+d.destination).style("display" , "inline"); }
					else{ d3.selectAll(".trl-placeLabels."+d.destination).style("display" , "none"); }
				})
			})
			
			
			// redraw all vectorPaths if any are displayed
			vis.vectorPaths.forEach(function(d,i){
				var data = d;
				
				for (vectorPoint in data){
					
					if( d3.event.transform.k>=data[vectorPoint].displayAt ){ d3.selectAll(".trl-vertexLabels."+vectorPoint).style("display" , "inline"); }
					else{ d3.selectAll(".trl-vertexLabels."+vectorPoint).style("display" , "none"); }
					
				}// end for ...
			})
				
				
			// update current zoom /transform level
			vis.currentZoomLevel =  d3.event.transform.k;
			
			
			return;
			
			
		}// end function zoomed


	
	
	
		/*
			NAME: 			stopped	
			DESCRIPTION: 	If the drag behavior prevents the default click,
							also stop propagation so we don’t click-to-zoom. 	 
			CALLED FROM:	clcik event on trl-background 
			CALLS:			n/a
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		
		function stopped() {
			
			if (d3.event.defaultPrevented) d3.event.stopPropagation();
			return;
			
		}// end function stopped


	
	
	
		/*
			NAME: 			clicked	
			DESCRIPTION: 		 
			CALLED FROM:	 
			CALLS:			
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function clicked(d){
			
			
			// uopdate class name of reset button
			$(".magnify.reset").removeClass("disabled");
			
			
			// update active status and associated class names
			if (vis.active.node() === this) return reset();
			vis.active.classed("trl-active", false);
			vis.active = d3.select(this).classed("trl-active", true);
			
			
			/*
			calculate bounds of area
			path.bounds() output is [[left,top],[right,bottom]].
			Different from geo.path.bounds() output [[left, bottom], [right, top]]
			*/
			var bounds = vis.path.bounds(d),
				dx = bounds[1][0] - bounds[0][0],
				dy = bounds[1][1] - bounds[0][1],
				x = (bounds[0][0] + bounds[1][0])/2,
				y = (bounds[0][1] + bounds[1][1])/2,
				scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / vis.width, dy / vis.height))),
				translate = [vis.width / 2 - scale * x, vis.height / 2 - scale * y];
				
				
			// transition map to newly selected area
			vis.svg.transition()
				.duration(vis.onLoadVariables.vars.duration)
				.call( vis.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) )
				
				
			return;
			
		
		}// end function clicked


	
	
	
		/*
			NAME: 			Modernizr	
			DESCRIPTION: 	initialisation function to check for SVG support in browser	 
			CALLED FROM:	onload 
			CALLS:			 buildUI
							setup
							drawBoundary
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		//then, onload, check to see if the web browser can handle 'inline vis.svg'
		/*if (Modernizr.inlinesvg)*/
		$(document).ready(function(){
			
								
			// initialise some settings for defining display
			vis.legendPosition = vis.onLoadVariables.vars.legendSize[1];
			vis.legendInitialYOffset = vis.onLoadVariables.vars.legendElementYOffset;
			vis.legendElementYOffset = vis.onLoadVariables.vars.legendElementYOffset;
			vis.legendElementYOffsetBuffer = vis.onLoadVariables.vars.legendElementYOffsetBuffer;
			
			
			// call functions to draw initial UI on load.
			buildUI();
			setup();
			drawBoundary();
			loadData();
			
				
			vis.toolTip = d3.select('.trl-container')
								.append('div')
								.attr('class', 'trl-toolTip')
								.style("display" , "none");
			
			
			// initilise class stae of zoom control buttons
			$("#reset").addClass("disabled");
			$(".magnify.reset").addClass("disabled");
			
			
			// are controls required? if so, display them, if not, don't.
			if( vis.onLoadVariables.vars.controls == true ){ $(".row.controls").removeClass("hide"); }
			else{ $(".row.controls").addClass("hide"); }
		
		
		});// end $(document).ready(function(){
		


	
		/*
			NAME: 			buildUI
			DESCRIPTION: 	function to build intitial UI interface.
			CALLED FROM:	Modernizr.inlinesvg
			CALLS:			n/a
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function buildUI(){	
		
				
			// switch statement to handle display of header statements
			switch (vis.onLoadVariables.vars.headers) {
				
				
				case true:	
				   $(".headers").addClass("show"); // add 'show' class
				   
				   
					// individual checkes for each of  title, main heade, sub headers and supplementary information texts.
					if( vis.onLoadVariables.vars.title.text != '' ){
						d3.selectAll(".trl-title")
										.style("color" , vis.onLoadVariables.vars.title.color)
										.style("font-size" , vis.onLoadVariables.vars.title.size)
										.text(vis.onLoadVariables.vars.title.text)
					}
					if( vis.onLoadVariables.vars.mainHeader.text != '' ){
						d3.selectAll(".trl-mainHeader")
										.style("color" , vis.onLoadVariables.vars.mainHeader.color)
										.style("font-size" , vis.onLoadVariables.vars.mainHeader.size)
										.text(vis.onLoadVariables.vars.mainHeader.text);
					}
					if( vis.onLoadVariables.vars.subHeader.text != '' ){
						d3.selectAll(".trl-subHeader")
										.style("color" , vis.onLoadVariables.vars.subHeader.color)
										.style("font-size" , vis.onLoadVariables.vars.subHeader.size)
										.text(vis.onLoadVariables.vars.subHeader.text);
					}
					if( vis.onLoadVariables.vars.information.text != '' ){
						d3.selectAll(".trl-information")
										.style("color" , vis.onLoadVariables.vars.information.color)
										.style("font-size" , vis.onLoadVariables.vars.information.size)
										.text(vis.onLoadVariables.vars.information.text);
					}
					break;
					
				default:
					$(".headers").addClass("hide");
					break;
					
			}// end switch
			
			
			return;
			
		}// end function buildUI()


	
	
	
		/*
			NAME: 			zoomTo		
			DESCRIPTION: 	called on page load to zoom to user-defined bounding box , defined by vis.onLoadVariables.vars.bounds
			CALLED FROM:	draw
			CALLS:			n/a		
			REQUIRES: 		boundsSet - boundary information for area to zoom to.
			RETURNS: 		n/a		
		*/
		function zoomTo(boundsSet){
			
			
			// calcualte key bounds information
			var bounds = [ vis.projection(boundsSet[0]) , vis.projection(boundsSet[1]) ],
						dx = bounds[1][0] - bounds[0][0],  
						dy = bounds[1][1] - bounds[0][1],  
						x = (bounds[0][0] + bounds[1][0])/2,  
						y = (bounds[0][1] + bounds[1][1])/2, 
						scale = .9 / Math.max(dx/vis.width, dy/vis.height),
						translate = [vis.width/2-scale*x, vis.height/2-scale*y];
		
		
			// modify vis.width of svg coastline
			vis.svg.transition()
				.style("stroke-width", 1.5 + "px")
				.attr("transform", "translate(" + translate + ")scale(" + scale + ")");
			
			
			// transform translate all displayall  map content
			d3.selectAll(".trl-flows").attr("transform", "translate(" + translate + ")scale(" + scale + ")");
			d3.selectAll(".trl-paths").attr("transform", "translate(" + translate + ")scale(" + scale + ")");
			d3.selectAll(".trl-locales").attr("transform", "translate(" + translate + ")scale(" + scale + ")");
			d3.selectAll(".trl-route").attr("transform", "translate(" + translate + ")scale(" + scale + ")");
			d3.selectAll(".trl-points").attr("transform", "translate(" + translate + ")scale(" + scale + ")")
			d3.selectAll(".trl-graticule").attr("transform", "translate(" + translate + ")scale(" + scale + ")").style("stroke-width", 0.25/ scale + "px");
			d3.selectAll(".trl-solarTerminator-night").attr("transform", d3.event.transform);
			
			
			// update flows
			vis.srcflows.forEach(function(d,i){
				var flow = d;
				
				flow.forEach(function(d,i){
					if( d3.event.transform.k>=d.displayAt ){ d3.selectAll(".trl-placeLabels."+d.destination).style("display" , "inline"); }
					else{ d3.selectAll(".trl-placeLabels."+d.destination).style("display" , "none"); }
				})
			})
			
			return;
			
		}// end function zoomTo()


	
	
	
		/*
			NAME: 			drawLocales			
			DESCRIPTION: 	function to draw individual location points on map 
			CALLED FROM:	loadLocales 
			CALLS:			n/a		
			REQUIRES: 		locales -  object containing all point information to plot on map
			RETURNS: 		n/a		
		*/
		function drawLocales(locales){
			
			
			// append new group element to contain all location markers
			vis.g5 = vis.svg.append("g")
						.attr("class" , "trl-locales")
						.attr("id" , "locales")
						.attr("transform", "translate(0,0)");
				
				
			// store point information in global vis object
			// filter data on 'exclude' field content.
			// determine if data point/row/entry is a comment line to be excluded,
			// or true data line that needs to be mapped
			vis.locales = locales.filter(function(d,i) { return d.exclude.length==0; });
			
			
			// append circles for each point
			vis.localeMarkers = vis.g5.selectAll(".trl-locale")
				.data(vis.locales)
				.enter()
				.append("circle")
				.attr("class", function(d) { return "trl-locale trl-" + SpaceToHyphen(d.locale); })
				.attr("cx", function(d) { return vis.projection([+d.lon,+d.lat])[0]; } )
				.attr("cy", function(d) { return vis.projection([+d.lon,+d.lat])[1]; } )
				.attr("r", function(d) { return d.radius; })
				.style("fill", function(d) { return d.fill; })
				.style("stroke-width", function(d) { return d.strokeWidth; })
				.style("stroke", function(d) { return d.stroke; })
				.style("opacity", function(d) { return d.opacity; })
			
			
			// append labels for each circle for each point
			vis.localeLabels = vis.g5.selectAll(".trl-localeLabels")
				.data(vis.locales)
				.enter()
				.append("text")
				.attr("class", function(d) { return "trl-localeLabel trl-" + SpaceToHyphen(d.locale); })
				.attr("x", function(d) { return vis.projection(/*d.loc*/[+d.lon,+d.lat])[0]+d.radius; } )
				.attr("y", function(d) { return vis.projection(/*d.loc*/[+d.lon,+d.lat])[1]-d.radius; } )
				.style("fill", function(d) { return d.labelFill; })
				.style("stroke-width", function(d) { return d.labelStrokeWidth; })
				.style("stroke", function(d) { return d.labelStroke; })
				.style("opacity", function(d) { return d.labelOpacity; })
				.text(function(d) { return d.locale; });
				
			return;
			
		}// end function drawLocales()


	
	
	
		/*
			NAME: 			drawPaths		
			DESCRIPTION: 	Draw a set of vector paths (e.g storm, transit, commodity routes etc...).
							Adds content to legend if necessary  	 
			CALLED FROM:	loadPaths
							translateLegendCells 
			CALLS:			n/a	
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function drawPaths(){
			
			
			// initialize local variables.
			var lastPoint;
			var thisPoint;
			var pathNumber = 0;
			var pointNumber = 0;
				
				
			// for each vector path ...  
			vis.vectorPaths.forEach(function(d,i){
				
				var data = d; // localise data
				pointNumber = 0; // reset point vertex ID number
				
				
				// append new group element to main svg
				vis.g3 = vis.svg.append("g").attr("class" , "trl-paths").attr("id" , "path-"+i);
				
				
				// for each vector point on vector path
				for (vis.vectorPoint in data){
					
					
					// draw path vertex point
					vis.g3.append("circle")
						.attr("class","trl-vertex " + vis.vectorPoint)
						.attr("id", function(d,i) { return "path-" + pathNumber + "-" + vis.vectorPoint; })
						.attr("cx", function(d) { return vis.projection(data[vis.vectorPoint].loc)[0]-0;  })
						.attr("cy", function(d) { return vis.projection(data[vis.vectorPoint].loc)[1]+3 } )
						.attr("r", function(d) { return 2; })
						.style("fill", function(d,i){ return vis.linearScale(data[vis.vectorPoint].value); })
						.style("stroke", function(d,i){ return vis.linearScale(data[vis.vectorPoint].value); });
						
						
					// draw path vertex point
					vis.g3.append("text")
						.attr("class","trl-vertexLabels " + vis.vectorPoint)
						.attr("x", function(d){ return vis.projection(data[vis.vectorPoint].loc)[0]; })
						.attr("y", function(d){ return vis.projection(data[vis.vectorPoint].loc)[1]; })
						.text(vis.vectorPoint)
						.style("display" , function(){
							if( vis.currentZoomLevel>=data[vis.vectorPoint].displayAt ){ return "inline"; }
							else{ return "none"; }
						});
						
					
					// make reference to preference point 
					if( pointNumber == 0 ){
						thisPoint = "path-" + pathNumber + "-" + vis.vectorPoint;
						lastPoint = thisPoint;
					}
					else{
							
						// draw path line segment between two successive data points
						vis.g3.append("line")
							.attr("class" , "trl-trail")
							.attr("id" , function(d,i){ return "trail-"+ pointNumber; })
							.attr("x1", d3.select("#"+lastPoint).attr("cx"))
							.attr("y1", d3.select("#"+lastPoint).attr("cy"))
							.attr("x2", d3.select("#path-" + pathNumber + "-" + vis.vectorPoint).attr("cx"))
							.attr("y2", d3.select("#path-" + pathNumber + "-" + vis.vectorPoint).attr("cy"))
							.style("stroke", function(d,i){ return vis.linearScale(data[vis.vectorPoint].value); })
							.style("fill", function(d,i){ return vis.linearScale(data[vis.vectorPoint].value); })
							.style("stroke-dasharray", function(d,i){
								if ( data[vis.vectorPoint].projected == true ){ return "3 3"; }
							});
						
						
						// make reference to preference point 
						thisPoint = "path-" + pathNumber + "-" + vis.vectorPoint;
						lastPoint = thisPoint;
						
					}// end else ...
					
					pointNumber++; // update vertex point reference ID
					
				}// end for ... 
				
				pathNumber++; // update vertex point reference ID
			
			})// end forEach...
			
			
			// if legend is required by user ... 
			// REFERENCE URL: 	http://d3-legend.susielu.com
			if( vis.onLoadVariables.vars.legend != '' ){
						
						  
				// set up legend gradient scale and range		  
				var linear = d3.scaleLinear().domain(vis.onLoadVariables.vars.pathGradientDomain).range(vis.onLoadVariables.vars.pathGradientRange);
				var svg = d3.select("#trl-legend"); // reference to legend svg
				
				
				// append new group element to main legend group
				svg.append("g")
					.attr("class", "legend legendLinear-"+vis.legendElement)
					.attr("id", "legendElement-"+vis.legendElement)
					.attr("transform", "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + ( vis.legendElementYOffset ) + ")");
				
				
				// define characteristics of legend content
				var legendLinear = d3.legendColor()
										.shapeWidth(30)
										.orient('horizontal')
										.labelFormat(",d")
										.classPrefix("trl-")
										.title("Vector Path defintion (units)")
										/*.orient(vis.onLoadVariables.vars.legendOrientation)*/
										.scale(linear);
				
				
				// call legend defintion and draw legend content
				svg.select(".legendLinear-"+vis.legendElement).call(legendLinear);
				d3.selectAll(".trl-label").style("fill" , vis.onLoadVariables.vars.legendTextFill);
				d3.selectAll(".trl-legendTitle").style("fill" , vis.onLoadVariables.vars.legendTextFill);
				
				
				// recalculate yoffset variable to position content after any legend content already present // drawPaths
				if( vis.onLoadVariables.vars.legendOrientation == "vertical" ){ 
					vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + (1*50);
				}
				else {
					vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + 50;
				}
				//vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + (1*50);
				d3.selectAll(".trl-legendBackground").attr("height" ,  vis.legendElementYOffset);
				d3.selectAll(".trl-svgLegend").attr("height" , vis.legendElementYOffset);
				vis.legendElement++; // update legend element incrementor
				
				
				// modify coloured cell swatch width to reflect horizontal or vertical orinteation of legend
				if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
					d3.selectAll(".trl-swatch").attr("width" , vis.onLoadVariables.vars.legendCellWidth);
				}
				
				
				// modify translation of legend cells if orientation is 'horizontal'
				if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
					translateLegendCells(d3.selectAll(".trl-cell")._groups[0]);
				}
				
				
			}// end if legend ... 
					 
					 
			return;
			
			
		}//end function drawPaths()
		
		




	
		/*
			NAME: 			drawLegend
			REFERENCE URL: 	http://d3-legend.susielu.com
			DESCRIPTION: 	function to draw background rectangle to legend 
			CALLED FROM:	draw 
			CALLS:			n/a	
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		function drawLegend(){
			
			
			// append to different SVG panel depending on value of vis.onLoadVariables.vars.legendBasePosition
			// append to main map, as an overlay
			if( vis.onLoadVariables.vars.legendBasePosition == "map" ){
				
				vis.legend = vis.svg.append("g")
					.attr("class", "trl-legend")
					.attr("id", "trl-legend")
					.attr("transform", function(){
							return "translate(" + (vis.onLoadVariables.vars.legend[0]) + "," + (vis.onLoadVariables.vars.legend[1]) + ")";
						});
					
						
				// remove dedicated SVG Legend panel if not needed/if legend being overlain on map
				$(".trl-svgLegend").remove();
			}
			// append below main map, as an addiive content. Not overlaying
			else if( vis.onLoadVariables.vars.legendBasePosition == "base" || vis.onLoadVariables.vars.legendBasePosition == "top" ){
				
				vis.legend = vis.svgLegend.append("g")
					.attr("class", "trl-legend")
					.attr("id", "trl-legend")
					.attr("transform", function(){
							return "translate(" + (vis.onLoadVariables.vars.legend[0]) + "," + (vis.onLoadVariables.vars.legend[1]) + ")";
						}); 
			}
			else{
			}
		
			// append SVG rectangle to to legend group to act as background to legend.
			vis.legend.append("rect")
				.attr("class" , "trl-legendBackground")
				.attr("x" ,  0)
				.attr("y" ,  0)
				.attr("rx" , vis.onLoadVariables.vars.legendCornerRadius)
				.attr("ry" , vis.onLoadVariables.vars.legendCornerRadius)
				.attr("width" , function(){
					if( Array.isArray(vis.onLoadVariables.vars.legendSize) == true ){ return vis.onLoadVariables.vars.legendSize[0]; }
					else{ return "100%"; }
				})
				.style("stroke" , vis.onLoadVariables.vars.legendStroke)
				.style("stroke-width" , vis.onLoadVariables.vars.legendStrokeWidth)
				.style("fill" , vis.onLoadVariables.vars.legendFill)
				.style("opacity" , vis.onLoadVariables.vars.legendOpacity);
			
				
			return;
			
			
		}// end function drawLegend()
		
		


	
	
	
		/*
			NAME: 			drawFlows
			REFERENCE URL: 	http://d3-legend.susielu.com - legend
							http://blockbuilder.org/syntagmatic/4164283223f19e260b41 - tapered arcs
							http://bl.ocks.org/Andrew-Reid/8de4b9d0d0a87a478770e0cc86e2f5e4 - general monotone simple flows
			DESCRIPTION: 	function to draw a set of flows. Can CURRENTLY handle single coloured fixed width flows;
							needs improving to handle gradient widths, two-tone gradient colours, and colour ramps 
			CALLED FROM:	loadFlows
			CALLS:			translateLegendCells 	
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		

		function drawFlows(){
			
			
			// initializes local arrays
			var legendLabels = [];
			var legendColours = [];
					
						
			// for each flow defintion
			vis.srcflows.forEach(function(d,i){
				
				
				// append new group elements to attach flows and labels to 
				vis.g1 = vis.svg.append("g").attr("class" , "trl-flows").attr("id" , "flows-"+i).attr("transform", "translate(0,0)");
				vis.g2 = vis.svg.append("g").attr("class" , "trl-labels").attr("id" , "labels-"+i).attr("transform", "translate(0,0)");
				
					
				// store point information in global vis object
				// filter data on 'exclude' field content.
				// determine if data point/row/entry is a comment line to be excluded,
				// or true data line that needs to be mapped
				vis.flows =  vis.srcflows[i].filter(function(d,i) { return d.exclude.length==0; });
			
			
				// append new paths for each flow definition
				vis.routePath = vis.g1.selectAll(".trl-flow")
					.data(vis.flows)
					.enter()
					.append("path")
					.attr("class", function(d,i){ return "trl-flow " + d.destination; })
					.attr("id", function(d,i){ return "trl-flow-" + d.destination; })
					.style("stroke-width", function(d) { return 50 * d.vol; })
					.style("stroke", function(d) { return d.flowStroke; })
					.style("opacity", function(d) { return d.lineOpacity; })
					.style("fill", function(d) { return "none"; })
					.attr('d', function(d) {
						
						
						// construct new array of colout and label information to help build new legend elements
						if( legendLabels.indexOf(d.legendEntry) == -1 || legendColours.indexOf(d.flowStroke) == -1 ){
							legendLabels.push(d.legendEntry);
							legendColours.push(d.flowStroke);
						}
						
						return vis.path ({ 
							type:"LineString",
							coordinates:[
											vis.flowPoints[i][d.flowStartPoint].loc,
											vis.flowPoints[i][d.destination].loc
										]
						});
					})
					
					
				// append new circles for each flow point definition
				vis.portMarkers = vis.g1.selectAll(".trl-point")
					.data(vis.flows)
					.enter()
					.append("circle")
					.attr("class",function(d,i){ return "trl-point"; })
					.style("stroke-width", function(d) { return d.pointstrokeWidth; })
					.style("stroke", function(d) { return d.pointStroke; })
					.style("fill", function(d) { return d.pointfill; })
					.attr("id", function(d) { return SpaceToHyphen(d.destination); })
					.style("opacity", function(d) { return d.pointOpacity; })
					.attr("cx", function(d) { return vis.projection(vis.flowPoints[i][d.destination].loc)[0] } )
					.attr("cy", function(d) { return vis.projection(vis.flowPoints[i][d.destination].loc)[1] } )
					.attr("r", function(d) { return (d.vol*25); });
				
				
				// append new circle labels for each flow point definition	
				vis.portLabels = vis.g2.selectAll("trl-placeLabels")
					.data(vis.flows)
					.enter()
					.append("text")
					.attr("class", function(d,i){ return "trl-placeLabels " + d.destination; })
					.style("fill", function(d,i){ return d.labelFill; })
					.style("stroke", function(d,i){ return d.labelStroke; })
					.style("stroke-width", function(d,i){ return d.labelStrokeWidth; })
					.attr("x", function(d) { return vis.projection(vis.flowPoints[i][d.destination].loc)[0] + vis.flowPoints[i][d.destination].off[0] } )
					.attr("y", function(d) { return vis.projection(vis.flowPoints[i][d.destination].loc)[1] - vis.flowPoints[i][d.destination].off[1] } )
					.text(function(d) { return d.destination })
					.style("display" , function(d,i){
						if( vis.currentZoomLevel>=d.displayAt ){ return "inline"; }
						else{ return "none"; }
					})
					
					
				//	handle requsts for tapering and 
	//			vis.onLoadVariables.vars.flows.forEach(function(d,i){
//						
//						var destinations = d;
//						
//						destinations.forEach(function(d,i){
//							//console.log(d.flowStroke);
//							var color;
//							var colourValues = d.flowStroke;
//							
//							if( Array.isArray(/*d.col*/colourValues) == true ){
//								var destination = d.destination;
//								var tapered = d.tapered;
//								
//								if( /*d.col*/colourValues.length==1 ){ color = getColor(colourValues[0]); }
//								else if( /*d.col*/colourValues.length==2 ){ color = d3.interpolateRgb(colourValues[0], colourValues[1]); }
//								else{ }
//								
//							}// end isArray check
//							else{
//								color = /*d.*/colourValues;
//								var destination = d.destination;
//								var tapered = d.tapered;	
//							}
//							
//							var width = d3.selectAll(".trl-flow." +d.destination).style("stroke-width");
//							var path = d3.selectAll(".trl-flow." +d.destination).remove();
//							
//							d3.selectAll(".trl-svg").selectAll(".trl-flow." +d.destination)
//								.data(quads(samples(path.node(), 8)))
//								.enter()
//								.append("path")
//								.attr("class", function(d){ return "trl-gradientPath trl-flow "+destination; })
//								.attr("id", function(d,i){ return "trl-gradientPath-"+destination+"-"+i; })
//								.style("fill", function(d){
//									if( Array.isArray(colourValues) == true ){ return color(d.t); }
//									else{ return color; }
//								})
//								.style("stroke", function(d){
//									if( Array.isArray(colourValues) == true ){ return color(d.t); }
//									else{ return color; }
//								})
//								.style("stroke-width", function(d) { return "0px"; })
//								.attr("d", function(d , i) {
//									//console.log(tapered)
//									return lineJoin(d[0], d[1], d[2], d[3], width , i, tapered);
//								});
//							
//						})// end inner forEach
//							
//					})// end outer forEach		
			
			})// end forEach
				
				
			// move all flow and flow labels to top of map view. prevents these being mased by country outline	
			var sel = vis.svg.selectAll(".trl-flows");
			sel.moveToFront();
			var sel = vis.svg.selectAll(".trl-labels");
			sel.moveToFront();
			var sel = vis.svg.selectAll(".trl-legend");
			sel.moveToFront();
			
			
			// if user want a legend to be created ...
			if( vis.onLoadVariables.vars.legend != '' ){
				
				
				// define original scale. Create reference to legend svg panel							   
				var ordinal = d3.scaleOrdinal().domain(legendLabels).range(legendColours);
				var svg = d3.select("#trl-legend");
				
				
				// append new group element for this legend entry content to main svg panel
				svg.append("g")
					.attr("class", "legend legendOrdinal-"+vis.legendElement)
					.attr("id", "legendElement-"+vis.legendElement)
					.attr("transform", "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + ( vis.legendElementYOffset ) + ")");
					
					
				// define ordinal legend characteristics
				var legendOrdinal = d3.legendColor()
										.shapePadding(10)
										.classPrefix("trl-")
										.title("Flows (Units)")
										.orient(vis.onLoadVariables.vars.legendOrientation)
										.scale(ordinal);
										
				
				// create legend entry content
				svg.select(".legendOrdinal-"+vis.legendElement).call(legendOrdinal);
				d3.selectAll(".trl-label").style("fill" , vis.onLoadVariables.vars.legendTextFill);
				d3.selectAll(".trl-legendTitle").style("fill" , vis.onLoadVariables.vars.legendTextFill);
		
		
				// recalculate yoffset variable to position content after any legend content already present // drawFlows
				if( vis.onLoadVariables.vars.legendOrientation == "vertical" ){ 
					vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + ((legendLabels.length+1)*20); // not sure why this needs to be 22.5!!
				}
				else {
					vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + 50; // not sure why this needs to be 22.5!!
				}
				
				
				//modify height of legend SVG according to amount of legend content
				d3.selectAll(".trl-legendBackground").attr("height" , vis.legendElementYOffset);
				d3.selectAll(".trl-svgLegend").attr("height" , vis.legendElementYOffset);
				vis.legendElement++; // increment legend element counter by 1

				
				// modify coloured cell swatch width to reflect horizontal or vertical orinteation of legend
				d3.selectAll(".trl-swatch").attr("width" , vis.onLoadVariables.vars.legendCellWidth);
				
				
				// modify translation of legend cells if orientation is 'horizontal'
				if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
					translateLegendCells(d3.selectAll(".trl-cell")._groups[0]);
				}
			
			
			}// end if .. 
			
			
			return;
			
			
		}// end function drawFlows()
		

	
	
	
		/*
			NAME: 			getColor		
			DESCRIPTION:	determine colour value/ramp/gradient to use for draw gradiated paths. 	 
			CALLED FROM:	drawFlows
			CALLS:			n/a
			REQUIRES: 		c - color parameter defintion	
			RETURNS: 		color - selected color to use
		*/
		function getColor(c){
			
			var color; // local color value to return from function 
	
			switch (c){
					
				case "vis.c1":
					color = d3.interpolatePlasma;
					break;
				case "vis.c2":
					color = d3.interpolateMagma;
					break;
				case "vis.c3":
					color = d3.interpolateInferno;
					break;
				case "vis.c4":
					color = d3.interpolateViridis;
					break;
				case "vis.c5":
					color = d3.interpolateRainbow;
					break;
				case "vis.c6":
					color = d3.interpolateWarm;
					break;
				case "vis.c7":
					color = d3.interpolateCool;
					break;
				case "vis.c8":
					color = d3.interpolateCubehelixDefault;
					break;
				case "vis.c9":
					color = d3.interpolateBlues;
					break;
				case "vis.c10":
					color = d3.interpolateGreens;
					break;
				case "vis.c11":
					color = d3.interpolateGreys;
					break;
				case "vis.c12":
					color = d3.interpolateOranges;
					break;
				case "vis.c13":
					color = d3.interpolatePurples;
					break;
				case "vis.c14":
					color = d3.interpolateReds;
					break;
				case "vis.c15":
					color = d3.interpolateBuGn;
					break;
				case "vis.c16":
					color = d3.interpolateBuPu;
					break;
				case "vis.c17":
					color = d3.interpolateGnBu;
					break;
				case "vis.c18":
					color = d3.interpolateOrRd;
					break;
				case "vis.c19":
					color = d3.interpolatePuBuGn
					break;
				case "vis.c20":
					color = d3.interpolatePuBu;
					break;
				case "vis.c21":
					color = d3.interpolatePuRd;
					break;
				case "vis.c22":
					color = d3.interpolateRdPu;
					break;
				case "vis.c23":
					color = d3.interpolateYlGnBu;
					break;
				case "vis.c24":
					color = d3.interpolateYlGn;
					break;
				case "vis.c25":
					color = d3.interpolateYlOrBr;
					break;
				case "vis.c26":
					color = d3.interpolateYlOrRd;
					break;
					
			}// end switch
			
		
			return color;
			
			
		}// end function getColor()

	
	
	
		/*
			NAME: 			drawRoutes
			REFERENCE URL:	https://bl.ocks.org/mbostock/5851933
			DESCRIPTION: 	function to draw routes
			CALLED FROM:	loadRoutes
			CALLS:			n/a
			REQUIRES: 		routes - object containing route information
			RETURNS: 		n/a		
		*/
		function drawRoutes(routes){
				
			
			var route;	
			
				
			// for each route define in data object ...
			for (route in routes){
								
								
				// append path to main svg panel				
				vis.svg.append("path")
					.datum(routes[route].route)
					.attr("class", "trl-route")
					.attr("d", vis.path)
					.style("fill",routes[route].routeStyling.routeFill)
					.style("stroke",routes[route].routeStyling.routeStroke)
					.style("stroke-width",routes[route].routeStyling.routeStrokeWidth)
					.style("opacity",routes[route].routeStyling.routeStrokeOpacity);
				
				
				// append new group element to contain all routes	
				var point = vis.svg.append("g")
					.attr("class", "trl-points")
					.selectAll("g")
					.data(d3.entries(routes[route].places))
					.enter()
					.append("g")
					.attr("transform", function(d) { return "translate(" + vis.projection(d.value) + ")"; });
				
				
				// append location vertex point to main svg panel	
				point.append("circle")
					.attr("r",routes[route].placeStyling.radius)
					.style("fill",routes[route].placeStyling.fill)
					.style("stroke",routes[route].placeStyling.stroke)
					.style("stroke-width",routes[route].placeStyling.strokeWidth)
					.style("opacity",routes[route].placeStyling.opacity)
				
				
				// append location vertex point label to main svg panel	
				point.append("text")
					.attr("y", 10)
					.attr("dy", ".71em")
					.text(function(d) { return d.key; });
					
					
			}// end for ... 
		

			return;
			
			
		}// end function drawRoutes()
		


	
	
	
		/*
			NAME: 			substringMatcher		
			DESCRIPTION: 	function to handle test input into gegraphy search list	 
			CALLED FROM:	typeahead selection list 
			CALLS:			
			REQUIRES: 		n/a	
			RETURNS: 		n/a		
		*/
		var substringMatcher = function(strs) {
			
			return function findMatches(q, cb) {
				
				
				//var matches, substringRegex;
				vis.matches;
				vis.substringRegex;
				
				
				// an array that will be populated with substring matches
				vis.matches = [];
				
				
				// regex used to determine if a string contains the substring `q`
				vis.substrRegex = new RegExp(q, 'i');
				
				
				// iterate through the pool of strings and for any string that
				// contains the substring `q`, add it to the `matches` array
				$.each(strs, function(i, str) {
					if (vis.substrRegex.test(str)) { vis.matches.push(str); }
				});
				
				cb(vis.matches);
			};
			
		}; //  substringMatcher
		
		
		
		// typeahead selection list definition
		$('#the-basics').bind('typeahead:selected', function(obj, datum) {
			$(".magnify.reset").removeClass("disabled");
			hightlightCountry(datum , "search");
		});
		$('#the-basics .typeahead').typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			{
				name: 'states',
				source: substringMatcher(vis.list)
			})
			.on("blur", function(e){
			})
			.on("focus", function(e){
			});


		
		
		
			/*
				NAME: 			hightlightCountry
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				CALLED FROM:	user typing typeahead selection list
				CALLS:			
				REQUIRES: 		selectedCountry - country selected by user
				RETURNS: 		n/a		
			*/
			function hightlightCountry(selectedCountry){
				
				
				// initialise local variables with country information
				vis.countries = topojson.feature(vis.worldObject, vis.worldObject.objects.countries).features;
				var country = {};
				
				
				// filter country information to that for selected country
				vis.countries.forEach(function(d,i){
					if (d.properties.name == selectedCountry){ country = d; }
				})
				
				
				// update class names for trl-feature map object
				d3.selectAll(".trl-feature").style("fill-opacity" , 0.33).style("stroke-width" , 0.25);
				d3.selectAll(".trl-feature."+SpaceToHyphen(selectedCountry)).style("fill-opacity" , 1.0).style("stroke-width" , 0.50);
				
					
				/*
				path.bounds() output is [[left,top],[right,bottom]].
				Different from geo.path.bounds() output [[left, bottom], [right, top]]
				*/
				var bounds = vis.path.bounds(country),
					dx = bounds[1][0] - bounds[0][0],
					dy = bounds[1][1] - bounds[0][1],
					x = (bounds[0][0] + bounds[1][0]) / 2,
					y = (bounds[0][1] + bounds[1][1]) / 2,
					scale = Math.max(1, Math.min(8, 0.9/Math.max(dx/vis.width, dy/vis.height))),
					translate = [vis.width/2-scale*x, vis.height/2-scale*y];
					
					
				// transition and update map view
				vis.svg.transition()
					.duration(vis.onLoadVariables.vars.duration)
					.call( vis.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );
					
				
				return;
				
				
			}// end function hightlightCountry()


		
		
		
			/*
				NAME: 			zoomMap	
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				CALLED FROM:	zoom in and zoom out buttons on control panel 
				CALLS:			zoom
				REQUIRES: 		fid - button ID information of button pressed	
				RETURNS: 		n/a		
			*/
			function zoomMap(fid){
				
				
				// update classname of reset controls...
				$("#reset").addClass("disabled");
				$(".magnify.reset").addClass("disabled");
				
				
				// check FID of selected button and action accordingly
				if( fid.id == "zoom_in" ){
					if( Number(vis.currentZoomLevel+1) <= vis.zoom.scaleExtent()[1] ){
						vis.currentZoomLevel++; // increase zoom level by 1
						
						
						// update button class names accordingly
						if( vis.currentZoomLevel == vis.zoom.scaleExtent()[1] ){
							$(".trl-button-Zout").addClass("disabled");
							$(".magnify-in").addClass("disabled");
						}
						$(".trl-button-Zout").removeClass("disabled");
						$(".magnify-out").removeClass("disabled");
					}
				}
				else if( fid.id == "zoom_out" ){
					if( Number(vis.currentZoomLevel-1) >= vis.zoom.scaleExtent()[0] ){
						vis.currentZoomLevel--; // decreased zoom level by 1
						
						
						// update button class names accordingly
						if( vis.currentZoomLevel == vis.zoom.scaleExtent()[0] ){
							$(".trl-button-Zin").addClass("disabled");
							$(".magnify-out").addClass("disabled");
						}
						$(".trl-button-Zin").removeClass("disabled");
						$(".magnify-in").removeClass("disabled");
					}
				}
				else{ }
				
				
				// update map view to new zoom level 
				vis.zoom.scaleTo(vis.svg, vis.currentZoomLevel);
				
				
				return;
				
				
			}// end function zoomMap


		
		
		
			/*
				NAME: 			samples
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				DESCRIPTION: 	function called if user requried tapered/gradient coloured flow paths to be draw
				CALLED FROM:	drawFlows 
				CALLS:			n/a
				REQUIRES: 		path
								precision
				RETURNS: 		arguments
			*/
			function samples(path, precision){
				
				
				var n = path.getTotalLength(), i = 0, dt = precision;
				while ((i += dt) < n) t.push(i);
				t.push(n);
				
				
				return t.map(function(t) {
					var p = path.getPointAtLength(t), a = [p.x, p.y];
					a.t = t / n;
					return a;
				});
				
			  
			}// end function samples


		
		
		
			/*
				NAME: 			quads
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				DESCRIPTION: 	function called if user requried tapered/gradient coloured flow paths to be draw
								Compute quads of adjacent points [p0, p1, p2, p3].
				CALLED FROM:	drawFlows
				CALLS:			n/a
				REQUIRES: 		points  - number of points to consider
				RETURNS: 		arguments
			*/
			function quads(points) {
				
				
				vis.numberOfSteps = points.length-1;// calculate number of points to consider
				
				
				return d3.range(points.length - 1).map(function(i) {
					var a = [points[i - 1], points[i], points[i + 1], points[i + 2]];
					a.t = (points[i].t + points[i + 1].t) / 2;
					return a;
				});
				
			  
			}// end function quads


		
		
		
			/*
				NAME: 			lineJoin
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				DESCRIPTION: 	function called if user requried tapered/gradient coloured flow paths to be draw
				CALLED FROM:	drawFlows
				CALLS:			n/a
				REQUIRES: 		p0
								p1
								p2
								p3
								width - initial path width (i.e. max width of taper)
								count - number of points to consider
								tapered  - user defined boolean var to define if path requires tapering
				RETURNS: 		n/a		
			*/
			function lineJoin(p0, p1, p2, p3, /*vis.width,*/ count, tapered){
			
			
				// initial local variables.
				var widthIncrementor = vis.width/vis.numberOfSteps;
				var r;
				
				
				// calculation required if user wants a tapered path
				if( tapered == true ){ r = (vis.width-(widthIncrementor*count))/2; }
				else{ r = vis.width/2; }
				
				
				var u12 = perp(p1, p2),
					a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r],
					b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r],
					c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r],
					d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];
					
					
				if (p0) { // clip ad and dc using average of u01 and u12
					var u01 = perp(p0, p1), e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
					a = lineIntersect(p1, e, a, b);
					d = lineIntersect(p1, e, d, c);
				}
				
				
				if (p3) { // clip ab and dc using average of u12 and u23
					var u23 = perp(p2, p3), e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
					b = lineIntersect(p2, e, a, b);
					c = lineIntersect(p2, e, d, c);
				}
				
				
				// handles paths passing behind projected globe.
				// NEEDS WORK REFINEMENT
				if( a[0]<0 || b[0]<0 ){ return; }
				else if( b[0]>0 ){ return "M" + a + "L" + b + " " + c + " " + d + "Z"; }
				
				
				return;
				
				
			}// end function lineJoin


		
		
		
			/*
				NAME: 			lineIntersect
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				DESCRIPTION: 	function to compute intersection of two infinite lines ab and cd. 
				CALLED FROM:	lineJoin
				CALLS:			n/a
				REQUIRES: 		a
								b
								c
								d
				RETURNS: 		n/a		
			*/
			function lineIntersect(a, b, c, d) {
				
				
				var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3,
					y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3,
					ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
				
				
				return [x1 + ua * x21, y1 + ua * y21];
			
			
			}// end function lineIntersect


		
		
		
			/*
				NAME: 			perp
				REFERENCE URL:	https://gist.github.com/mbostock/4163057
								https://gist.github.com/trusktr/8cda749c4f1543ece11327176f67671c	
				DESCRIPTION: 	Compute unit vector perpendicular to p01.	 
				CALLED FROM:	lineJoin
				CALLS:			n/a		
				REQUIRES: 		p0
								p1
				RETURNS: 		n/a		
			*/
			function perp(p0, p1) {
				
				
				var u01x = p0[1] - p1[1], u01y = p1[0] - p0[0],
				u01d = Math.sqrt(u01x * u01x + u01y * u01y);
				
				
				return [u01x / u01d, u01y / u01d];
				
				
			}// end function perp


		
		
		
			/*
				NAME: 			drawHulls
				REFERENCE URLS:	https://bl.ocks.org/Fil/6a1ed09f6e5648a5451cb130f2b13d20
								https://gist.github.com/Fil/6a1ed09f6e5648a5451cb130f2b13d20	
				DESCRIPTION: 	function to draw individual voronoi hulls and their vertex points 
				CALLED FROM:	loadHulls
				CALLS:			drawHullAreas
								translateLegendCells 
				REQUIRES: 		hulls - oject contianing voronoi area hull information	
				RETURNS: 		n/a		
			*/
			function drawHulls(hulls){
				
				
				// initializes local arrays
				var legendLabels = [];
				var legendColours = [];
						
							
				// for each individual hull definition
				hulls.forEach(function(d,i){	
				
					
					// check if input data line from .CSV file is a comment line to bypass  
					// or true data line to plot.
					if( d.exclude.length==0 ){
					
						
						var hull = d; // localise single hull information
					
						
						// append new group element to attach hull onto
						vis.g.append("g")
							.attr("class", function(d,i){
								
								
								// construct new array of colout and label information to help build new legend elements
								if( legendLabels.indexOf(hull.legendEntry) == -1 || legendColours.indexOf(hull.flowStroke) == -1 ){
									legendLabels.push(hull.legendEntry);
									legendColours.push(hull.hullFill);
								}
								
								return "trl-polygons hulls";
							})
							.style("fill" , hull.hullFill )
							.style("fill-opacity" , hull.hullFillOpacity )
							.style("stroke" , hull.hullStroke )
							.style("stroke-width" , hull.hullStrokeWidth );
					
						
						// append new group element to attach hull onto
						vis.site = vis.g.append("g")
							.attr("class", "trl-site hullSites")
							.style("fill" , hull.siteFill )
							.style("stroke" , hull.siteStroke )
							.style("stroke-width" , hull.siteStrokeWidth )
							.selectAll('path')
							.data([null]);
							
							
						// update values to draw hulls and vertex point hulls.
						vis.enter = vis.site.enter().append('path');
						vis.site = vis.site.merge(vis.enter);
						var countriesCopyLayer = d3.select('.trl-feature').selectAll('path').data(vis.countries);
						vis.enter = countriesCopyLayer.enter().append('path');
						countriesCopyLayer = countriesCopyLayer.merge(vis.enter);
						countriesCopyLayer.attr('d', vis.path);
						
						
						// reinitialise local arrays
						var sites = [];
						var centroids = [];
						
						
						countriesCopyLayer.data()
							.filter(function (d) {
								if( hull.countries.indexOf(d.properties.name) != -1 ){ return d; }
							})
							.map(function (d) {
								// remove French Guyane for the computation of bounds
								var e = JSON.parse(JSON.stringify(d));
								//if (e.properties.iso_a3 == 'FRA') { e.geometry.coordinates = d.geometry.coordinates.slice(2); }
								return e;
							})
							.map(function (d) {
								var convex = d3.geoVoronoi().hull(d3.geoBounds(d)).coordinates[0];
								sites.push(convex[0]);
								sites.push(convex[1]);
								sites.push([convex[0][0], convex[1][1]]);
								sites.push([convex[1][0], convex[0][1]]);
								centroids.push(d3.geoCentroid(d));
							});
				
				
						// update hull value
						var hull = d3.geoVoronoi().hull(sites);
						countriesCopyLayer.attr("d", vis.path);
						var poly = d3.select('.trl-polygons').append("path").datum(hull).attr('d',  vis.path);
						vis.site.datum({ type: "MultiPoint", coordinates: sites });
					
					
						// draw each hull area
						function drawHullAreas() {
							
							
							poly.attr('d',  vis.path);
							countriesCopyLayer.attr("d",  vis.path);
							vis.site.attr('d',  vis.path);
							
							
							return;
							
							
						}// end function draw()
						
						
						drawHullAreas();
						
					}// end if check 
					
				})// end forEach
				
		
		
				// if user want a legend to be created ...
				if( vis.onLoadVariables.vars.legend != '' ){
					
					
					// define original scale. Create reference to legend svg panel							   
					var ordinal = d3.scaleOrdinal().domain(legendLabels).range(legendColours);
					var svg = d3.select("#trl-legend");
					
					
					// append new group element for this legend entry content to main svg panel
					svg.append("g")
						.attr("class", "legend legendOrdinal-"+vis.legendElement)
						.attr("id", "legendElement-"+vis.legendElement)
						.attr("transform", "translate(" + (vis.onLoadVariables.vars.legendIndent) + "," + ( vis.legendElementYOffset ) + ")");
						
						
					// define ordinal legend characteristics
					var legendOrdinal = d3.legendColor()
											.shapePadding(10)
											.classPrefix("trl-")
											.title("Areas")
											.orient(vis.onLoadVariables.vars.legendOrientation)
											.scale(ordinal);
					
					
					// create legend entry content
					svg.select(".legendOrdinal-"+vis.legendElement).call(legendOrdinal);
					d3.selectAll(".trl-label").style("fill" , vis.onLoadVariables.vars.legendTextFill);
					d3.selectAll(".trl-legendTitle").style("fill" , vis.onLoadVariables.vars.legendTextFill);
			
			
					// recalculate yoffset variable to position content after any legend content already present // drawHulls
					if( vis.onLoadVariables.vars.legendOrientation == "vertical" ){ 
						vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + ((legendLabels.length+1)*20);
					}
					else {
						vis.legendElementYOffset = vis.legendElementYOffset + vis.legendElementYOffsetBuffer + 50;
					}
					
					
					//modify height of legend SVG according to amount of legend content
					d3.selectAll(".trl-legendBackground").attr("height" , vis.legendElementYOffset);
					d3.selectAll(".trl-svgLegend").attr("height" , vis.legendElementYOffset);
					vis.legendElement++; // increment legend element counter by 1
	
					
					// modify coloured cell swatch width to reflect horizontal or vertical orinteation of legend
					d3.selectAll(".trl-swatch").attr("width" , vis.onLoadVariables.vars.legendCellWidth);
					
					
					// modify translation of legend cells if orientation is 'horizontal'
					if( vis.onLoadVariables.vars.legendOrientation == "horizontal" ){
						translateLegendCells(d3.selectAll(".trl-cell")._groups[0]);
					}
				
				
				}// end if .. 
				
				
				return;
				
				
			}// end function drawHulls()
			
			
		
		
		
			/*
				NAME: 			tip 			
				DESCRIPTION: 	this function will call d3.annotation when a tooltip has to be drawn	 
				CALLED FROM:	mouseover event on main svg map	 
				CALLS:			n/a
				REQUIRES: 		d - tooltip information specific to selected country
				RETURNS: 		arguments
			*/
			function tip(d) {
				
				
				// define annotation tooltip
				annotationtip = d3.annotation()
					.type(d3.annotationCalloutCircle)
					.annotations([d].map(d => {
						
						return {
							data: d,
							dx: d.dx || (d.x > 450) ? -50 : 50,
							dy: d.dy || (d.y > 240) ? -10 : 10,
							note: {
								label: d[4] + ": " + d[5] || "??",
							},
							subject: {
								radius: 3,
								radiusPadding: 2,
							},
						};
					}))
					.accessors({ x: d => vis.projection(d)[0], y: d => vis.projection(d)[1] });
					
				
				// append annotation onto tip
				vis.tipg.call(annotationtip);
				
				
				return;
				
				
			}// end function tip
			
			
		
		
		
			/*
				NAME: 			showCountryInformation		
				DESCRIPTION: 	Function for showing information tooltip when user selects country name from typeahead
				CALLED FROM:	draw
				CALLS:			n/a
				REQUIRES: 		c - topojson object information for country selected by user
								information - Value Added Information. Tooltip infomration given in countries.CSV	
				RETURNS: 		n/a
			*/
			function showCountryInformation(c, information) {
				
				
				var selectedCountry = c.properties.name;
				vis.selectedCountryData = '';
				
				// get country  CSV information for country using ISO2 code 
				for (var key in vis.countryCodes) {
					if (vis.countryCodes.hasOwnProperty(key)) {
						if ( vis.countryCodes[key][0]["Common Name"]===selectedCountry ) {
							vis.selectedCountryData = vis.countryCodes[key][0];
						}
					}
				}
				
				
				// check if seleced country exists in country LU
				if( vis.selectedCountryData !== undefined ){
					 
					 
					// initialise flagCode and flagSpan
					var flagCode = '';
					var flagSpan = '';
					flagCode = vis.selectedCountryData['ISO 3166-1 2 Letter Code'].toLowerCase();
					flagSpan = '<span class="trl-flag-icon trl-flag-icon-' + flagCode + '"></span>';
					
					
					// build-up tool tip for country hover over
					var txt = '<div class="trl-header">';
					txt += '<div class="trl-flag">' + flagSpan + '</div>';
					txt += '<span class="trl-country-flag">' + UnderscoreToSpace(c.properties.name) + '</span></div>';
					txt += '<div class="trl-information">' + information + '</span></div></br>';
					
					
					vis.toolTip.html(txt);
					vis.toolTip.style('opacity',0.99);
					
						
					var sel = d3.select('.trl-toolTip');
					sel.moveToFront();
				}// end if ... 
				
				return;
				
			}// end function showCountryInformation()
			
			
		
		
		
			/*
				NAME: 			wrangleCountryCodes			
				DESCRIPTION: 	function to gnerate ibject nested on ISO 2 letter codes.	
				CALLED FROM:	globaliseData
				CALLS:			n/a
				REQUIRES: 		data - content of reference CSV file
				RETURNS: 		n/a
			*/
			function wrangleCountryCodes(data) {
				
				vis.countryCodes = d3.nest()
					.key(function(d) { return d['ISO 3166-1 2 Letter Code']; })
					.map(data);
					
					return;
					
			}// end function wrangleCountryCodes
			
			
		
		
		
			/*
				NAME: 			loadData				
				DESCRIPTION: 	loads as an pbject country level ISO2 and ISO3 information.
				CALLED FROM:	modernizr check	
				CALLS:			globaliseData
				REQUIRES: 		n/a
				RETURNS:		n/a 	
			*/
			function loadData(){
				
				
				// queue/defer data load on country ISO information.
				d3.queue()
					.defer(d3.csv, /*vis.onLoadVariables.vars.dataFilesPath*/vis.dataPath + "data/iso_3166_2_countries.csv")
					.awaitAll(function ready(error, results, treemapData) {
						if (error) throw error;
						globaliseData(results);
					});
				
				return;
				
			}//end function loadData()
			
			
		
		
		
			/*
				NAME: 			globaliseData		
				DESCRIPTION: 	function to return objct of ISO infomration for individual countries. 
				CALLED FROM:	loadData	
				CALLS:			n/a
				REQUIRES: 		data - content of country listing from CSV
				RETURNS: 		n/a
			*/
			function globaliseData(data){
				
				// grab data and call function to generate JSON nested on ISO2 codes
				vis.countryData = data[0];
				wrangleCountryCodes(vis.countryData);
				
				return;
				
			}// end function globaliseData() 
			
			
			
			
			
			
			
			/* Content below is from useful.js */
			
			
			// JavaScript Document
			function isEven(n) {
			   return n % 2 == 0;
			}
			
			function isOdd(n) {
			   return Math.abs(n % 2) == 1;
			}
				
			
			
			
			
			//function to return random point in a circle's circumference
			function getRandomPoint(radius) {
							
				var angle = Math.random() * Math.PI * 2;		
				return { x: Math.cos(angle) * radius , y: Math.sin(angle) * radius };
			}
				
			
			
			
			
			//function to return inverse of the supplied hexcode color
			function invertColour(color)
			{
				return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
			}
		  
		  
		  
			
			
			// Random color generator in JavaScript
			function getRandomColor() {
				
				var letters = '0123456789ABCDEF';
				var color = '#';
				
				for (var i = 0; i < 6; i++ ) { color += letters[Math.floor(Math.random() * 16)]; }
				return color;
				
			}// end getRandomColor()
		
		
		
			
			
			// add comma seperators to numebrs over/under +/-999
			function numberWithCommas(x)
			{
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
			
				
				
			
			function UnderscoreToSpace(str)
			{
				// the str can be undefined, in this case return nothing
				if (str === undefined) {
					 return;
				}
				else {
					 return str.split('_').join(' ');
				}
			}
				
				
			
			function SpaceToUnderscore(str)
			{
				// the str can be undefined, in this case return nothing
				if (str === undefined) {
					 return;
				}
				else {
					 return str.split(' ').join('_');
				}
			}
			
			
			
			function HyphenToSpace(str)
			{
				return str.split('-').join(' ');
			}
				
				
			
			function SpaceToHyphen(str)
			{
				// the str can be undefined, in this case return nothing
				if (str === undefined) {
					 return;
				}
				else {
					 return str.split(' ').join('-');
				}
			}
			
				
				
				
				
			
			function toTitleCase(str)
			{
				return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			}
				
				
				
			/*	
			
			String.prototype.trunc =
				function( n, useWordBoundary ){
					
					var isTooLong = this.length > n,
					s_ = isTooLong ? this.substr(0,n-1) : this;	
					s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
					
					return  isTooLong ? s_ + '&hellip;' : s_;
				};*/
		  
			String.prototype.trunc =
			 function( n, useWordBoundary ){
				 if (this.length <= n) { return this; }
				 var subString = this.substr(0, n-1);
				 return (useWordBoundary 
					? subString.substr(0, subString.lastIndexOf(' ')) 
					: subString) + "...";
			  };
			
			
			
			// http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
			d3.selection.prototype.moveToFront = function() {
				return this.each(function(){
					this.parentNode.appendChild(this);
				});
			};
			d3.selection.prototype.moveToBack = function() { 
				return this.each(function() { 
					var firstChild = this.parentNode.firstChild; 
					if (firstChild) { 
						this.parentNode.insertBefore(this, firstChild); 
					} 
				}); 
			};
			
				
			
			// function to wrap long lines to defined width. can be used for labels, strings, axis titles etc.
			function wrap(text, content_width/* , article_ID, containerNumber*/) {
				
				text.each(function() {
					var text = d3.select(this),
					words = text.text().split(/\s+/).reverse(),
					word,
					line = [],
					lineNumber = 0,
					lineHeight = 10/*1.1*/, // ems
					y = text.attr("y"),
					dy = 0.0/*parseFloat(text.attr("dy"))*/,
					tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy/* + "em"*/);
					
					while (word = words.pop()) {
						line.push(word);
						
						tspan.text(line.join(" "));
						if (tspan.node().getComputedTextLength() > content_width) {
							line.pop();
							tspan.text(line.join(" "));
							line = [word];
							tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy).text(word);
							
							vis.lineCount++;
						}
					}
				});
				
				return;
				
			}// end function wrap()
		
					
		})()// end enclosing wrapper function