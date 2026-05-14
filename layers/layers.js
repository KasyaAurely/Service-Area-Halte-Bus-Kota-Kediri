var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_radius800_2 = new ol.format.GeoJSON();
var features_radius800_2 = format_radius800_2.readFeatures(json_radius800_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_radius800_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radius800_2.addFeatures(features_radius800_2);
var lyr_radius800_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radius800_2, 
                style: style_radius800_2,
                popuplayertitle: 'radius 800',
                interactive: true,
                title: '<img src="styles/legend/radius800_2.png" /> radius 800'
            });
var format_areaperumahanterjangkau_3 = new ol.format.GeoJSON();
var features_areaperumahanterjangkau_3 = format_areaperumahanterjangkau_3.readFeatures(json_areaperumahanterjangkau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areaperumahanterjangkau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areaperumahanterjangkau_3.addFeatures(features_areaperumahanterjangkau_3);
var lyr_areaperumahanterjangkau_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areaperumahanterjangkau_3, 
                style: style_areaperumahanterjangkau_3,
                popuplayertitle: 'area perumahan terjangkau',
                interactive: true,
                title: '<img src="styles/legend/areaperumahanterjangkau_3.png" /> area perumahan terjangkau'
            });
var format_radius400_4 = new ol.format.GeoJSON();
var features_radius400_4 = format_radius400_4.readFeatures(json_radius400_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_radius400_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radius400_4.addFeatures(features_radius400_4);
var lyr_radius400_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radius400_4, 
                style: style_radius400_4,
                popuplayertitle: 'radius 400',
                interactive: true,
                title: '<img src="styles/legend/radius400_4.png" /> radius 400'
            });
var format_areapublikterjangkau_5 = new ol.format.GeoJSON();
var features_areapublikterjangkau_5 = format_areapublikterjangkau_5.readFeatures(json_areapublikterjangkau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areapublikterjangkau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areapublikterjangkau_5.addFeatures(features_areapublikterjangkau_5);
var lyr_areapublikterjangkau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areapublikterjangkau_5, 
                style: style_areapublikterjangkau_5,
                popuplayertitle: 'area publik terjangkau',
                interactive: true,
                title: '<img src="styles/legend/areapublikterjangkau_5.png" /> area publik terjangkau'
            });
var format_Areakomersialterjangkau_6 = new ol.format.GeoJSON();
var features_Areakomersialterjangkau_6 = format_Areakomersialterjangkau_6.readFeatures(json_Areakomersialterjangkau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areakomersialterjangkau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areakomersialterjangkau_6.addFeatures(features_Areakomersialterjangkau_6);
var lyr_Areakomersialterjangkau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areakomersialterjangkau_6, 
                style: style_Areakomersialterjangkau_6,
                popuplayertitle: 'Area komersial terjangkau',
                interactive: true,
                title: '<img src="styles/legend/Areakomersialterjangkau_6.png" /> Area komersial terjangkau'
            });
var format_Halte_7 = new ol.format.GeoJSON();
var features_Halte_7 = format_Halte_7.readFeatures(json_Halte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_7.addFeatures(features_Halte_7);
var lyr_Halte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_7, 
                style: style_Halte_7,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_7.png" /> Halte'
            });

lyr_Positron_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_radius800_2.setVisible(true);lyr_areaperumahanterjangkau_3.setVisible(true);lyr_radius400_4.setVisible(true);lyr_areapublikterjangkau_5.setVisible(true);lyr_Areakomersialterjangkau_6.setVisible(true);lyr_Halte_7.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Batas_Administrasi_1,lyr_radius800_2,lyr_areaperumahanterjangkau_3,lyr_radius400_4,lyr_areapublikterjangkau_5,lyr_Areakomersialterjangkau_6,lyr_Halte_7];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_radius800_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'type': 'type', 'start': 'start', 'Luas (m2)': 'Luas (m2)', });
lyr_areaperumahanterjangkau_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'type': 'type', 'start': 'start', 'Luas (m2)': 'Luas (m2)', 'NAMZON': 'NAMZON', 'Zona2': 'Zona2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_radius400_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'type': 'type', 'start': 'start', 'Luas (m2)': 'Luas (m2)', });
lyr_areapublikterjangkau_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'type': 'type', 'start': 'start', 'Luas (m2)': 'Luas (m2)', 'NAMZON': 'NAMZON', 'Zona2': 'Zona2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_Areakomersialterjangkau_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'type': 'type', 'start': 'start', 'Luas (m2)': 'Luas (m2)', 'NAMZON': 'NAMZON', 'Zona2': 'Zona2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_Halte_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Radius': 'Radius', 'ID': 'ID', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_radius800_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas (m2)': 'TextEdit', });
lyr_areaperumahanterjangkau_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas (m2)': 'TextEdit', 'NAMZON': 'TextEdit', 'Zona2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_radius400_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas (m2)': 'TextEdit', });
lyr_areapublikterjangkau_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas (m2)': 'TextEdit', 'NAMZON': 'TextEdit', 'Zona2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Areakomersialterjangkau_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas (m2)': 'TextEdit', 'NAMZON': 'TextEdit', 'Zona2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Halte_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Radius': 'TextEdit', 'ID': '', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_radius800_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Radius': 'no label', 'type': 'no label', 'start': 'no label', 'Luas (m2)': 'no label', });
lyr_areaperumahanterjangkau_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Radius': 'no label', 'type': 'no label', 'start': 'no label', 'Luas (m2)': 'no label', 'NAMZON': 'no label', 'Zona2': 'no label', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_radius400_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Radius': 'no label', 'type': 'no label', 'start': 'no label', 'Luas (m2)': 'no label', });
lyr_areapublikterjangkau_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Radius': 'no label', 'type': 'no label', 'start': 'no label', 'Luas (m2)': 'no label', 'NAMZON': 'no label', 'Zona2': 'no label', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_Areakomersialterjangkau_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Radius': 'no label', 'type': 'no label', 'start': 'no label', 'Luas (m2)': 'no label', 'NAMZON': 'no label', 'Zona2': 'no label', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_Halte_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Radius': 'inline label - always visible', 'ID': 'no label', });
lyr_Halte_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});