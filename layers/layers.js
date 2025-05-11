var wms_layers = [];


        var lyr_GoogleSatellitecopy_0 = new ol.layer.Tile({
            'title': 'Google Satellite copy',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_kthma_aa_leitourgoun_all_1 = new ol.format.GeoJSON();
var features_kthma_aa_leitourgoun_all_1 = format_kthma_aa_leitourgoun_all_1.readFeatures(json_kthma_aa_leitourgoun_all_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kthma_aa_leitourgoun_all_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kthma_aa_leitourgoun_all_1.addFeatures(features_kthma_aa_leitourgoun_all_1);
var lyr_kthma_aa_leitourgoun_all_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kthma_aa_leitourgoun_all_1, 
                style: style_kthma_aa_leitourgoun_all_1,
                popuplayertitle: 'kthma_aa_leitourgoun_all',
                interactive: true,
                title: '<img src="styles/legend/kthma_aa_leitourgoun_all_1.png" /> kthma_aa_leitourgoun_all'
            });
var format_kthma_aa_leitourgoun_all_v2_2 = new ol.format.GeoJSON();
var features_kthma_aa_leitourgoun_all_v2_2 = format_kthma_aa_leitourgoun_all_v2_2.readFeatures(json_kthma_aa_leitourgoun_all_v2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kthma_aa_leitourgoun_all_v2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kthma_aa_leitourgoun_all_v2_2.addFeatures(features_kthma_aa_leitourgoun_all_v2_2);
var lyr_kthma_aa_leitourgoun_all_v2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kthma_aa_leitourgoun_all_v2_2, 
                style: style_kthma_aa_leitourgoun_all_v2_2,
                popuplayertitle: 'kthma_aa_leitourgoun_all_v2',
                interactive: true,
                title: '<img src="styles/legend/kthma_aa_leitourgoun_all_v2_2.png" /> kthma_aa_leitourgoun_all_v2'
            });

lyr_GoogleSatellitecopy_0.setVisible(true);lyr_kthma_aa_leitourgoun_all_1.setVisible(true);lyr_kthma_aa_leitourgoun_all_v2_2.setVisible(true);
var layersList = [lyr_GoogleSatellitecopy_0,lyr_kthma_aa_leitourgoun_all_1,lyr_kthma_aa_leitourgoun_all_v2_2];
lyr_kthma_aa_leitourgoun_all_1.set('fieldAliases', {'KAEK': 'KAEK', 'ΕΜΒΑΔ': 'ΕΜΒΑΔ', 'ΠΕΡΙΦ': 'ΠΕΡΙΦ', 'ΔΙΕΥΘ': 'ΔΙΕΥΘ', 'ΕΝΤΟΣ': 'ΕΝΤΟΣ', 'ΕΙΔΟΣ': 'ΕΙΔΟΣ', 'ΟΡΙΖ': 'ΟΡΙΖ', });
lyr_kthma_aa_leitourgoun_all_v2_2.set('fieldAliases', {'KAEK': 'KAEK', 'ΕΜΒΑΔ': 'ΕΜΒΑΔ', 'ΠΕΡΙΦ': 'ΠΕΡΙΦ', 'ΔΙΕΥΘ': 'ΔΙΕΥΘ', });
lyr_kthma_aa_leitourgoun_all_1.set('fieldImages', {'KAEK': 'TextEdit', 'ΕΜΒΑΔ': 'TextEdit', 'ΠΕΡΙΦ': 'TextEdit', 'ΔΙΕΥΘ': 'TextEdit', 'ΕΝΤΟΣ': '', 'ΕΙΔΟΣ': '', 'ΟΡΙΖ': '', });
lyr_kthma_aa_leitourgoun_all_v2_2.set('fieldImages', {'KAEK': '', 'ΕΜΒΑΔ': '', 'ΠΕΡΙΦ': '', 'ΔΙΕΥΘ': '', });
lyr_kthma_aa_leitourgoun_all_1.set('fieldLabels', {'KAEK': 'inline label - always visible', 'ΕΜΒΑΔ': 'inline label - always visible', 'ΠΕΡΙΦ': 'inline label - always visible', 'ΔΙΕΥΘ': 'inline label - always visible', 'ΕΝΤΟΣ': 'inline label - always visible', 'ΕΙΔΟΣ': 'inline label - always visible', 'ΟΡΙΖ': 'inline label - always visible', });
lyr_kthma_aa_leitourgoun_all_v2_2.set('fieldLabels', {'KAEK': 'inline label - always visible', 'ΕΜΒΑΔ': 'inline label - always visible', 'ΠΕΡΙΦ': 'inline label - always visible', 'ΔΙΕΥΘ': 'inline label - always visible', });
lyr_kthma_aa_leitourgoun_all_v2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});