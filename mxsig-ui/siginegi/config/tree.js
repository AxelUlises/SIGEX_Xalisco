define(function() {
    var data = {
        themes:{
			T1:{
				label:'Centros de informaci&oacute;n INEGI',
                		layers:[''],
                		desc:'Centros de informaci&oacute;n INEGI',
                		img:'mexico.jpg'
                    },
            T2:{
				label:'IPLANAY',
                		layers:[''],
                		desc:'Instituto de Planeación de Nayarit',
                		img:'logoiplanay.png'
                    }
          	},
        baseLayers:{
              B1:{
                type:'Wms',
                label:'Topogr&aacute;fico sin sombreado - INEGI',
                img:'mapa_sin_sombreado.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
				layer:'MapaBaseTopograficov61_sinsombreado',
                rights:'Derechos Reservados &copy; INEGI',
                tiled:true,
				legendlayer:[''],
                desc:'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                clasification:'VECTORIAL'
            },
			 B2:{
                type:'Wms',
                label:'Topogr&aacute;fico gris - INEGI ',
                img:'mapa_gris.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
				layer:'MapaBaseTopograficov61_sinsombreado_gris', 
                rights:'Derechos Reservados &copy; INEGI',
                tiled:true,
				legendlayer:[''],
				legendUrl:'http://10.152.11.41:82/cgi-bin/ms62/mapserv?map=/opt/map/mdm60/mdm61leyendaprueba_gris.map&Request=GetLegendGraphic&format=image/png&Version=1.1.1&Service=WMS&LAYER=',
                desc:'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                clasification:'VECTORIAL'
            },
			B3:{
               type:'Wms',
                label:'Topogr&aacute;fico con sombreado - INEGI',
                img:'mapa_con_sombreado.jpg',		             
                  url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
				 layer:'MapaBaseTopograficov61_consombreado',
                rights:'Derechos Reservados &copy; INEGI',
                tiled:true,
				legendlayer:[''],
                desc:'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                clasification:'VECTORIAL'
            },
            B4:{
                type:'Wms',
                label:'Hipsogr&aacute;fico - INEGI',
                img:'baseHipsografico.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                layer:'MapaBaseHipsografico',
				rights:'&copy; INEGI 2013',
                tiled:true,
                legendlayer:['img_altimetria.png'],
                desc:'IMAGEN DE RELIEVE QUE MUESTRA UNA COMBINACION DE ELEVACION A TRAVES DE COLORES HIPSOGRAFICOS, GENERADA POR PROCESAMIENTO DEL CONTINUO DE ELEVACIONES MEXICANOS DE 3.0 DE 15 METROS.',
                clasification:'RASTER'
            },
            B5:{
                type:'Wms',
                label:'Ortofotos - INEGI',
                img:'baseOrtos.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                layer:'MapaBaseOrtofoto',
				rights:'&copy; INEGI 2013',
                tiled:true,
                desc:'CONJUNTO DE IMAGENES AEREAS ORTORECTIFICADAS A DIVERSAS ESCALAS Y RESOLUCIONES, PROVENIENTES DEL ACERVO DE ORTOFOTOS DE INEGI Y QUE CORRESPONDEN A TOMAS REALIZADAS EN EL LAPSO 2005-2012.',
                clasification:'RASTER'
                },		
			 B6:{
                type:'Wms',
                label:'ICDS - INEGI',
                img:'baseICDS.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                //Check ip,
                layer:'ICDS',
				rights:'&copy; INEGI 2017',
                tiled:true,
                desc:'CONJUNTO DE IMAGENES CARTOGÁFICAS DIGITALES DE LA CARTAS TOPOGRÁFICAS ESCALA 1:50,000',
                clasification:'RASTER'
                },		
            B7:{
                type:'Osm',
                label:'Open Street Map',
                img:'Osm.jpg',
                rights:'&copy; OpenStreetMap contributors',
                clasification:'VECTORIAL'
            },
			B8:{
				type:'Esri',
				label:'Esri map',
				img:'Esri.jpg',
				url:'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}',
				rights:'&copy; ESRI',
				clasification:'VECTORIAL'
			},
			B9:{
				hidden:true,
                type:'Wms',
                label:'Topográfico gris INE-INEGI',
                img:'mapa_gris.jpg',		             
                url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                //Check ip,
                layer:'MapaBase_geoelectoral_sl',
				rights:'&copy; INEGI 2017',
                tiled:true,
                desc:'CONJUNTO DE IMAGENES CARTOGÁFICAS DIGITALES DE LA CARTAS TOPOGRÁFICAS ESCALA 1:50,000',
                clasification:'VECTORIAL'
                }
        },
		layers:{
            groups:{			
			G1:{
                    label:'L&iacute;mites del Marco Geoestad&iacute;stico Nayarit 2023',
					thematicLink:'http://www.inegi.org.mx/geo/contenidos/geoestadistica/default.aspx',
                    layers:{
                        c100:{
                            label:'Estatal',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:50,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            }
                        },
                        c101:{
                            label:'Municipal',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:51,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            }
                        },
                        c102:{
                            label:'Localidades Amanzanadas',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:52,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            }
                        },
                        c103:{
                            label:'Servicios Puntuales',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:55,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            }
                        },
                        c104:{
                            label:'Calles',
                            synonymous:['estado','estatales'],
                            scale:1,
                            position:54,
                            active:false,
                            texts:{
                                scale:1,
                                active:false
                            }
                        }
                        //Añadir localidades
                    }
                },
			G2:{
                    label:'Servicios de salud de Nayarit SSN',
					thematicLink:'http://www.beta.inegi.org.mx/app/centrosinformacion/',
                    layers:{
                        c200:{
                            label:'Ovitrampas de Tepic',
                            synonymous:['INEGI','centros'],
                            scale:1,
                            position:71,
                            active:false
                        }
					}
                },
            G3:{
                    label:'Secretaria de Bienestar',
					thematicLink:'http://www.beta.inegi.org.mx/app/centrosinformacion/',
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
                    label:'Instituto de Planeación del Estado de Nayarit (IPLANAY)',
					thematicLink:'https://iplanay.gob.mx',
                    layers:{
                        centidad:{
                            label:'Nayarit',
                            synonymous:['Nayarit','nayarit'],
                            scale:1,
                            position:300,
                            active:false
                        },
                        cmunicipios:{
                            label:'Limites municipales',
                            synonymous:['Municpios','municpios'],
                            scale:1,
                            position:301,
                            active:false
                        },
                        clocalidades:{
                            label:'Localidades amanzanadas',
                            synonymous:['Localidad','localidades'],
                            scale:1,
                            position:302,
                            active:false
                        },
                        cservicios:{
                            label:'Servicios puntuales',
                            synonymous:['Sercios','servicios'],
                            scale:1,
                            position:303,
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