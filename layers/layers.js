var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PanchgangaBasin_1 = new ol.format.GeoJSON();
var features_PanchgangaBasin_1 = format_PanchgangaBasin_1.readFeatures(json_PanchgangaBasin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanchgangaBasin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanchgangaBasin_1.addFeatures(features_PanchgangaBasin_1);
var lyr_PanchgangaBasin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanchgangaBasin_1, 
                style: style_PanchgangaBasin_1,
                popuplayertitle: "Panchganga Basin",
                interactive: false,
                title: '<img src="styles/legend/PanchgangaBasin_1.png" /> Panchganga Basin'
            });
var format_BhogawatiBasin_2 = new ol.format.GeoJSON();
var features_BhogawatiBasin_2 = format_BhogawatiBasin_2.readFeatures(json_BhogawatiBasin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhogawatiBasin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhogawatiBasin_2.addFeatures(features_BhogawatiBasin_2);
var lyr_BhogawatiBasin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BhogawatiBasin_2, 
                style: style_BhogawatiBasin_2,
                popuplayertitle: "Bhogawati Basin",
                interactive: false,
                title: '<img src="styles/legend/BhogawatiBasin_2.png" /> Bhogawati Basin'
            });
var format_DhamanaBasin_3 = new ol.format.GeoJSON();
var features_DhamanaBasin_3 = format_DhamanaBasin_3.readFeatures(json_DhamanaBasin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DhamanaBasin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DhamanaBasin_3.addFeatures(features_DhamanaBasin_3);
var lyr_DhamanaBasin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DhamanaBasin_3, 
                style: style_DhamanaBasin_3,
                popuplayertitle: "Dhamana Basin",
                interactive: false,
                title: '<img src="styles/legend/DhamanaBasin_3.png" /> Dhamana Basin'
            });
var format_KasariBasin_4 = new ol.format.GeoJSON();
var features_KasariBasin_4 = format_KasariBasin_4.readFeatures(json_KasariBasin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KasariBasin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KasariBasin_4.addFeatures(features_KasariBasin_4);
var lyr_KasariBasin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KasariBasin_4, 
                style: style_KasariBasin_4,
                popuplayertitle: "Kasari Basin",
                interactive: false,
                title: '<img src="styles/legend/KasariBasin_4.png" /> Kasari Basin'
            });
var format_TulashiBasin_5 = new ol.format.GeoJSON();
var features_TulashiBasin_5 = format_TulashiBasin_5.readFeatures(json_TulashiBasin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TulashiBasin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TulashiBasin_5.addFeatures(features_TulashiBasin_5);
var lyr_TulashiBasin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TulashiBasin_5, 
                style: style_TulashiBasin_5,
                popuplayertitle: "Tulashi Basin",
                interactive: false,
                title: '<img src="styles/legend/TulashiBasin_5.png" /> Tulashi Basin'
            });
var format_KumbhiBasin_6 = new ol.format.GeoJSON();
var features_KumbhiBasin_6 = format_KumbhiBasin_6.readFeatures(json_KumbhiBasin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KumbhiBasin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KumbhiBasin_6.addFeatures(features_KumbhiBasin_6);
var lyr_KumbhiBasin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KumbhiBasin_6, 
                style: style_KumbhiBasin_6,
                popuplayertitle: "Kumbhi Basin",
                interactive: false,
                title: '<img src="styles/legend/KumbhiBasin_6.png" /> Kumbhi Basin'
            });
var format_Reservoirs_7 = new ol.format.GeoJSON();
var features_Reservoirs_7 = format_Reservoirs_7.readFeatures(json_Reservoirs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservoirs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoirs_7.addFeatures(features_Reservoirs_7);
var lyr_Reservoirs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservoirs_7, 
                style: style_Reservoirs_7,
                popuplayertitle: "Reservoirs",
                interactive: false,
                title: '<img src="styles/legend/Reservoirs_7.png" /> Reservoirs'
            });
