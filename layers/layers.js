var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_test_counries_1 = new ol.format.GeoJSON();
var features_test_counries_1 = format_test_counries_1.readFeatures(json_test_counries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_counries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_counries_1.addFeatures(features_test_counries_1);
var lyr_test_counries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_counries_1, 
                style: style_test_counries_1,
                popuplayertitle: 'test_counries',
                interactive: true,
                title: '<img src="styles/legend/test_counries_1.png" /> test_counries'
            });
var format_test_landingpoints_2 = new ol.format.GeoJSON();
var features_test_landingpoints_2 = format_test_landingpoints_2.readFeatures(json_test_landingpoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_landingpoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_landingpoints_2.addFeatures(features_test_landingpoints_2);
var lyr_test_landingpoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_landingpoints_2, 
                style: style_test_landingpoints_2,
                popuplayertitle: 'test_landingpoints',
                interactive: true,
                title: '<img src="styles/legend/test_landingpoints_2.png" /> test_landingpoints'
            });
var format_test_submarinecables_3 = new ol.format.GeoJSON();
var features_test_submarinecables_3 = format_test_submarinecables_3.readFeatures(json_test_submarinecables_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_submarinecables_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_submarinecables_3.addFeatures(features_test_submarinecables_3);
var lyr_test_submarinecables_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_submarinecables_3, 
                style: style_test_submarinecables_3,
                popuplayertitle: 'test_submarinecables',
                interactive: true,
    title: 'test_submarinecables<br />\
    <img src="styles/legend/test_submarinecables_3_0.png" /> aktiv<br />\
    <img src="styles/legend/test_submarinecables_3_1.png" /> geplannt<br />\
    <img src="styles/legend/test_submarinecables_3_2.png" /> nan<br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_test_counries_1.setVisible(true);lyr_test_landingpoints_2.setVisible(true);lyr_test_submarinecables_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_test_counries_1,lyr_test_landingpoints_2,lyr_test_submarinecables_3];
lyr_test_counries_1.set('fieldAliases', {'fid': 'fid', 'continent': 'Kontinent', 'name_de': 'Land', 'anzahl_landepunkte': 'Anzahl Landepunkte', });
lyr_test_landingpoints_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cable_count': 'cable_count', });
lyr_test_submarinecables_3.set('fieldAliases', {'fid': 'fid', 'name': 'Name', 'rfs_year': 'rfs_year', 'status': 'status', 'landing_point_ids': 'landing_point_ids', 'suppliers': 'suppliers', 'owners': 'owners', 'bild': 'Bild', 'url_bild': 'Bildquelle', 'length_map_sting': 'Kabellänge (gemessen)', 'cable_length_de': 'Kabellänge (original)', 'status_de': 'Status', 'year': 'year', 'year_rfs': 'Jahr', });
lyr_test_counries_1.set('fieldImages', {'fid': 'Hidden', 'continent': 'TextEdit', 'name_de': 'TextEdit', 'anzahl_landepunkte': 'Range', });
lyr_test_landingpoints_2.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'cable_count': 'Range', });
lyr_test_submarinecables_3.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'rfs_year': 'Hidden', 'status': 'Hidden', 'landing_point_ids': 'Hidden', 'suppliers': 'Hidden', 'owners': 'Hidden', 'bild': 'TextEdit', 'url_bild': 'TextEdit', 'length_map_sting': 'TextEdit', 'cable_length_de': 'TextEdit', 'status_de': 'TextEdit', 'year': 'Hidden', 'year_rfs': 'TextEdit', });
lyr_test_counries_1.set('fieldLabels', {'continent': 'inline label - visible with data', 'name_de': 'inline label - visible with data', 'anzahl_landepunkte': 'inline label - visible with data', });
lyr_test_landingpoints_2.set('fieldLabels', {'name': 'inline label - visible with data', 'cable_count': 'inline label - visible with data', });
lyr_test_submarinecables_3.set('fieldLabels', {'name': 'inline label - visible with data', 'bild': 'inline label - visible with data', 'url_bild': 'inline label - visible with data', 'length_map_sting': 'inline label - visible with data', 'cable_length_de': 'inline label - visible with data', 'status_de': 'inline label - visible with data', 'year_rfs': 'inline label - visible with data', });
lyr_test_submarinecables_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});