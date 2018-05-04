# GenericInteractiveVisMap
Template build for a Generic Interactive Map Visualisation Tool. 

# __Contents__

1.  [Introduction](#1.-Introduction)
2.  [What this interactive tool does not [currently] do](#2.-What-this-interactive-tool-does-not-[currently]-do)
3.	[Assumptions](#3.-Assumptions)
4.	[Notes on Instructions](#4.-Notes-on-Instructions)
5.	[User interaction functionality](#5.-User-interaction-functionality)

    5.1. [Zoom](#5.1.-Zoom)  

    5.1.1.  [By mouse](#5.1.1.-By-mouse)  
    5.1.2.	[By country selection (List)](#5.1.2.-By-country-selection-(List))  
    5.1.3.	[By country selection (Map)](#5.1.3.-By-country-selection-(Map))  
    5.1.4.	[By centred selection (Latitude, Longitude)](#5.1.4.-By-centred-selection-(Latitude,-Longitude))  
    5.1.5.	[By zoom in/out buttons](#5.1.5.-By-zoom-in/out-buttons)  
    5.2.	[Reset](#5.1.5.-Reset)  
    5.3.	[Pan](#5.1.5.-Pan)

6.	[Visual Display Configuration Settings](#6.-Visual-Display-Configuration-Settings)
	
    6.1.	[Controls](#6.1.-Controls)  
    6.2.	[Panels](#6.2.-Panels)  
    6.3.	[Centroid markers and labels](#6.3.-Centroid-markers-and-labels)  
    6.4.	[Tool Tips](#6.4.-Tool-Tips)  
    6.5.	[Headers, titles, and value-added information](#6.5.-Headers,-titles,-and-value-added-information)  
    6.6.	[Legend options](#6.6.-Legend-options)

    6.6.1.  [legendOrientation](#6.6.1.-legendOrientation)  
    6.6.2.  [legendBasePosition](#6.6.2.-legendBasePosition)  
    6.6.3.  [legendElementStep](#6.6.3.-legendElementStep)  
    6.6.4.  [legendSize](#6.6.4.-legendSize)  
    6.6.5.  [legendIndent](#6.6.5.-legendIndent)  
    6.6.6.  [legendCellWidth](#6.6.6.-legendCellWidth)  
    6.6.7.  [legendStroke](#6.6.7.-legendStroke)  
    6.6.8.  [legendStrokeWidth](#6.6.8.-legendStrokeWidth)  
    6.6.9.  [legendFill](#6.6.9.-legendFill)  
    6.6.10. [legendOpacity](#6.6.10.-legendOpacity)  
    6.6.11. [legendCornerRadius](#6.6.11.-legendCornerRadius)  
    6.6.12. [legendTextFill](#6.6.12.-legendTextFill)  
    6.6.13. [legendElementYOffset](#6.6.13.-legendElementYOffset)  
    6.6.14. [legendElementYOffsetBuffer](#6.6.14.-legendElementYOffsetBuffer)
        
    6.7.    [Map Projection Options](#6.7.-Map-Projection-Options)

    6.7.1.  [mapStyle](#6.7.1.-mapStyle)  
    6.7.2.  [boundarySet](#6.7.2.-boundarySet)  
    6.7.3.  [projection](#6.7.3.-projection)  
    6.7.4.  [rotate](#6.7.4.-rotate)  
    6.7.5.  [centre](#6.7.5.-centre)  
    6.7.6.  [precision](#6.7.6.-precision)  
    6.7.7.  [parallels](#6.7.7.-parallels)  
    6.7.8.  [bounds](#6.7.8.-bounds)  
    6.7.9.  [zoomLevel](#6.7.9.-zoomLevel)  
    6.7.10. [isPannable](#6.7.10.-isPannable)  
    6.7.11.  [mesh](#6.7.11.-mesh)  
    6.7.12.  [[content transition] duration](#6.7.12.-[content-transition]-duration)
        
    6.8.	Day and night views (background, landmass and coastline styling)
    
    6.8.1   [land](#6.8.1.-land)  
    6.8.2   [coast](#6.8.2.-coast)  
    6.8.3   [coastWidth](#6.8.3.-coastWidth)  
    6.8.4   [backgroundFill](#6.8.4.-backgroundFill)  
    6.9.	[solarTerminator](#6.9.-solarTerminator)  
    6.10.	[Equator](#6.10.-Equator)  
    6.11.	[Graticule](#6.11.-Graticule)  
    6.12.	[Vector paths](#6.12.-Vector-paths)  
    6.13.	[countriesToHighlight](#6.13.-countriesToHighlight)  
    6.14.	[countriesToRemove](#6.14.-countriesToRemove)  
    6.15.	[flows](#6.15.-flows)  
    6.16.	[contours](#6.16.-contours)  
    6.17.	[locales](#6.17.-locales)  
    6.18.	[hulls](#6.18.-hulls)  
    6.19.	[routes](#6.19.-Routes)  

7.	File Load Format Configurations

    7.1.    [flowPoints[.csv] and Flows[.csv]](#7.1.-flowPoints[.csv]-and-Flows[.csv])  
    7.1.1.  [flowPoints[.csv]](#7.1.1.-flowPoints[.csv])  
        [place](#place), [lon](#lon), [lat](#lat), [offX](#offX), [offY](#offY)
    
    7.1.2.  [Flows[.csv]](#7.1.2.-Flows[.csv])  
        [exclude](#exclude), [flowStartPoint](#flowStartPoint), [destination](#destination), [legendEntry](#legendEntry), [labelFill](#labelFill), [labelStroke](#labelStroke), [labelStrokeWidth](#labelStrokeWidth), [vol](#vol), [flowStroke](#flowStroke), [pointStroke](#pointStroke), [pointFill](#pointFill), [pointStrokeWidth](#pointStrokeWidth), [displayAt](#displayAt), [tapered](tapered), [lineOpacity](#lineOpacity), [lon](#lon), [lat](#lat), [offX](#offX), [offY](#offY), [pointOpacity](#pointOpacity)  

    7.2.    [vectorPaths[.csv]](#7.2.-vectorPaths[.csv])  
        [exclude](#exclude), [point](#point), [lon](#lon), [lat](#lat), [value](#value), [projected](#projected), [displayAt](#__displayAt)  
 
    7.3.    [locales[.csv]](#7.3.-locales[.csv])  
        [exclude](#exclude), [locale](#locale), [labelOpacity](#labelOpacity), [labelStrokeWidth](#labelStrokeWidth), [labelFill](#labelFill), [labelStroke](#labelStroke), [lon](#lon), [lat](#lat), [offX](#offX), [offY](#offY), [opacity](#opacity), [fill](#fill), [stroke](#stroke), [strokeWidth](#strokeWidth), [radius](#radius)

    7.4.    [routes[.csv]](#7.4.-routes[.csv])  
       [exclude](#exclude), [place](#place), [lon](#lon), [lat](#lat), [routeFill](#routeFill), [routeStroke](#routeStroke), [routeStrokeWidth](#routeStrokeWidth), [routeStrokeOpacity](#routeStrokeOpacity), [fill](#fill), [stroke](#stroke), [strokeWidth](#strokeWidth), [radius](#radius), [opacity](#opacity)
    
    7.5.    [hulls[.csv]](#7.5.-hulls[.csv])  
        [exclude](#exclude), [countries](#countries), [group](#group), [hullFill](#hullFill), [hullStroke](#hullStroke), [hullStrokeWidth](#hullStrokeWidth), [hullFillOpacity](#hullFillOpacity), [siteFill](#siteFill), [siteStroke](#siteStroke), [legendEntry](#legendEntry)  

    7.6.    [contours[.csv]](#7.6.-contours[.csv])  
        [exclude](#exclude), [scaleType](#scaleType), [domain](#domain), [range](#range),  [thresholds](#thresholds), [bandwidth](#bandwidth),  [cellSize](#cellSize), [contourFile](#contourFile)


# <a name="1.-Introduction"></a>
# __1. Introduction__

In the course of making visualizations, Thomson Reuters Labs has identified a need for producing and designing some standardized components. The Geographic Map Template described here will serve as a foundation to rapidly produce customized maps, for interactive or static content within Thomson Reuters.

Options include providing the ability for the user/designer to select from a range of multiple projections, generate choropleth-style maps at the geographic unit level (e.g. to highlight cryptocurrency acceptance), map discrete point location markers (cities or Points of Interest), flow lines (e.g. for migration/immigration, volume/commodity flows), plot vector paths (e.g. hurricane paths), contoured fields (e.g. to map earthquake damage or altitude) and routes linking discrete locations (e.g. a person’s travel itinerary). This template has been designed to be responsive for all screens, easily configurable and well documented for easier sharing across teams.



# <a name="2.-What-this-interactive-tool-does-not-[currently]-do"></a>
# __2. What this interactive tool does not [currently] do__

This interactive tool does not currently provide the following functionality/visual display tools. These items are in development and planned for future release iterations.

    •	Gradient-filled flow paths
    •	Two-tone flow paths
    •	Tapered flow paths
    •	Tapered arcs
    •	Tile base map underlay
    •	Provide a means to attach additional graphical content (e.g. supplementary charts to the main map)



# <a name="3.-Assumptions"></a>
# __3. Assumptions__

1.	APIs cannot be accessed via this interactive; only standalone data CSV files may be referenced



# <a name="4.-Notes-on-Instructions"></a>
# __4. Notes on Instructions__

1.	In the following guidance pages, red is used to highlight in each image  (linked to via URL links) the map element that is affected by changing or applying the associated configuration parameter.
2.	If there are two images given, these tend to relate to Boolean true/false scenarios, which will turn some component on/off; the images will show the display when that scenario is true (on) or false (off).
3.	Any functionality outlined in grey is currently not functional.
4.	The ‘exclude’ field in some Input CSV files may be used to exclude selected data lines from being mapped on the interactive. This field will accept any [user-defined] input value to signify an individual data row is to be ignored when mapping feature content
5.	Map legends are generated automatically, with the content defined by the visual content mapped on the interactive as deinfed by the user/developer in the uploaded CSV files. The styling used is taken from that defined in the relevant CSV file(s).
6.	Currently, legend components are provided for:

    •	Vector paths
    •	Flow paths
    •	route paths
    •	Choropleth geographic fills
    •	Voronoi ‘hull’ areas



# <a name="5.-User-interaction-functionality"></a>
# __5. User Interaction Functionality__

# <a name="5.1.-Zoom"></a>
## __5.1. Zoom__

# <a name="5.1.1.-By-mouse"></a>
### __5.1.1) By mouse__

    Double-click any where on the map – land or sea - to zoom in a fixed amount

# <a name="5.1.2.-By-country-selection-(List)"></a>
### __5.1.2) By country selection (List)__

    Type a country name into the longest text entry box to be offered alternate options for country to select and zoom to.

# <a name="5.1.3.-By-country-selection-(Map)"></a>
### __5.1.3) By country selection (Map)__ (image(s): [country selection](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/search.png))

    Single-click on a country (land area) to smoothly zoom to that country and fill the map area. Each sequential single click on a different country will zoom to that new country area.

# <a name="5.1.4.-By-user-defined-centred-selection-(Latitude,-Longitude)"></a>
### __5.1.4) By user-defined centred selection (Latitude, Longitude)__ (image(s): [centre point](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/centrepoint.png))

    Enter valid values for latitude and longitude into the two such titled text entry boxes. Validity checks are done on entered content and the map will zoom to the defined point once both values meet the required format.

# <a name="5.1.5.-By-zoom-in/out-buttons"></a>
### __5.1.5) By zoom in/out buttons__ (image(s): [Zoom in/out](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/zoom.png))

    The map can be zoomed in or out through a range of 10 discrete incremental steps. Use the Zoom in and Zoom Out buttons to achieved this (note the map zooms to the value defined by zoomLevel in the configuration settings)

# <a name="5.2.-Reset"></a>
## __5.2. Reset__ (image(s): [Reset](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/reset.png))

    Click anywhere outside the selected country to zoom out and return to full map view
    Click ‘Rewind’ button to zoom out and return to full map view

# <a name="5.3.-Pan"></a>
## __5.3. Pan__

    Click and hold the mouse down anywhere on the map and and move it to drag map around.
    This functionality may be disabled in any bespoke project build by setting the values of vis.isPannable = false




# <a name="6.-Visual-Display-Configuration-Settings"></a>
# __6. Visual Display Configuration Settings__

This section outline each parameter available in the *‘vis.’* name-spaced JSON object to define the on-load scenario displayed.
The *‘vis.onLoadVariables’* name-spaced JSON object main be found at the head of __main.js__ circa Line 89 (it is initialised in __CecGenericCecMap.html__ circa Line 112)
These can be found in the JavaScript file __main.js__ located in *‘../js/’* folder. In code contained in __main.js__ parameters are acessed by calling:

*vis.config.vars.Parameter*
        
e.g. vis.config.vars.dataFilesPath or vis.config.vars.centroidMarkers. Each individual parameter (their name, acceptable values/ranges, default values (if appropriate) and illustration to show what is affected (if appropriate).
Outline for each parameter is laid out in the following format:

__Parameter__ (image URL)

    Description 
    Acceptable Values [meanings] (default value)

# <a name="6.1.-Controls"></a>
## 6.1. Controls

__controls__ (image(s): [true](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/controls_true.png)/[false](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/controls/controls_false.png))

    Defines if control panels are shown at head of visual
    true [shown]; false [not shown] (true)

# <a name="6.2.-Panels"></a>
## 6.2. Panels

__panel1__ (image(s): [panel1](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/panels/panel1.png))

    Defines background colour of left-most control panel
    Any acceptable Hex, RGB(A) or RGB colour (#CCCCCC)

__panel2__ (image(s): [panel2](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/panels/panel2.png))

    Defines background colour of left-most control panel
    Any acceptable Hex, RGB(A) or RGB colour (#CCCCCC)

__panel3__ (image(s): [panel3](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/panels/panel3.png))

    Defines background colour of left-most control panel
    Any acceptable Hex, RGB(A) or RGB colour (#CCCCCC)

# <a name="6.3.-Centroid-markers-and-labels"></a>
## 6.3. Centroid markers and labels

__centroidMarkers__ (image(s): [centroids](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/panels/centroids.png))

    Defines whether centroid markers and their labels are shown on visual. Centroids will be for what ever level of geography is used to display data against.
    true [shown]; false [not shown] (false)

__centroidMarkerLabels__ (image(s): [centroid labels](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/panels/centroids.png))

    Defines if centroid marker labels are displayed. True can only be used if centroidMarkers is true.
    true [shown]; false [not shown] (false)

# <a name="6.4.-Tool-Tips"></a>
## 6.4. Tool Tips

__toolTipType__ (image(s): [line](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/tooltip/line.png)/[box](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/tooltip/box.png))

    Defines style of tooltip to display on mouse-over on a geographic entity
    line; box (box)

# <a name="6.5.-Headers, titles,-and-value-added-information"></a>
## 6.5. Headers, titles, and value-added information

__headers__ (image(s): [true](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/headers.png)/[false](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/noheaders.png))

    Defines if headers and sub-headers are displayed
    true [shown]; false [not shown] (false)

__title__ (image(s): [title](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/title.png))

    Required title to product and styling. 'text' – any text string; 'color' - Any acceptable Hex, RGB(A) or RGB color; 'size' - any acceptable CSS font size
    title": { "text":"", "color":"", "size":"" } ("title": { "text":"", "color":"#FFF", "size":"3.0vw"})

__mainHeader__ (image(s): [main-header](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/mainheader.png))

    Main header content and styling (font size and colour)
    title": { "text":"", "color":"", "size":"" } ("title": { "text":"", "color":"#FFF", "size":"1.5vw"})

__subHeader__ (image(s): [sub-header](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/subheader.png))

    Sub header content and styling (font size and colour) 
    title": { "text":"", "color":"", "size":"" } ("title": { "text":"", "color":"#FFF", "size":"1.5vw"})

__information__ (image(s): [information](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/headers/information.png))

    Main header content and styling (font size and colour)
    title": { "text":"", "color":"", "size":"" } ("title": { "text":"", "color":"#FFF", "size":"1.25vw"})

# <a name="6.6.-Legend-options"></a>
## 6.6. Legend options

__legend__ (image(s): [legend](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Defines if map legend is displayed, and if so, its orientation. Blank = legend not shown. Legend will also not be drawn if map does not have any content drawn on it (i.e. geographies coloured, flow lines, vector paths, hulls)
    Blank; Two-element integer array

# <a name="6.6.1.-legendOrientation"></a>
### 6.6.1. legendOrientation

__legendOrientation__ (image(s): [vertical](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legendOrientVertical.png)/[horizontal](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legendOrientHorizontal.png))

    Defines orientation of legend content
    vertical; horizontal (vertical)

# <a name="6.6.2.-legendBasePosition"></a>
### 6.6.2. legendBasePosition

__legendBasePosition__ (image(s): [map](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/LegendBaseMap.png)/[base](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/LegendBaseBottom.png)/[top](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/LegendBaseTop.png))

    Defines whether legend is attached to the __map__ (and therefore locating masked over the main map) or floats underneath at __base__ of map (no overlapping), or floats at the __top__ of the map
    map; base; top (map)

# <a name="6.6.3.-legendElementStep"></a>
### 6.6.3. legendElementStep

__legendElementStep__ (image(s): [legend Element Step](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Y-Offset gap between each main legend element entry (e.g. between each successive ordinal/gradient entry
    Single integer value (100)

# <a name="6.6.4.-legendSize"></a>
### 6.6.4. legendSize

__legendSize__ (image(s): [legend Size](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Defines legend width and height. If any text string is given, width defaults to 100% (useful for spanning base or top of map)
    Either a two-element integer array such that [width, height], OR, any text string ([150,300])

# <a name="6.6.5.-legendIndent"></a>
### 6.6.5. legendIndent

__legendIndent__ (image(s): [legend Indent](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Indent from left border of legend elements
    Single integer value (20)

# <a name="6.6.6.-legendCellWidth"></a>
### 6.6.6. legendCellWidth

__legendCellWidth__ (image(s): [legend Cell Width](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Defines width of coloured legend cells
    Single integer value (30)

# <a name="6.6.7.-legendStroke"></a>
### 6.6.7. legendStroke

__legendStroke__ (image(s): [legend Stroke](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    legend background rectangle edge colour
    Any acceptable Hex, RGB(A) or RGB (#A0A0A0)

# <a name="6.6.8.-legendStrokeWidth"></a>
### 6.6.8. legendStrokeWidth

__legendStrokeWidth__ (image(s): [legend Stroke Width](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    legend background rectangle edge width
    Single integer or float value (0.5)

# <a name="6.6.9.-legendFill"></a>
### 6.6.9. legendFill

__legendFill__ (image(s): [legend Fill](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    legend background rectangle fill colour
    Any acceptable Hex, RGB(A) or RGB (#A0A0A0)

# <a name="6.6.10.-legendOpacity"></a>
### 6.6.10. legendOpacity

__legendOpacity__ (image(s): [legend Opacity](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Defines opacity of legend’s background rectangle.
    Any numeric value between 0.0 and 1.0 (0.75)

# <a name="6.6.11.-legendCornerRadius"></a>
### 6.6.11. legendCornerRadius

__legendCornerRadius__ (image(s): [legend Corner Radius](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    Corner rounding value for legend background rectangle
    Single integer value (0)

# <a name="6.6.12.-legendTextFill"></a>
### 6.6.12. legendTextFill

__legendTextFill__ (image(s): [legend Text Fill](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    legend element text fill colour
    Any acceptable Hex, RGB(A) or RGB (#FFFFFF)

# <a name="6.6.13.-legendElementYOffset"></a>
### 6.6.13. legendElementYOffset

__legendElementYOffset__ (image(s): [legend Element Y Offset](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    legend element y offset value from top of legend
    Single integer value (25)

# <a name="6.6.14.-legendElementYOffsetBuffer"></a>
### 6.6.14. legendElementYOffsetBuffer

__legendElementYOffsetBuffer__ (image(s): [legend Element Y-Offset Buffer](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/legend.png))

    vertical offset of legend components
    Single integer value (50)

# <a name="6.7.-Map-Projection-Options"></a>
### 6.7. Map projection options

# <a name="6.7.1.-mapStyle"></a>
### 6.7.1. mapStyle

__mapStyle__ (n/a)

    Does map display a vector boundary (Boundary) or tiled (Tile) background layer. Note: Tile base map underlay is not yet functional. 
    Boundary; Tile (Boundary)

# <a name="6.7.2.-boundarySet"></a>
### 6.7.2. boundarySet

__boundarySet__ (n/a)

    Defines underlying boundary set being displayed. Topojson file should be contained in '../data/' folder
    Any valid topojson file (world-topo-min.json)

# <a name="6.7.3.-projection"></a>
### 6.7.3. projection

__projection__ (image(s): [mercator](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/mercator.png)/[albers](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/albers.png)/[equirectangular](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equirectangular.png)/[eckert4](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/eckert4.png)/[robinson](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/robinson.png)/[geoSinuMollweide](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/geoSinuMollweide.png)/[naturalEarth](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/naturalEarth.png))

    D3 map projection to use. Information on D3 projections can be found here: https://github.com/d3/d3-geo-projection and http://www.shadedrelief.com/NE_proj/
    mercator, albers, equirectangular, eckert4, robinson, geoSinuMollweide, naturalEarth (naturalEarth)

# <a name="6.7.4.-rotate"></a>
### 6.7.4. rotate

__rotate__ (n/a)

    Defines projection rotation of map view at point of initial loading of visual. Only currently used for Mercator, Equirectangular, Eckert4 and Robinson projections
    Any numeric two-element array ([0,0])

# <a name="6.7.5.-centre"></a>
### 6.7.5. centre

__centre__ (n/a)

    Defines projection centre of map view at point of initial loading of visual. Only used for Mercator, Eckert4 and Robinson projections
    Any numeric two-element array ([0,0])

# <a name="6.7.6.-precision"></a>
### 6.7.6. precision

__precision__ (n/a)

    Sets the threshold for the projection’s adaptive resampling to the specified value in pixels and returns the projection
    Any float or integer value (0.1)

# <a name="6.7.7.-parallels"></a>
### 6.7.7. parallels

__parallels__ (n/a)

    Defines projection centre of map view at point of initial loading of visual. Only used for Albers projection
    Any numeric two-element array ([20,50])

# <a name="6.7.8.-bounds"></a>
### 6.7.8. bounds

__bounds__ (n/a)

    User-defined bounding box coordinates to zoom-in to on initial page load.
    Blank/Empty; Any numeric two-element two-element array such that [ [ top left lat, top left lon], [ bottom right lat, bottom right lon] ] ([ [9.3, 33.1], [25.1, 19.4] ])

# <a name="6.7.9.-zoomLevel"></a>
### 6.7.9. zoomLevel

__zoomLevel__ (n/a)

    An integer value in the range 1 (zoomed out) to 10 (zoomed in).  Defines the initial zoom level for the map at the point of page load
    mAny integer value (1)
    
# <a name="6.7.10.-isPannable"></a>
### 6.7.10. isPannable

__isPannable__ (n/a)

    Either allows (true) or prevents (false) the user to manually pan the map with the mouse. 
    true [yes; is pannable]; false [no; is NOT pannable] (true)
    
# <a name="6.7.11.-mesh"></a>
### 6.7.11. mesh

__mesh__ (image(s): [mesh](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/legend/mesh.png))

    Is country mesh outline shown in map display?
    true [shown]; false [not shown] (false)
    
# <a name="6.7.12.-[content-transition]-duration"></a>
### 6.7.12. [content transition] duration

__duration__ (n/a)

    Defines the length of transition in milliseconds. This mainly affects map zoom transitions
    Any integer value (2000)
    
# <a name="6.8.-Day-and-night-views-(background,-landmass-and-coastline-styling)"></a>
## 6.8. Day and night views (background, landmass and coastline styling)
    
# <a name="6.8.1.-land"></a>
### 6.8.1. land

__land__ (image(s): [land](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/land.png))

    Defines landmass colour
    Any acceptable Hex, RGB(A) or RGB colour (#CCCCCC)
    
# <a name="6.8.2.-coast"></a>
### 6.8.2. coast

__coast__ (image(s): [coast](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/coast.png))

    Defines coastline colour
    Any acceptable Hex, RGB(A) or RGB colour (#CCCCCC)
    
# <a name="6.8.3.-coastWidth"></a>
### 6.8.3. coastWidth

__coastWidth__ (image(s): [coastWidth](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/coastWidth.png))

    Defines coastline [stroke] width
    Any acceptable float or integer value (0.25)
    
# <a name="6.8.4.-backgroundFill"></a>
### 6.8.4. backgroundFill

__backgroundFill__ (image(s): [background Fill Day/Night](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/background.png))

    Defines background fill colour
    Any acceptable Hex, RGB(A) or RGB colour (transparent)
    
# <a name="6.9.-solarTerminator"></a>
## 6.9. solarTerminator
    
__solarTerminator__ (image(s): [Solar Terminator](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/solarTerminator.png))

    A solar terminator or twilight zone is a moving line that divides the day light side and the night side on Earth. Solar terminator takes the form:
    https://codepen.io/paulnoble/pen/qZaNRB, http://bl.ocks.org/mbostock/4597134, http://bl.ocks.org/KoGor/ce6ae9160977b59633a2
    true (shown); false (not shown) (false)
    
# <a name="6.10.-equator"></a>
## 6.10. equator
    
__equator__ (image(s): [Equator](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    Defines if Earth’s equator line is displayed
    true (shown); false (not shown) (false)
    
# <a name="6.10.1.-EquatorStrokeFill"></a>
## 6.10.1. EquatorStrokeFill
    
__EquatorStrokeFill__ (image(s): [Equator Stroke Fill](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    Defines equator stroke fill colour
    Any acceptable Hex, RGB(A) or RGB colour (none)
    
# <a name="6.10.2.-EquatorStroke"></a>
## 6.10.2. EquatorStroke
    
__EquatorStroke__ (image(s): [Equator Stroke](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    Defines equator stroke colour
    Any acceptable Hex, RGB(A) or RGB colour (#000000)
    
# <a name="6.10.3.-EquatorStrokeWidth"></a>
## 6.10.3. EquatorStrokeWidth
    
__EquatorStrokeWidth__ (image(s): [Equator Stroke Width](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    Defines equator stroke line width
    Any float or integer value (1.25)
    
# <a name="6.10.4.-EquatorStrokeOpacity"></a>
## 6.10.4. EquatorStrokeOpacity
    
__EquatorStrokeOpacity__ (image(s): [Equator Stroke Opacity](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    Defines equator stroke line opacity
    Any float or integer value between 0.0 and 1.0 (1.0)
    
# <a name="6.10.5.-EquatorStrokeDashArray"></a>
## 6.10.5. EquatorStrokeDashArray
    
__EquatorStrokeDashArray__ (image(s): [Equator Stroke Dash Array](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/equator.png))

    An integer-spaced string that defines dashed pattern for equator
    Integer-spaced string (“10 10”)
    
# <a name="6.11.-Graticule"></a>
## 6.11. Graticule

__graticule__ (image(s): [Graticule](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/graticule.png))

    Defines if map projection graticule grid is displayed (https://bl.ocks.org/pnavarrc/7dbc309801d07610de44)
    rue [shown]; false [not shown] (false)
    
# <a name="6.11.1.-graticuleFill"></a>
### 6.11.1. graticuleFill

__graticuleFill__ (image(s): [Graticule Fill](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/graticule.png))

     Defines graticule fill colour
    Any acceptable Hex, RGB(A) or RGB colour (none)
    
# <a name="6.11.2.-graticuleStroke"></a>
### 6.11.2. graticuleStroke

__graticuleStroke__ (image(s): [Graticule Stroke](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/graticule.png))

    Defines graticule stroke colour
    Any acceptable Hex, RGB(A) or RGB colour (#A0A0A0)
    
# <a name="6.11.3.-graticuleStrokeWidth"></a>
### 6.11.3. graticuleStrokeWidth

__graticuleStrokeWidth__ (image(s): [Graticule Stroke Width](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/graticule.png))

    Defines graticule stroke width
    Any float or integer value (0.25)
    
# <a name="6.11.4.-graticuleStrokeOpacity"></a>
### 6.11.4. graticuleStrokeOpacity

__graticuleStrokeOpacity__ (image(s): [Graticule Stroke Opacity](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/projection/graticule.png))

    Defines graticule stroke opacity
    Any float or integer value between 0.0 and 1.0 (0.25)
    
# <a name="6.12.-Vector-paths"></a>
## 6.12. Vector paths
    
# <a name="6.12.1.-vectorPaths"></a>
### 6.12.1. vectorPaths
    
__vectorPaths__ (image(s): [vector paths](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/vectors0.png))

    __Refer to section 7.2 for file format, structure and content requirements__
    
    File definitions for each individual vector path to display
    One-dimensional array containing filenames for vector path information to display on map.
    One file per vector path.
    Only need to provide file names.
    Folder path is provided by *dataFilesPath* (blank, [])
    
# <a name="6.12.2.-pathGradientDomain"></a>
### 6.12.2. pathGradientDomain
    
__pathGradientDomain__ ()

    Definition of colour gradient domain for vector paths
    One dimension array containing any valid numeric values (blank, [])
    
# <a name="6.12.3.-pathGradientRange"></a>
### 6.12.3. pathGradientRange
    
__pathGradientRange__ ()

    Definition of colour gradient range for vector paths
    One dimension array containing any valid numeric values (blank, [])
    
# <a name="6.13.-countriesToHighlight"></a>
## 6.13. countriesToHighlight

__countriesToHighlight__ (image(s): [countriesToHighlight](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/countrystohighlight.png))

    Any valid CSV file format name
    One-dimensional array containing a file name of country information to highlight on visual. File format extension must be CSV (blank, [])
    
# <a name="6.14.-countriesToRemove"></a>
## 6.14. countriesToRemove

__countriesToRemove__ (image(s): [countriesToRemove retained](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/countriestoremove_before.png)/[country removed](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/countriestoremove_after.png))

    List of area geographies to not display when map visual is loaded
    One-dimensional array of area names to remove on visual (blank, [])
    
# <a name="6.15.-flows"></a>
## 6.15. flows

__flowPoints, flows__ (image(s): [flows](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/flows0.png), [flows](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/flows1.png))

  Flows follow the form shown [here](http://bl.ocks.org/Andrew-Reid/8de4b9d0d0a87a478770e0cc86e2f5e4)  

__Refer to section 7.1 for file format, structure and content requirements__
    
    File names MUST be flowPoints.csv, flows.csv respectively.
    One-dimensional array containing filenames for flow path information to display on map. Only need to provide file names.
    Folder path is provided by *dataFilesPath*. File format extension must be CSV (blank, [])
    
# <a name="6.16.-contours"></a>
## 6.16. contours

__contours__ (image(s): [contours](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/contours.png))

  Contours follow the form shown [here](https://bl.ocks.org/1wheel/5d6990abfff925e6a37e0557f1de18e5)  

__Refer to section 7.6 for file format, structure and content requirements__
    
    If no file is provided, no contours are shown. Contours take the form of: https://bl.ocks.org/1wheel/5d6990abfff925e6a37e0557f1de18e5
    Multiple contour sets can be defined in a single file. This single file references further separate files that contain the [lon, lat] point information
    necessary to contain plot contours. Contours best plotted on flat map 
    One-dimensional array containing a file name of contour sets to display on map. File format extension must be CSV. File can be named anything. (blank, [])
    
# <a name="6.17.-locales"></a>
## 6.17. locales

__locales__ (image(s): [locales](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/locales.png))

__Refer to section 7.3 for file format, structure and content requirements__
    
    Defines individual discrete geographic points to highlight on map. In the defined file, user can define both label styling and marker styling
    (fill colour, stroke colour, stroke-width and opacity for each) 

    labelFill, fill 
    labelStroke, stroke
    labelStrokeWidth, strokeWidth
    labelOpacity, opacity

    as well as marker radius and label offset (from marker) for each location
    containing filename of locations to plot position markers at

    Only need to provide a file names. Folder path is provided by *dataFilesPath*. File format extension must be CSV. File can be named anything.
    Multiple Locations can be defined in a single file. (blank, [])
    
# <a name="6.18.-hulls"></a>
## 6.18. hulls

__hulls__ (image(s): [hulls](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/hulls0.png), [hulls](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/hulls1.png))  
  Hulls follow the form shown [here](https://bl.ocks.org/Fil/6a1ed09f6e5648a5451cb130f2b13d20) and [here](https://gist.github.com/Fil/6a1ed09f6e5648a5451cb130f2b13d20)  

__Refer to section 7.5 for file format, structure and content requirements__  
    
    Use underlying map boundary set to define areas that enclose specific geographic areas.
    
    One-dimensional array containing filename of locations to plot position markers at. Only need to provide a file names.
    Folder path is provided by *dataFilesPath*. File format extension must be CSV. File can be named anything. Multiple Hulls can be defined in a single file.
    (blank, [])
    
# <a name="6.19.-routes"></a>
## 6.19. routes

__routes__ (image(s): [routes](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/routes0.png), [routes](http://datalab.int.thomsonreuters.com/jbayliss/Projects/GenericMapInteractive/images/content/routes1.png))  
  Routes are of the form shown [here](https://bl.ocks.org/mbostock/5851933)  

__Refer to section 7.4 for file format, structure and content requirements__
    
    Defines routes and key vertex location points to plot on map visual.
   
    
    One-dimensional array containing filenames of routes and key points on routes to plot.
    Only need to provide a file names. Folder path is provided by *dataFilesPath*. File format extension must be CSV. File can be named anything.
    A single route definition is contained in each individual file. (blank, [])





    
# <a name="7.-File-Load-Format-Configurations"></a>
# __7. File Load Format Configurations__

This section outlines the correct structures of input CSV files to load flows, vector paths, choropleth information and flow paths.

Each file format defintion is arranged in the following format. The __Parameter__ is the fieldname/column header in the CSV file:

__Parameter__
    Description
    Example
    Acceptable ranges/values
    
    

# <a name="7.1.-flowPoints[.csv]-and-Flows[.csv]"></a>
## __7.1. flowPoints[.csv] and Flows[.csv]__

# <a name="7.1.1.-flowPoints[.csv]"></a>
### __7.1.1. flowPoints__

# <a name="place"></a>
#### __place__
    Location place name.
    All start and end Location nodes must be listed
    Adelaide
    Any text string

# <a name="lon"></a>
#### __lon__
    Longitude value for *place*
    180.00
    -180.00 to 180.00

# <a name="lat"></a>
#### __lat__
    Latitude value for *place*
    90.00
    -90.00 to 90.00

# <a name="offX"></a>
#### __offX__
    X-offset [horizontal axis] for location name label
    5
    Any real number

# <a name="offY"></a>
#### __offY__
    Y-offset [vertical axis] for location name label
    5
    Any real number


# <a name="7.1.2.-Flows__[.csv]"></a>
### __7.1.2. Flows__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/excluded?
    *yes*
    Any text entry

# <a name="flowStartPoint"></a>
#### __flowStartPoint__

    Start location of flow line
    *Adelaide*
    Any text string

# <a name="destination"></a>
#### __destination__

    End location of flow line
    *Sydney*
    Any text string

# <a name="legendEntry"></a>
#### __legendEntry__

    Text string to support legend entry describing flow
    *Migrant flow*
    Any text string

# <a name="labelFill"></a>
#### __labelFill__

    Fill colour of location label 
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(a) or RGB colour

# <a name="labelStroke"></a>
#### __labelStroke__

    Stroke colour of location label
    Any acceptable Hex, RGB(a) or RGB colour

# <a name="labelStrokeWidth"></a>
#### __labelStrokeWidth__

    Stroke width of location label
    0.5px
    Any positive real number

# <a name="vol"></a>
#### __vol__
    
    Value to map against
    123.4
    Any value

# <a name="flowStroke"></a>
#### __flowStroke__
    
    Stroke colour of flow line
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="pointStroke"></a>
#### __pointStroke__

    Stroke colour of location  marker
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="pointFill"></a>
#### __pointFill__

    Fill colour of location  marker
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="pointStrokeWidth"></a>
#### __pointStrokeWidth__

    Stroke width of location marker
    0.5px
    Any positive real number

# <a name="displayAt"></a>
#### __displayAt__

    Integer value defining minimum zoom level each location marker will begin to be displayed at. Each label can have a different value attached
    3
    Any integer value in the range 1 to 10 (inclusive)

# <a name="tapered"></a>
#### __tapered__
    
    Defines if flow path is tapered
    True
    True (is tapered); False (is NOT tapered) 

# <a name="lineOpacity"></a>
#### __lineOpacity__

    Opacity of flow line
    0.75
    Any real number value in the range 0.0 to 1.0 (inclusive)

# <a name="lon"></a>
#### __lon__

    X [horizontal axis] offset for location name label
    5
    Any real number

# <a name="lat"></a>
#### __lat__

    Y [vertical axis] offset for location name label
    5
    Any real number

# <a name="offX"></a>
#### __offX__

    X [horizontal axis] offset for location name label
    5
    Any real number

# <a name="offY"></a>
#### __offY__

    Y [vertical axis] offset for location name label
    5
    Any real number

# <a name="pointOpacity"></a>
#### __pointOpacity__

    Opacity of location point marker
    0.75
    Any real number value in the range 0.0 to 1.0 (inclusive)
    

 
# <a name="7.2.-vectorPaths[.csv]"></a>
## __7.2. vectorPaths[.csv]__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/excluded?
    Yes
    Any text entry

# <a name="point"></a>
#### __point__
    
    Label ID for vertex point of vector path definition
    "Aug-17" (example)
    Can be any text string

# <a name="lon"></a>
#### __lon__

    Longitude value for ‘place’
    180.00
    -180.00 to 180.00

# <a name="lat"></a>
#### __lat__

    Latitude value for ‘place’
    90.00
    -90.00 to 90.00

# <a name="value"></a>
#### __value__

    Value to map against
    Any content

# <a name="projected"></a>
#### __projected__

    Defines if vertex point is projected/estimated (true) or recorded value (false). If true, line drawn from this point to next one is displayed as a dash array.
    True
    True (__value__ is projected/estimated); False (__value__ is NOT projected)

# <a name="displayAt"></a>
#### __displayAt__

    Integer value defining minimum zoom level each location marker will begin to be displayed at. Each label can have a different value attached
    3
    Any integer value in the range 1 to 10 (inclusive)


# <a name="7.3.-locales[.csv]"></a>
## __7.3. locales[.csv]__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/excluded?
    Yes
    Any text entry

# <a name="locale"></a>
#### __locale__

    Location name label
    *Adelaide*
    Any text string

# <a name="labelOpacity"></a>
#### __labelOpacity__

    Location name label opacity
    0.5
    Any real number value in the range 0.0 to 1.0 (inclusive)

# <a name="labelStrokeWidth"></a>
#### __labelStrokeWidth__

    Stroke width of location label
    0.5px
    Any positive real number

# <a name="labelFill"></a>
#### __labelFill__

    Fill colour of location label 
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="labelStroke"></a>
#### __labelStroke__

    Stroke colour of location label
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="lon"></a>
#### __lon__

    Longitude value for ‘place’
    180.00
    -180.00 to 180.00

# <a name="lat"></a>
#### __lat__

    Latitude value for ‘place’
    90.00
    -90.00 to 90.00

# <a name="offX"></a>
#### __offX__

    X-offset [horizontal axis] for location name label
    5
    Any real number

# <a name="offY"></a>
#### __offY__

    Y-offset [vertical axis] for location name label
    5
    Any real number

# <a name="opacity"></a>
#### __opacity__

    Location marker opacity
    0.5
    Any real number value in the range 0.0 to 1.0 (inclusive)

# <a name="fill"></a>
#### __fill__

    Location marker fill colour
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="stroke"></a>
#### __stroke__

    Location marker stroke colour
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="strokeWidth"></a>
#### __strokeWidth__

    Location marker stroke width
    5px
    Any float or integer value

# <a name="radius"></a>
#### __radius__

    Radius of locale marker
    5
    Any positive integer
    

# <a name="7.4.-routes[.csv]"></a>
## __7.4. routes[.csv]__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/ excluded?
    Yes
    Any valid text string

# <a name="place"></a>
#### __place__

    Location name label for each connect route point
    Adelaide
    Any valid text string

# <a name="lon"></a>
#### __lon__

    Longitude value for ‘place’
    180.00
    -180.00 to 180.00

# <a name="lat"></a>
#### __lat__

    Latitude value for ‘place’
    90.00
    -90.00 to 90.00

# <a name="routeFill"></a>
#### __routeFill__

    Fill colour of route path
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="routeStroke"></a>
#### __routeStroke__

    Stroke colour of route path
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="routeStrokeWidth"></a>
#### __routeStrokeWidth__

    Route path width
    5px
    Any positive real number

# <a name="routeStrokeOpacity"></a>
#### __routeStrokeOpacity__

    Opacity of location marker
    0.5
    0.0 to 1.0

# <a name="fill"></a>
#### __fill__

    Fill colour of location marker
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="stroke"></a>
#### __stroke__

    Stroke colour of location marker
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="strokeWidth"></a>
#### __strokeWidth__

    Location marker stroke width
    5px
    Any positive real number

# <a name="radius"></a>
#### __radius__

    Radius of location markers
    5
    Any positive real number

# <a name="opacity"></a>
#### __opacity__

    Opacity of location marker
    0.5
    Any real number value in the range 0.0 to 1.0 (inclusive)


# <a name="7.5.-hulls[.csv]"></a>
## __7.5. hulls[.csv]__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/excluded?
    Yes
    Any valid text string

# <a name="countries"></a>
#### __countries__

    One dimension array of area names around which to construct a hull
    Any area names used in loaded topojson

# <a name="group"></a>
#### __group__

    Topojson grouping parameter
    Any valid Topojson geographic group value
    class
    Group parameter in topojson

# <a name="hullFill"></a>
#### __hullFill__

    Fill colour of area hull
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="hullStroke"></a>
#### __hullStroke__

    Stroke colour of area hull
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="hullStrokeWidth"></a>
#### __hullStrokeWidth__

    Stroke width of area hull
    5px
    Any positive valid float or integer value

# <a name="ullFillOpacity"></a>
#### __hullFillOpacity__

    Fill opacity of area hull
    0.5
    0.0 to 1.0

# <a name="siteFill"></a>
#### __siteFill__

    Fill colour of hull vertex point markers
    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour

# <a name="siteStroke"></a>
#### __siteStroke__

    #F00, red, rgb(255,0,0)
    Any acceptable Hex, RGB(A) or RGB colour
    Stroke colour of hull vertex point markers

# <a name="legendEntry"></a>
#### __legendEntry__

    Text string to support legend entry describing flow
    Any text string


# <a name="7.6.-contours[.csv]"></a>
## __7.6. contours[.csv]__

# <a name="exclude"></a>
#### __exclude__

    Should data line be ignored/excluded?
    Yes
    Any valid text string

# <a name="scaleType"></a>
#### __scaleType__

    Defines style of numeric scale to map data values against.
    Log; Linear

# <a name="domain"></a>
#### __domain__

    Defines domain of scaled used. Comma-separated list, not enclosed in brackets
    0.00390625,0.76,1.5
    One dimensional array containing valid positive real numbers

# <a name="range"></a>
#### __range__

    Defines colour range of scaled used. Comma-separated list, not enclosed in brackets
    #fee0d2,#fc9272,#de2d26
    One dimensional array containing valid colour values

# <a name="thresholds"></a>
#### __thresholds__

    Defines thresholds. Comma-separated list, not enclosed in brackets
    0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512
    One dimensional array containing valid positive real numbers)

# <a name="bandWidth"></a>
#### __bandWidth__

    5
    Any positive integer value

# <a name="cellSize"></a>
#### __cellSize__

    5
    Any positive integer value

# <a name="contourFile"></a>
#### __contourFile__

    File name containing [lon, lat] data points that define contours
    Contours1.csv
    Any valid text string suffixed with ‘.csv’
