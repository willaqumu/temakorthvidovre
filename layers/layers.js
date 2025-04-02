ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1378816.979029, 7478864.758784, 1405665.902958, 7492641.337784]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_frededeomrder_1 = new ol.format.GeoJSON();
var features_frededeomrder_1 = format_frededeomrder_1.readFeatures(json_frededeomrder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_1.addFeatures(features_frededeomrder_1);
var lyr_frededeomrder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_1, 
                style: style_frededeomrder_1,
                popuplayertitle: 'frededeområder',
                interactive: false,
                title: '<img src="styles/legend/frededeomrder_1.png" /> frededeområder'
            });
var format_Lokalplanforslag_2 = new ol.format.GeoJSON();
var features_Lokalplanforslag_2 = format_Lokalplanforslag_2.readFeatures(json_Lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_2.addFeatures(features_Lokalplanforslag_2);
var lyr_Lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_2, 
                style: style_Lokalplanforslag_2,
                popuplayertitle: 'Lokalplan - forslag',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanforslag_2.png" /> Lokalplan - forslag'
            });
var format_Lokalplanvedtaget_3 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_3 = format_Lokalplanvedtaget_3.readFeatures(json_Lokalplanvedtaget_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_3.addFeatures(features_Lokalplanvedtaget_3);
var lyr_Lokalplanvedtaget_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_3, 
                style: style_Lokalplanvedtaget_3,
                popuplayertitle: 'Lokalplan - vedtaget',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanvedtaget_3.png" /> Lokalplan - vedtaget'
            });
var format_strandbeskyttelse_4 = new ol.format.GeoJSON();
var features_strandbeskyttelse_4 = format_strandbeskyttelse_4.readFeatures(json_strandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelse_4.addFeatures(features_strandbeskyttelse_4);
var lyr_strandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelse_4, 
                style: style_strandbeskyttelse_4,
                popuplayertitle: 'strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelse_4.png" /> strandbeskyttelse'
            });
var format_fredeomhvidov_5 = new ol.format.GeoJSON();
var features_fredeomhvidov_5 = format_fredeomhvidov_5.readFeatures(json_fredeomhvidov_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fredeomhvidov_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fredeomhvidov_5.addFeatures(features_fredeomhvidov_5);
var lyr_fredeomhvidov_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fredeomhvidov_5, 
                style: style_fredeomhvidov_5,
                popuplayertitle: 'fredeomhvidov',
                interactive: true,
                title: '<img src="styles/legend/fredeomhvidov_5.png" /> fredeomhvidov'
            });
var format_kommuneplan_6 = new ol.format.GeoJSON();
var features_kommuneplan_6 = format_kommuneplan_6.readFeatures(json_kommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_6.addFeatures(features_kommuneplan_6);
var lyr_kommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_6, 
                style: style_kommuneplan_6,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_6.png" /> kommuneplan'
            });
var format_havne_7 = new ol.format.GeoJSON();
var features_havne_7 = format_havne_7.readFeatures(json_havne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_havne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_havne_7.addFeatures(features_havne_7);
var lyr_havne_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_havne_7, 
                style: style_havne_7,
                popuplayertitle: 'havne',
                interactive: true,
                title: '<img src="styles/legend/havne_7.png" /> havne'
            });
var format_hvidfolk60_8 = new ol.format.GeoJSON();
var features_hvidfolk60_8 = format_hvidfolk60_8.readFeatures(json_hvidfolk60_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hvidfolk60_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hvidfolk60_8.addFeatures(features_hvidfolk60_8);
var lyr_hvidfolk60_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hvidfolk60_8, 
                style: style_hvidfolk60_8,
                popuplayertitle: 'hvidfolk60',
                interactive: true,
                title: '<img src="styles/legend/hvidfolk60_8.png" /> hvidfolk60'
            });
var format_QGISTankstationer_9 = new ol.format.GeoJSON();
var features_QGISTankstationer_9 = format_QGISTankstationer_9.readFeatures(json_QGISTankstationer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISTankstationer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISTankstationer_9.addFeatures(features_QGISTankstationer_9);
var lyr_QGISTankstationer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISTankstationer_9, 
                style: style_QGISTankstationer_9,
                popuplayertitle: 'QGIS — Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/QGISTankstationer_9.png" /> QGIS — Tankstationer'
            });
var format_QGISSupermarkeder_10 = new ol.format.GeoJSON();
var features_QGISSupermarkeder_10 = format_QGISSupermarkeder_10.readFeatures(json_QGISSupermarkeder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISSupermarkeder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISSupermarkeder_10.addFeatures(features_QGISSupermarkeder_10);
var lyr_QGISSupermarkeder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISSupermarkeder_10, 
                style: style_QGISSupermarkeder_10,
                popuplayertitle: 'QGIS — Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/QGISSupermarkeder_10.png" /> QGIS — Supermarkeder'
            });