var format_RoadNetwork_8 = new ol.format.GeoJSON();
var features_RoadNetwork_8 = format_RoadNetwork_8.readFeatures(json_RoadNetwork_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_8.addFeatures(features_RoadNetwork_8);
var lyr_RoadNetwork_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_8, 
                style: style_RoadNetwork_8,
                popuplayertitle: "Road Network",
                interactive: false,
    title: 'Road Network<br />\
    <img src="styles/legend/RoadNetwork_8_0.png" /> National Highway<br />\
    <img src="styles/legend/RoadNetwork_8_1.png" /> State Highway<br />\
    <img src="styles/legend/RoadNetwork_8_2.png" /> District Roads<br />\
    <img src="styles/legend/RoadNetwork_8_3.png" /> Residential Roads<br />'
        });
var format_Bridges_9 = new ol.format.GeoJSON();
var features_Bridges_9 = format_Bridges_9.readFeatures(json_Bridges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bridges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridges_9.addFeatures(features_Bridges_9);
var lyr_Bridges_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridges_9, 
                style: style_Bridges_9,
                popuplayertitle: "Bridges",
                interactive: true,
                title: '<img src="styles/legend/Bridges_9.png" /> Bridges'
            });
var format_Airport_10 = new ol.format.GeoJSON();
var features_Airport_10 = format_Airport_10.readFeatures(json_Airport_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_10.addFeatures(features_Airport_10);
var lyr_Airport_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_10, 
                style: style_Airport_10,
                popuplayertitle: "Airport",
                interactive: true,
                title: '<img src="styles/legend/Airport_10.png" /> Airport'
            });
var format_BusStation_11 = new ol.format.GeoJSON();
var features_BusStation_11 = format_BusStation_11.readFeatures(json_BusStation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStation_11.addFeatures(features_BusStation_11);
var lyr_BusStation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStation_11, 
                style: style_BusStation_11,
                popuplayertitle: "Bus Station",
                interactive: true,
                title: '<img src="styles/legend/BusStation_11.png" /> Bus Station'
            });
var format_RailwayStation_12 = new ol.format.GeoJSON();
var features_RailwayStation_12 = format_RailwayStation_12.readFeatures(json_RailwayStation_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStation_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStation_12.addFeatures(features_RailwayStation_12);
var lyr_RailwayStation_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailwayStation_12, 
                style: style_RailwayStation_12,
                popuplayertitle: "Railway Station",
                interactive: true,
                title: '<img src="styles/legend/RailwayStation_12.png" /> Railway Station'
            });
var format_Villages_13 = new ol.format.GeoJSON();
var features_Villages_13 = format_Villages_13.readFeatures(json_Villages_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_13.addFeatures(features_Villages_13);
var lyr_Villages_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_13, 
                style: style_Villages_13,
                popuplayertitle: "Villages",
                interactive: false,
                title: '<img src="styles/legend/Villages_13.png" /> Villages'
            });
var format_RaingaugeStations_14 = new ol.format.GeoJSON();
var features_RaingaugeStations_14 = format_RaingaugeStations_14.readFeatures(json_RaingaugeStations_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RaingaugeStations_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RaingaugeStations_14.addFeatures(features_RaingaugeStations_14);
var lyr_RaingaugeStations_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RaingaugeStations_14, 
                style: style_RaingaugeStations_14,
                popuplayertitle: "Raingauge Stations",
                interactive: true,
                title: '<img src="styles/legend/RaingaugeStations_14.png" /> Raingauge Stations'
            });
var format_Industries_15 = new ol.format.GeoJSON();
var features_Industries_15 = format_Industries_15.readFeatures(json_Industries_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_15.addFeatures(features_Industries_15);
var lyr_Industries_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industries_15, 
                style: style_Industries_15,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_15.png" /> Industries'
            });
var format_Dams_16 = new ol.format.GeoJSON();
var features_Dams_16 = format_Dams_16.readFeatures(json_Dams_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dams_16.addFeatures(features_Dams_16);
var lyr_Dams_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dams_16, 
                style: style_Dams_16,
                popuplayertitle: "Dams",
                interactive: false,
                title: '<img src="styles/legend/Dams_16.png" /> Dams'
            });
var format_ReligiousPlaces_17 = new ol.format.GeoJSON();
var features_ReligiousPlaces_17 = format_ReligiousPlaces_17.readFeatures(json_ReligiousPlaces_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReligiousPlaces_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReligiousPlaces_17.addFeatures(features_ReligiousPlaces_17);
var lyr_ReligiousPlaces_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReligiousPlaces_17, 
                style: style_ReligiousPlaces_17,
                popuplayertitle: "Religious Places",
                interactive: true,
                title: '<img src="styles/legend/ReligiousPlaces_17.png" /> Religious Places'
            });
