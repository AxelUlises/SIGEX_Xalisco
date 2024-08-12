FROM geodata/mapserver:7.0.1

LABEL MxSIG INEGI

RUN mkdir /opt/map

COPY map /opt/map

RUN mkdir /logs

RUN mkdir /logs/mapserver

RUN cd /logs/mapserver &&\
	touch mxsigvector.log &&\
	chmod 777 -R /logs/

RUN cd /logs/mapserver &&\
	touch mxsigleyenda.log &&\
	chmod 777 -R /logs/

RUN cd /logs/mapserver &&\
	touch mxsigtexto.log &&\
	chmod 777 -R /logs/

RUN cd /logs/mapserver &&\
	touch cpv2010.log &&\
	chmod 777 -R /logs/

COPY ./proj /usr/share/proj

EXPOSE 80
