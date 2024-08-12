define(function() {
    var data = {
        themes:{
			T1:{
				label:'INEGI',
                		layers:[''],
                		desc:'Centros de informaci&oacute;n INEGI',
                		img:'mexico.jpg'
                    }
        	},
            baseLayers: {
                B1: {
                    type: 'Wms',
                    label: 'Topogr&aacute;fico sin sombreado- INEGI',
                    img: 'mapa_sin_sombreado.jpg',
                    url: ['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                    layer: 'MapaBaseTopograficov61_sinsombreado',
                    rights: 'Derechos Reservados &copy; INEGI',
                    tiled: true,
                    legendlayer: ['c100','c101'],
                    desc: 'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                    clasification: 'VECTORIAL'
                },
                B2: {
                    type: 'Wms',
                    label: 'Topográfico con sombreado- INEGI',
                    img: 'mapa_con_sombreado.jpg',
                    url: ['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                    layer: 'MapaBaseTopograficov61_consombreado',
                    rights: 'Derechos Reservados &copy; INEGI',
                    tiled: true,
                    legendlayer: [],
                    desc: 'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                    clasification: 'VECTORIAL'
                },
                B3: {
                    type: 'Wms',
                    label: 'Hipsogr&aacute;fico - INEGI',
                    img: 'baseHipsografico.jpg',
                    url: ['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?', 'http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                    layer: 'MapaBaseHipsografico',
                    rights: '&copy; INEGI 2013',
                    tiled: true,
                    legendlayer: ['img_altimetria.png'],
                    desc: 'IMAGEN DE RELIEVE QUE MUESTRA UNA COMBINACION DE ELEVACION A TRAVES DE COLORES HIPSOGRAFICOS, GENERADA POR PROCESAMIENTO DEL CONTINUO DE ELEVACIONES MEXICANOS DE 3.0 DE 15 METROS.',
                    clasification: 'VECTORIAL'
                },
                B4: {
                    type: 'Bing',
                    label: 'Bing maps',
                    img: 'Bing.jpg',
                    key: 'At-Y-dJe-yHOoSMPmSuTJD5rRE_oltqeTmSYpMrLLYv-ni4moE-Fe1y8OWiNwZVT',
                    layer: 'Aerial',
                    rights: '&copy; Bing Maps',
                    clasification: 'VECTORIAL'
                },
                B5: {
                    type: 'Osm',
                    label: 'Open Street Map',
                    img: 'Osm.jpg',
                    rights: '&copy; OpenStreetMap contributors',
                    clasification: 'VECTORIAL'
                },
                B6: {
                    type: 'Esri',
                    label: 'Esri Map Raster',
                    img: 'Google.jpg',
                    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}',
                    rights: '&copy; ESRI',
                    clasification: 'VECTORIAL'
                },
                B7: {
                    type: 'Esri',
                    label: 'Esri Map Vectorial',
                    img: 'Esri.jpg',
                    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}',
                    rights: '&copy; ESRI',
                    clasification: 'VECTORIAL'
                },
            },
		layers:{
            groups:{			
			G1:{
                    label:'INEGI',
					thematicLink:'https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/geografia/marcogeo/794551067314_s.zip',
                    coord:'POLYGON((-11844733.4567672256380320 2354056.1817025330383331, -11844733.4567672256380320 2626965.5990687417797744, -11439735.3228920008987188 2626965.5990687417797744, -11439735.3228920008987188 2354056.1817025330383331))',                    
                    metadato:'..//descargas/Capas Base.zip',
                    btnGroup : true,
                    layers:{
                        centidad:{
                            label:'Estatal',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:50,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            },
                            metadato:'..//descargas/BUENA_VISTA_PDUCP_16012_DOCS.rar',
                            descarga:'..//descargas/BUENA_VISTA_PDUCP_16012_SHAPE.rar',
                        }
                        //Añadir localidades
                    }
                },
			G2:{
                    label:'SSN',
					thematicLink:'http://www.beta.inegi.org.mx/app/centrosinformacion/',
                    coord:'POLYGON((-11844733.4567672256380320 2354056.1817025330383331, -11844733.4567672256380320 2626965.5990687417797744, -11439735.3228920008987188 2626965.5990687417797744, -11439735.3228920008987188 2354056.1817025330383331))',
                    layers:{
                        covitrampas:{
                            label:'Ovitrampas de Tepic',
                            synonymous:['INEGI','centros'],
                            scale:1,
                            position:71,
                            active:false
                        }
					}
                },
            G3:{
                    label:'SEBIEN',
					thematicLink:'http://www.beta.inegi.org.mx/app/centrosinformacion/',
                    coord:'POLYGON((-11844733.4567672256380320 2354056.1817025330383331, -11844733.4567672256380320 2626965.5990687417797744, -11439735.3228920008987188 2626965.5990687417797744, -11439735.3228920008987188 2354056.1817025330383331))',
                    layers:{
                        cbeneficiarios:{
                            label:'Beneficiarios de Programas Sociales',
                            synonymous:['INEGI','centros'],
                            scale:1,
                            position:300,
                            active:false
                        }
					}
                },
            G4:{
                    label:'SSyPC',
					thematicLink:'http://www.beta.inegi.org.mx/app/centrosinformacion/',
                    coord:'POLYGON((-11844733.4567672256380320 2354056.1817025330383331, -11844733.4567672256380320 2626965.5990687417797744, -11439735.3228920008987188 2626965.5990687417797744, -11439735.3228920008987188 2354056.1817025330383331))',
                    layers:{
                        cbeneficiarios:{
                            label:'Incidencia delictiva',
                            synonymous:['INEGI','centros'],
                            scale:1,
                            position:300,
                            active:false
                        }
					}
                }
            }            
        }
    };
	if(typeof(treeConfig)!='undefined'){
        data = $.extend(data, treeConfig);
    }
    return data;
});