var format_EducationalComplex_18 = new ol.format.GeoJSON();
var features_EducationalComplex_18 = format_EducationalComplex_18.readFeatures(json_EducationalComplex_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducationalComplex_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationalComplex_18.addFeatures(features_EducationalComplex_18);
var lyr_EducationalComplex_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationalComplex_18, 
                style: style_EducationalComplex_18,
                popuplayertitle: "Educational Complex",
                interactive: true,
                title: '<img src="styles/legend/EducationalComplex_18.png" /> Educational Complex'
            });
var format_Rivers_19 = new ol.format.GeoJSON();
var features_Rivers_19 = format_Rivers_19.readFeatures(json_Rivers_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_19.addFeatures(features_Rivers_19);
var lyr_Rivers_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_19, 
                style: style_Rivers_19,
                popuplayertitle: "Rivers",
                interactive: true,
                title: '<img src="styles/legend/Rivers_19.png" /> Rivers'
            });
var format_Tehsil_20 = new ol.format.GeoJSON();
var features_Tehsil_20 = format_Tehsil_20.readFeatures(json_Tehsil_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehsil_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehsil_20.addFeatures(features_Tehsil_20);
var lyr_Tehsil_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehsil_20, 
                style: style_Tehsil_20,
                popuplayertitle: "Tehsil",
                interactive: true,
                title: '<img src="styles/legend/Tehsil_20.png" /> Tehsil'
            });
var format_PanchgangaBasinBoundary_21 = new ol.format.GeoJSON();
var features_PanchgangaBasinBoundary_21 = format_PanchgangaBasinBoundary_21.readFeatures(json_PanchgangaBasinBoundary_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanchgangaBasinBoundary_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanchgangaBasinBoundary_21.addFeatures(features_PanchgangaBasinBoundary_21);
var lyr_PanchgangaBasinBoundary_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanchgangaBasinBoundary_21, 
                style: style_PanchgangaBasinBoundary_21,
                popuplayertitle: "Panchganga Basin Boundary",
                interactive: false,
                title: '<img src="styles/legend/PanchgangaBasinBoundary_21.png" /> Panchganga Basin Boundary'
            });
var format_Kolhapur_22 = new ol.format.GeoJSON();
var features_Kolhapur_22 = format_Kolhapur_22.readFeatures(json_Kolhapur_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kolhapur_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kolhapur_22.addFeatures(features_Kolhapur_22);
var lyr_Kolhapur_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kolhapur_22, 
                style: style_Kolhapur_22,
                popuplayertitle: "Kolhapur",
                interactive: true,
                title: '<img src="styles/legend/Kolhapur_22.png" /> Kolhapur'
            });
var group_SubBasinPanchganga = new ol.layer.Group({
                                layers: [lyr_BhogawatiBasin_2,lyr_DhamanaBasin_3,lyr_KasariBasin_4,lyr_TulashiBasin_5,lyr_KumbhiBasin_6,],
                                fold: "open",
                                title: "Sub Basin Panchganga"});

