var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Desa_terdampak_1 = new ol.format.GeoJSON();
var features_Desa_terdampak_1 = format_Desa_terdampak_1.readFeatures(json_Desa_terdampak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_terdampak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_terdampak_1.addFeatures(features_Desa_terdampak_1);
var lyr_Desa_terdampak_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_terdampak_1, 
                style: style_Desa_terdampak_1,
                popuplayertitle: "Desa_terdampak",
                interactive: true,
                title: '<img src="styles/legend/Desa_terdampak_1.png" /> Desa_terdampak'
            });
var format_PENDIDIKAN_PT_25K_2 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_2 = format_PENDIDIKAN_PT_25K_2.readFeatures(json_PENDIDIKAN_PT_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_2.addFeatures(features_PENDIDIKAN_PT_25K_2);
var lyr_PENDIDIKAN_PT_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_2, 
                style: style_PENDIDIKAN_PT_25K_2,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_2.png" /> PENDIDIKAN_PT_25K'
            });
var format_Radius_3 = new ol.format.GeoJSON();
var features_Radius_3 = format_Radius_3.readFeatures(json_Radius_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius_3.addFeatures(features_Radius_3);
var lyr_Radius_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius_3, 
                style: style_Radius_3,
                popuplayertitle: "Radius",
                interactive: true,
                title: '<img src="styles/legend/Radius_3.png" /> Radius'
            });
var format_RUMAHSAKIT_PT_25K_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_4 = format_RUMAHSAKIT_PT_25K_4.readFeatures(json_RUMAHSAKIT_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_4.addFeatures(features_RUMAHSAKIT_PT_25K_4);
var lyr_RUMAHSAKIT_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_25K_4, 
                style: style_RUMAHSAKIT_PT_25K_4,
                popuplayertitle: "RUMAHSAKIT_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_4.png" /> RUMAHSAKIT_PT_25K'
            });
var format_SUNGAI_LN_25K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_5 = format_SUNGAI_LN_25K_5.readFeatures(json_SUNGAI_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_5.addFeatures(features_SUNGAI_LN_25K_5);
var lyr_SUNGAI_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_5, 
                style: style_SUNGAI_LN_25K_5,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_5.png" /> SUNGAI_LN_25K'
            });
var format_KRB_I_6 = new ol.format.GeoJSON();
var features_KRB_I_6 = format_KRB_I_6.readFeatures(json_KRB_I_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_I_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_I_6.addFeatures(features_KRB_I_6);
var lyr_KRB_I_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_I_6, 
                style: style_KRB_I_6,
                popuplayertitle: "KRB_I",
                interactive: true,
                title: '<img src="styles/legend/KRB_I_6.png" /> KRB_I'
            });
var format_KRB_II_7 = new ol.format.GeoJSON();
var features_KRB_II_7 = format_KRB_II_7.readFeatures(json_KRB_II_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_II_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_II_7.addFeatures(features_KRB_II_7);
var lyr_KRB_II_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_II_7, 
                style: style_KRB_II_7,
                popuplayertitle: "KRB_II",
                interactive: true,
                title: '<img src="styles/legend/KRB_II_7.png" /> KRB_II'
            });
var format_KRB_III_8 = new ol.format.GeoJSON();
var features_KRB_III_8 = format_KRB_III_8.readFeatures(json_KRB_III_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_III_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_III_8.addFeatures(features_KRB_III_8);
var lyr_KRB_III_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_III_8, 
                style: style_KRB_III_8,
                popuplayertitle: "KRB_III",
                interactive: true,
                title: '<img src="styles/legend/KRB_III_8.png" /> KRB_III'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Desa_terdampak_1.setVisible(true);lyr_PENDIDIKAN_PT_25K_2.setVisible(true);lyr_Radius_3.setVisible(true);lyr_RUMAHSAKIT_PT_25K_4.setVisible(true);lyr_SUNGAI_LN_25K_5.setVisible(true);lyr_KRB_I_6.setVisible(true);lyr_KRB_II_7.setVisible(true);lyr_KRB_III_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Desa_terdampak_1,lyr_PENDIDIKAN_PT_25K_2,lyr_Radius_3,lyr_RUMAHSAKIT_PT_25K_4,lyr_SUNGAI_LN_25K_5,lyr_KRB_I_6,lyr_KRB_II_7,lyr_KRB_III_8];
lyr_Desa_terdampak_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'Penduduk': 'Penduduk', });
lyr_PENDIDIKAN_PT_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_Radius_3.set('fieldAliases', {'id': 'id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'ket': 'ket', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_SUNGAI_LN_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KRB_I_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'nama': 'nama', 'color': 'color', });
lyr_KRB_II_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'nama': 'nama', 'color': 'color', });
lyr_KRB_III_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'nama': 'nama', 'color': 'color', });
lyr_Desa_terdampak_1.set('fieldImages', {'KECAMATAN': '', 'DESA': '', 'Penduduk': '', });
lyr_PENDIDIKAN_PT_25K_2.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_Radius_3.set('fieldImages', {'id': '', 'BUFF_DIST': '', 'ORIG_FID': '', 'ket': '', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_SUNGAI_LN_25K_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_KRB_I_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'nama': 'TextEdit', 'color': 'TextEdit', });
lyr_KRB_II_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'nama': 'TextEdit', 'color': 'TextEdit', });
lyr_KRB_III_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'nama': 'TextEdit', 'color': 'TextEdit', });
lyr_Desa_terdampak_1.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'DESA': 'inline label - always visible', 'Penduduk': 'inline label - always visible', });
lyr_PENDIDIKAN_PT_25K_2.set('fieldLabels', {'NAMOBJ': 'hidden field', 'LUAS': 'hidden field', 'KATPDK': 'hidden field', 'JLPDDK': 'hidden field', 'FGGPDK': 'hidden field', 'REMARK': 'inline label - always visible', 'FCODE': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'JJGPDF': 'hidden field', 'JNSPDL': 'no label', });
lyr_Radius_3.set('fieldLabels', {'id': 'hidden field', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'ket': 'inline label - always visible', });
lyr_RUMAHSAKIT_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'REMARK': 'inline label - always visible', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPRST': 'hidden field', 'JPLYRS': 'hidden field', 'ALAMAT': 'hidden field', });
lyr_SUNGAI_LN_25K_5.set('fieldLabels', {'NAMOBJ': 'hidden field', 'TIPSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'inline label - always visible', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'STATUS': 'hidden field', 'WMAX': 'hidden field', 'DBTMAX': 'hidden field', 'SLPRT': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_KRB_I_6.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'nama': 'hidden field', 'color': 'hidden field', });
lyr_KRB_II_7.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'nama': 'hidden field', 'color': 'hidden field', });
lyr_KRB_III_8.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'nama': 'hidden field', 'color': 'hidden field', });
lyr_KRB_III_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});