var format_QGISSundhed_11 = new ol.format.GeoJSON();
var features_QGISSundhed_11 = format_QGISSundhed_11.readFeatures(json_QGISSundhed_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISSundhed_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISSundhed_11.addFeatures(features_QGISSundhed_11);
var lyr_QGISSundhed_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISSundhed_11, 
                style: style_QGISSundhed_11,
                popuplayertitle: 'QGIS — Sundhed',
                interactive: true,
                title: '<img src="styles/legend/QGISSundhed_11.png" /> QGIS — Sundhed'
            });
var format_QGISBrnehaver_12 = new ol.format.GeoJSON();
var features_QGISBrnehaver_12 = format_QGISBrnehaver_12.readFeatures(json_QGISBrnehaver_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISBrnehaver_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISBrnehaver_12.addFeatures(features_QGISBrnehaver_12);
var lyr_QGISBrnehaver_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISBrnehaver_12, 
                style: style_QGISBrnehaver_12,
                popuplayertitle: 'QGIS — Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/QGISBrnehaver_12.png" /> QGIS — Børnehaver'
            });
var format_QGISApoteker_13 = new ol.format.GeoJSON();
var features_QGISApoteker_13 = format_QGISApoteker_13.readFeatures(json_QGISApoteker_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QGISApoteker_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISApoteker_13.addFeatures(features_QGISApoteker_13);
var lyr_QGISApoteker_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISApoteker_13, 
                style: style_QGISApoteker_13,
                popuplayertitle: 'QGIS — Apoteker',
                interactive: true,
                title: '<img src="styles/legend/QGISApoteker_13.png" /> QGIS — Apoteker'
            });
var format_Togstationer_14 = new ol.format.GeoJSON();
var features_Togstationer_14 = format_Togstationer_14.readFeatures(json_Togstationer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_14.addFeatures(features_Togstationer_14);
var lyr_Togstationer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_14, 
                style: style_Togstationer_14,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_14.png" /> Togstationer'
            });
var format_Bager_15 = new ol.format.GeoJSON();
var features_Bager_15 = format_Bager_15.readFeatures(json_Bager_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bager_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bager_15.addFeatures(features_Bager_15);
var lyr_Bager_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bager_15, 
                style: style_Bager_15,
                popuplayertitle: 'Bager',
                interactive: true,
                title: '<img src="styles/legend/Bager_15.png" /> Bager'
            });
var format_Svmmehal_16 = new ol.format.GeoJSON();
var features_Svmmehal_16 = format_Svmmehal_16.readFeatures(json_Svmmehal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehal_16.addFeatures(features_Svmmehal_16);
var lyr_Svmmehal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehal_16, 
                style: style_Svmmehal_16,
                popuplayertitle: 'Svømmehal',
                interactive: true,
                title: '<img src="styles/legend/Svmmehal_16.png" /> Svømmehal'
            });
var format_Legeplads_17 = new ol.format.GeoJSON();
var features_Legeplads_17 = format_Legeplads_17.readFeatures(json_Legeplads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_17.addFeatures(features_Legeplads_17);
var lyr_Legeplads_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_17, 
                style: style_Legeplads_17,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_17.png" /> Legeplads'
            });
var format_Ungdomsuddannelser_18 = new ol.format.GeoJSON();
var features_Ungdomsuddannelser_18 = format_Ungdomsuddannelser_18.readFeatures(json_Ungdomsuddannelser_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ungdomsuddannelser_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ungdomsuddannelser_18.addFeatures(features_Ungdomsuddannelser_18);
var lyr_Ungdomsuddannelser_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ungdomsuddannelser_18, 
                style: style_Ungdomsuddannelser_18,
                popuplayertitle: 'Ungdomsuddannelser',
                interactive: true,
                title: '<img src="styles/legend/Ungdomsuddannelser_18.png" /> Ungdomsuddannelser'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_frededeomrder_1.setVisible(true);lyr_Lokalplanforslag_2.setVisible(true);lyr_Lokalplanvedtaget_3.setVisible(true);lyr_strandbeskyttelse_4.setVisible(true);lyr_fredeomhvidov_5.setVisible(true);lyr_kommuneplan_6.setVisible(true);lyr_havne_7.setVisible(true);lyr_hvidfolk60_8.setVisible(true);lyr_QGISTankstationer_9.setVisible(true);lyr_QGISSupermarkeder_10.setVisible(true);lyr_QGISSundhed_11.setVisible(true);lyr_QGISBrnehaver_12.setVisible(true);lyr_QGISApoteker_13.setVisible(true);lyr_Togstationer_14.setVisible(true);lyr_Bager_15.setVisible(true);lyr_Svmmehal_16.setVisible(true);lyr_Legeplads_17.setVisible(true);lyr_Ungdomsuddannelser_18.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_frededeomrder_1,lyr_Lokalplanforslag_2,lyr_Lokalplanvedtaget_3,lyr_strandbeskyttelse_4,lyr_fredeomhvidov_5,lyr_kommuneplan_6,lyr_havne_7,lyr_hvidfolk60_8,lyr_QGISTankstationer_9,lyr_QGISSupermarkeder_10,lyr_QGISSundhed_11,lyr_QGISBrnehaver_12,lyr_QGISApoteker_13,lyr_Togstationer_14,lyr_Bager_15,lyr_Svmmehal_16,lyr_Legeplads_17,lyr_Ungdomsuddannelser_18];