lyr_GoogleMaps_0.setVisible(true);lyr_PanchgangaBasin_1.setVisible(true);lyr_BhogawatiBasin_2.setVisible(true);lyr_DhamanaBasin_3.setVisible(true);lyr_KasariBasin_4.setVisible(true);lyr_TulashiBasin_5.setVisible(true);lyr_KumbhiBasin_6.setVisible(true);lyr_Reservoirs_7.setVisible(true);lyr_RoadNetwork_8.setVisible(true);lyr_Bridges_9.setVisible(true);lyr_Airport_10.setVisible(true);lyr_BusStation_11.setVisible(true);lyr_RailwayStation_12.setVisible(true);lyr_Villages_13.setVisible(true);lyr_RaingaugeStations_14.setVisible(true);lyr_Industries_15.setVisible(true);lyr_Dams_16.setVisible(true);lyr_ReligiousPlaces_17.setVisible(true);lyr_EducationalComplex_18.setVisible(true);lyr_Rivers_19.setVisible(true);lyr_Tehsil_20.setVisible(true);lyr_PanchgangaBasinBoundary_21.setVisible(true);lyr_Kolhapur_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PanchgangaBasin_1,group_SubBasinPanchganga,lyr_Reservoirs_7,lyr_RoadNetwork_8,lyr_Bridges_9,lyr_Airport_10,lyr_BusStation_11,lyr_RailwayStation_12,lyr_Villages_13,lyr_RaingaugeStations_14,lyr_Industries_15,lyr_Dams_16,lyr_ReligiousPlaces_17,lyr_EducationalComplex_18,lyr_Rivers_19,lyr_Tehsil_20,lyr_PanchgangaBasinBoundary_21,lyr_Kolhapur_22];
lyr_PanchgangaBasin_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_BhogawatiBasin_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_DhamanaBasin_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_KasariBasin_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_TulashiBasin_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_KumbhiBasin_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Reservoirs_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RoadNetwork_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', 'Road Type': 'Road Type', });
lyr_Bridges_9.set('fieldAliases', {'id': 'id', 'Bridge': 'Bridge', });
lyr_Airport_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_BusStation_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RailwayStation_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Villages_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'population': 'population', 'postal_cod': 'postal_cod', 'Name': 'Name', 'Name_F': 'Name_F', });
lyr_RaingaugeStations_14.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', 'path': 'path', 'taluka': 'taluka', 'district': 'district', });
lyr_Industries_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dams_16.set('fieldAliases', {'objectid': 'objectid', 'Name': 'Name', 'strucode': 'strucode', 'nrld_no': 'nrld_no', 'dm_lat': 'dm_lat', 'dm_long': 'dm_long', 'dtcode': 'dtcode', 'state': 'state', 'rivcode': 'rivcode', 'bacode': 'bacode', 'dm_type': 'dm_type', 'dm_cmp_yr': 'dm_cmp_yr', 'dm_ses_zon': 'dm_ses_zon', });
lyr_ReligiousPlaces_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_EducationalComplex_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'grades': 'grades', 'addr_distr': 'addr_distr', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'website': 'website', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'name_en': 'name_en', 'phone': 'phone', 'name_kn': 'name_kn', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'operator': 'operator', 'building': 'building', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'Name': 'Name', });
lyr_Rivers_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'tunnel': 'tunnel', 'layer': 'layer', 'alt_name': 'alt_name', 'intermitte': 'intermitte', 'name_te': 'name_te', 'name_en': 'name_en', 'boat': 'boat', 'width': 'width', 'name_ml': 'name_ml', 'name_ja': 'name_ja', 'name_mr': 'name_mr', 'name_kn': 'name_kn', 'Name': 'Name', 'Stream ord': 'Stream ord', });
lyr_Tehsil_20.set('fieldAliases', {'District': 'District', 'STATE': 'STATE', 'TEHSIL': 'TEHSIL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PanchgangaBasinBoundary_21.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Kolhapur_22.set('fieldAliases', {'District': 'District', 'STATE': 'STATE', 'REMARKS': 'REMARKS', 'State_LGD': 'State_LGD', 'DISTRICT_L': 'DISTRICT_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PanchgangaBasin_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': 'TextEdit', });
lyr_BhogawatiBasin_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': 'TextEdit', });
lyr_DhamanaBasin_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': '', });
lyr_KasariBasin_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': '', });
lyr_TulashiBasin_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': '', });
lyr_KumbhiBasin_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': '', });
lyr_Reservoirs_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RoadNetwork_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'tunnel': 'Range', 'maxspeed': 'Range', 'Road Type': 'TextEdit', });
lyr_Bridges_9.set('fieldImages', {'id': 'TextEdit', 'Bridge': 'TextEdit', });
lyr_Airport_10.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_BusStation_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RailwayStation_12.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_Villages_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'population': 'TextEdit', 'postal_cod': 'TextEdit', 'Name': 'TextEdit', 'Name_F': 'TextEdit', });
lyr_RaingaugeStations_14.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'taluka': 'TextEdit', 'district': 'TextEdit', });
lyr_Industries_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Dams_16.set('fieldImages', {'objectid': 'TextEdit', 'Name': 'TextEdit', 'strucode': 'TextEdit', 'nrld_no': 'TextEdit', 'dm_lat': 'TextEdit', 'dm_long': 'TextEdit', 'dtcode': 'TextEdit', 'state': 'TextEdit', 'rivcode': 'TextEdit', 'bacode': 'TextEdit', 'dm_type': 'TextEdit', 'dm_cmp_yr': 'TextEdit', 'dm_ses_zon': 'TextEdit', });
lyr_ReligiousPlaces_17.set('fieldImages', {'id': 'TextEdit', 'Name': '', });
lyr_EducationalComplex_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'grades': 'TextEdit', 'addr_distr': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'website': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'operator': 'TextEdit', 'building': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'Name': '', });
lyr_Rivers_19.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'alt_name': 'TextEdit', 'intermitte': 'TextEdit', 'name_te': 'TextEdit', 'name_en': 'TextEdit', 'boat': 'TextEdit', 'width': 'TextEdit', 'name_ml': 'TextEdit', 'name_ja': 'TextEdit', 'name_mr': 'TextEdit', 'name_kn': 'TextEdit', 'Name': '', 'Stream ord': '', });
lyr_Tehsil_20.set('fieldImages', {'District': 'TextEdit', 'STATE': 'TextEdit', 'TEHSIL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PanchgangaBasinBoundary_21.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Name': 'TextEdit', });
lyr_Kolhapur_22.set('fieldImages', {'District': 'TextEdit', 'STATE': 'TextEdit', 'REMARKS': 'TextEdit', 'State_LGD': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PanchgangaBasin_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_BhogawatiBasin_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_DhamanaBasin_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_KasariBasin_4.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_TulashiBasin_5.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_KumbhiBasin_6.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'hidden field', });
lyr_Reservoirs_7.set('fieldLabels', {'fid': 'hidden field', 'DN': 'no label', });
lyr_RoadNetwork_8.set('fieldLabels', {'osm_id': 'hidden field', 'name': 'hidden field', 'ref': 'hidden field', 'type': 'hidden field', 'oneway': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'maxspeed': 'hidden field', 'Road Type': 'inline label - visible with data', });
lyr_Bridges_9.set('fieldLabels', {'id': 'hidden field', 'Bridge': 'inline label - visible with data', });
lyr_Airport_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BusStation_11.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RailwayStation_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Villages_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'place': 'hidden field', 'population': 'hidden field', 'postal_cod': 'hidden field', 'Name': 'hidden field', 'Name_F': 'inline label - visible with data', });
lyr_RaingaugeStations_14.set('fieldLabels', {'Name': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'taluka': 'hidden field', 'district': 'hidden field', });
lyr_Industries_15.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Dams_16.set('fieldLabels', {'objectid': 'hidden field', 'Name': 'hidden field', 'strucode': 'hidden field', 'nrld_no': 'hidden field', 'dm_lat': 'hidden field', 'dm_long': 'hidden field', 'dtcode': 'hidden field', 'state': 'hidden field', 'rivcode': 'hidden field', 'bacode': 'hidden field', 'dm_type': 'hidden field', 'dm_cmp_yr': 'hidden field', 'dm_ses_zon': 'hidden field', });
lyr_ReligiousPlaces_17.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_EducationalComplex_18.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'grades': 'hidden field', 'addr_distr': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'website': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'operator': 'hidden field', 'building': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_Rivers_19.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'waterway': 'hidden field', 'boundary': 'hidden field', 'admin_leve': 'hidden field', 'tunnel': 'hidden field', 'layer': 'hidden field', 'alt_name': 'hidden field', 'intermitte': 'hidden field', 'name_te': 'hidden field', 'name_en': 'hidden field', 'boat': 'hidden field', 'width': 'hidden field', 'name_ml': 'hidden field', 'name_ja': 'hidden field', 'name_mr': 'hidden field', 'name_kn': 'hidden field', 'Name': 'inline label - visible with data', 'Stream ord': 'hidden field', });
lyr_Tehsil_20.set('fieldLabels', {'District': 'hidden field', 'STATE': 'hidden field', 'TEHSIL': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PanchgangaBasinBoundary_21.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_Kolhapur_22.set('fieldLabels', {'District': 'hidden field', 'STATE': 'hidden field', 'REMARKS': 'hidden field', 'State_LGD': 'hidden field', 'DISTRICT_L': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Kolhapur_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});