lyr_frededeomrder_1.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Lokalplanforslag_2.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanvedtaget_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_strandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_fredeomhvidov_5.set('fieldAliases', {'fid': 'fid', 'lokalitet_': 'lokalitet_', 'systemnr': 'systemnr', 'stednr': 'stednr', 'loknr': 'loknr', 'sbext': 'sbext', 'frednr': 'frednr', 'anlaegstyp': 'anlaegstyp', 'datering': 'datering', 'zone': 'zone', 'url': 'url', });
lyr_kommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_havne_7.set('fieldAliases', {'havne_id': 'havne_id', 'navn': 'navn', 'erhvervsha': 'erhvervsha', 'lystbaadeh': 'lystbaadeh', 'bredde': 'bredde', 'laengde': 'laengde', 'x': 'x', 'y': 'y', 'type': 'type', 'typetekst': 'typetekst', 'mst_id': 'mst_id', 'distr_id': 'distr_id', 'ho_id': 'ho_id', 'link': 'link', });
lyr_hvidfolk60_8.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_QGISTankstationer_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISSupermarkeder_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISSundhed_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'navn': 'navn', });
lyr_QGISBrnehaver_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_QGISApoteker_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bager_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehal_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ungdomsuddannelser_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_frededeomrder_1.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Lokalplanforslag_2.set('fieldImages', {'fid': 'TextEdit', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanvedtaget_3.set('fieldImages', {'fid': 'TextEdit', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_strandbeskyttelse_4.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_fredeomhvidov_5.set('fieldImages', {'fid': 'TextEdit', 'lokalitet_': 'TextEdit', 'systemnr': 'TextEdit', 'stednr': 'TextEdit', 'loknr': 'TextEdit', 'sbext': 'TextEdit', 'frednr': 'TextEdit', 'anlaegstyp': 'TextEdit', 'datering': 'TextEdit', 'zone': 'TextEdit', 'url': 'TextEdit', });
lyr_kommuneplan_6.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_havne_7.set('fieldImages', {'havne_id': 'TextEdit', 'navn': 'TextEdit', 'erhvervsha': 'TextEdit', 'lystbaadeh': 'TextEdit', 'bredde': 'TextEdit', 'laengde': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'typetekst': 'TextEdit', 'mst_id': 'TextEdit', 'distr_id': 'TextEdit', 'ho_id': 'TextEdit', 'link': 'TextEdit', });
lyr_hvidfolk60_8.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_QGISTankstationer_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISSupermarkeder_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISSundhed_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'navn': 'TextEdit', });
lyr_QGISBrnehaver_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_QGISApoteker_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Bager_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Svmmehal_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Legeplads_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ungdomsuddannelser_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_frededeomrder_1.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Lokalplanforslag_2.set('fieldLabels', {'fid': 'no label', 'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Lokalplanvedtaget_3.set('fieldLabels', {'fid': 'no label', 'planid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_strandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_fredeomhvidov_5.set('fieldLabels', {'fid': 'no label', 'lokalitet_': 'no label', 'systemnr': 'no label', 'stednr': 'no label', 'loknr': 'no label', 'sbext': 'no label', 'frednr': 'no label', 'anlaegstyp': 'no label', 'datering': 'no label', 'zone': 'no label', 'url': 'no label', });
lyr_kommuneplan_6.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_havne_7.set('fieldLabels', {'havne_id': 'no label', 'navn': 'no label', 'erhvervsha': 'no label', 'lystbaadeh': 'no label', 'bredde': 'no label', 'laengde': 'no label', 'x': 'no label', 'y': 'no label', 'type': 'no label', 'typetekst': 'no label', 'mst_id': 'no label', 'distr_id': 'no label', 'ho_id': 'no label', 'link': 'no label', });
lyr_hvidfolk60_8.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_QGISTankstationer_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISSupermarkeder_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISSundhed_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'navn': 'no label', });
lyr_QGISBrnehaver_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_QGISApoteker_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_14.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Bager_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Svmmehal_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Legeplads_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ungdomsuddannelser_18.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ungdomsuddannelser_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});