<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico de demanda energética
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El error más común y crítico en la fase de prediseño de sistemas de Energización Rural Sostenible (ERS) es confundir la potencia (W) con la energía (Wh). Para dimensionar correctamente un sistema aislado (módulos, baterías, controlador), el valor absoluto que debe obtenerse del diagnóstico es la energía consumida en un ciclo de 24 horas, expresada en vatio-hora por día (Wh/día).
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Concepto potencia y energía
        .tabla-a.tab2
          table
            thead
              tr
                th Concepto
                th Unidad
                th Descripción
                th Relevancia en el diseño
            tbody
              tr
                td #[b Potencia (P)]
                td Vatio (W) o Kilovatio (kW)
                td Es la tasa a la que se consume la energía en un instante. Es una medida de la capacidad del aparato.
                td Determina el tamaño del inversor y el controlador de Carga.
              tr
                td.bgr #[b Energía (E)]
                td.bgr Vatio/hora (Wh) o Kilovatio/hora (kWh)
                td.bgr Es la acumulación de potencia consumida durante un período de tiempo. Es la medida del consumo real.
                td.bgr Determina el tamaño del banco de baterías y los módulos solares.
    
    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 La cuantificación de la demanda se realiza aplicando la siguiente relación a cada uno de los aparatos eléctricos (cargas) identificados en el hogar o la comunidad:
        .row.justify-content-center.mb-4
          .col-lg-6
            .bg8.p-4.text-center
              p.mb-0 E_diaria = P_aparato × T_uso diario
        p.mb-4 Donde:
        .bg2.p-4.p-lg-5.mb-0
          .row.justify-content-center.align-items.mb-0
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/tema3/3.svg')
            .col-lg-11
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b E_diaria (Wh/día):] es la energía consumida por ese aparato en un día.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b P_aparato (W):] es la potencia nominal del aparato, generalmente especificada por el fabricante (o medida con un vatímetro).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b T_uso diario (horas):] es el tiempo promedio de uso diario del aparato, dato que se obtiene mediante las encuestas socioenergéticas (diagnóstico social).
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')

    p.mb-5(data-aos="fade-left") #[b El cálculo de la demanda total diaria es la métrica de partida para el dimensionamiento:]
  
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/4.png')
          h3.mb-4.text-center.text-white Para las baterías
          p.mb-0.text-white El banco de baterías debe ser capaz de almacenar suficiente energía (Wh) para satisfacer esta demanda durante la noche y los días nublados (autonomía).
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/5.png')
          h3.mb-4.text-center Para los módulos FV
          p.mb-lg-4 La matriz solar debe tener la capacidad de generar, con el recurso solar disponible (HSP), la cantidad total de Wh requerida para cubrir la demanda y recargar completamente las baterías al día siguiente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/6.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            H4 Errores comunes a evitar
            br
            br
            p.mb-0 #[b Sobredimensionamiento por potencia:] un técnico inexperto podría sobredimensionar el sistema basándose solo en la potencia máxima (W), lo que resulta en un sistema excesivamente caro y sobredimensionado para la energía real consumida.
            br
            br
            p.mb-0 #[b Subestimación del uso diario:] subestimar el tiempo real de uso (T uso diario) por falta de un diagnóstico social riguroso lleva al colapso del sistema (descarga total de baterías) y a la insatisfacción del usuario.

    p.mb-0(data-aos="fade-right") Por lo tanto, el Wh/día no es solo una unidad de medida, es la demanda energética real que debe satisfacer el proyecto, y es el punto de enlace entre el diagnóstico social y el redimensionamiento técnico.

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Inventario y clasificación de cargas

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4
        .bg10.p-4.h-100.alig
          p.mb-0 El objetivo de esta fase es traducir los aparatos eléctricos (cargas) que el usuario rural desea utilizar en datos técnicos cuantificables (potencia y uso), lo cual es el primer paso para calcular la demanda de diseño (Wh/día).
      .col-lg-3.h-100.col-md-7.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/7.svg')
      .col-lg-4
        img.mb-5.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/8.svg')
        p.mb-0 El inventario debe ser exhaustivo y preciso, utilizando las encuestas socioenergéticas para obtener los datos de la placa del fabricante o, idealmente, mediante la medición en campo con un vatímetro.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Inventario y caracterización de cargas eléctricas para el cálculo de la demanda de diseño (Wh/día)
        .tabla-a.tab3
          table
            thead
              tr
                th Parámetro
                th Fuente de obtención
                th Importancia para el diseño
            tbody
              tr
                td #[b Aparato]
                td Encuesta social.
                td Identificación del tipo de carga.
              tr
                td.bgr #[b Potencia nominal (P)]
                td.bgr Placa de especificaciones (W).
                td.bgr Usada en la fórmula fundamental (E=P x T).
              tr
                td #[b Voltaje de operación (V)]
                td Placa de especificaciones (V).
                td Determina si la carga es DC o AC (12V, 24V, 120V).
              tr
                td.bgr #[b Tiempo de uso diario (T)]
                td.bgr Encuesta social (Horas/día).
                td.bgr El factor clave para calcular la energía diaria (Wh/día).    
        
    .bg7.p-lg-5.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-lg-0.mb-md-0(src="@/assets/curso/tema3/9.svg")
        .col-lg-11.col-md-9.col-11
          p.mb-0 #[b Nota crítica:] los aparatos comprados en el mercado local suelen tener etiquetas de potencia poco fiables. La medición con un vatímetro en una situación real de uso (si es posible) es la práctica más recomendada para garantizar la precisión del prediseño.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Clasificación de cargas por tipo de corriente
    
    p.mb-5(data-aos="fade-left") La clasificación es fundamental porque determina la topología del sistema Fotovoltaico (FV) aislado (#[em Off - Grid]). Las cargas se dividen en dos categorías principales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsC.color-primario
          .bg8.p-lg-5.p-4(titulo="Cargas de Corriente Continua (DC)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema3/10.png')
                  .col-lg-7
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Definición:] son aparatos que funcionan directamente con el voltaje de la batería del sistema (usualmente 12V, 24V o 48V).
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Ejemplos típicos:] iluminación LED de bajo consumo, carga directa de celulares (vía puerto USB), algunas neveras de alta eficiencia diseñadas para sistemas solares.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Ventaja:] conectarlas directamente al controlador de carga (vía salida DC) elimina la necesidad de un inversor, minimizando las pérdidas por conversión (pérdidas por eficiencia del inversor).
          .bg8.p-lg-5.p-4(titulo="Cargas de Corriente Alterna (AC)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema3/11.png')
                  .col-lg-7
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Definición:] son aparatos estándar del mercado que requieren el voltaje y frecuencia de la red (típicamente 120 V / 60 Hz en Colombia).
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Ejemplos típicos:] televisores, equipos de sonido, neveras y congeladores estándar, electrodomésticos, herramientas eléctricas.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Requisito:] requieren un inversor (DC / AC) para convertir la energía almacenada en las baterías a corriente alterna. Este componente introduce una pérdida de eficiencia que debe ser considerada en los cálculos (factor del 85 % al 95 %).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Clasificación de cargas por prioridad
    
    p.mb-5(data-aos="fade-right") Para sistemas con limitaciones presupuestarias (la mayoría en ERS), la priorización es una herramienta de gestión de expectativas y de riesgo:

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/12.png')
          h3.mb-4.text-center.text-white Cargas críticas
          p.mb-0.text-white Aquellas absolutamente esenciales cuya ausencia compromete la seguridad, salud o comunicación (ejemplo: iluminación básica, cargador de celular, equipos médicos). Estas deben tener la máxima garantía de suministro.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/13.png')
          h3.mb-4.text-center Cargas secundarias
          p.mb-lg-4 Aquellas que mejoran la calidad de vida, pero cuya interrupción no representa un riesgo inmediato (ejemplo: ventilador, licuadora, TV).

    .bg7.p-lg-5.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-lg-0.mb-md-0(src="@/assets/curso/tema3/14.svg")
        .col-lg-11.col-md-9.col-11
          p.mb-0 Esta clasificación ayuda a dimensionar el sistema: se dimensiona el sistema para cubrir las cargas críticas siempre, y las cargas secundarias solo si el recurso y el presupuesto lo permiten.

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Elaboración de la curva de demanda

    p.mb-5(data-aos="fade-left") Una vez que se ha realizado el inventario y se ha calculado la energía diaria (Wh/día) para cada aparato, es necesario entender cuándo se consume esa energía. Esto se logra mediante la elaboración de la curva de demanda o perfil de carga.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Propósito de la curva de demanda

    p.mb-5(data-aos="fade-left") La curva de demanda es la representación gráfica de la potencia total demandada por la comunidad o el hogar a lo largo de un ciclo de 24 horas. Sus dos funciones principales son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Identificar el pico de demanda (potencia máxima)")
            .col-lg-12
              p.mb-0 Determinar la potencia máxima instantánea (W) que el sistema debe ser capaz de suministrar en cualquier momento. Este valor es crítico para dimensionar el inversor y asegurar que no haya sobrecargas.
          .row.align-items-center(titulo="Evaluar la curva de uso (gestión)")
            .col-lg-12
              p.mb-0 Proporciona información visual sobre los patrones de consumo. Permite al gestor del proyecto trabajar con la comunidad para desplazar cargas (gestión de la demanda) y hacer un uso más eficiente de la energía solar (ejemplo: usar la lavadora durante el día).
          .row.align-items-center(titulo="Proceso de elaboración")
            .col-lg-12
              p.mb-4 La curva se construye con una tabla de datos donde las columnas representan las horas del día y las filas, los aparatos eléctricos:
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span a
                  p.mb-0 #[b Tabulación horaria:] se registra la potencia (P) de cada aparato únicamente en las horas del día (T) en que se utiliza.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span b
                  p.mb-0 #[b Suma de potencias:] para cada intervalo de tiempo (generalmente por hora), se suman las potencias de todos los aparatos que están funcionando simultáneamente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span c
                  p.mb-0 #[b Representación gráfica:] se grafican los valores de potencia total (eje Y, en vatios) contra las horas del día (eje X).
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/15.png')

    p.mb-5(data-aos="fade-left") Análisis de la curva de demanda y dimensionamiento energético del sistema:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Parámetro crítico, potencia máxima instantánea (Ppico)
                p.mb-4 El punto más alto de la curva de demanda corresponde a la potencia Máxima Instantánea (Ppico). Este valor representa el mayor nivel de potencia requerido en un momento específico del día y, en contextos rurales, suele presentarse en horas de la tarde y noche, generalmente entre las 6:00 p. m. y las 9:00 p. m., cuando se encienden las luminarias y se utilizan equipos como televisores o electrodomésticos asociados a la preparación de alimentos.
              .col-lg-5.col-md-8.col-10
                img.mb-0(src="@/assets/curso/tema3/16.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 Impacto de la Ppico en el dimensionamiento del inversor
                p.mb-4 La potencia máxima instantánea tiene una incidencia directa en la selección del inversor. Este equipo debe contar con una capacidad nominal igual o superior a la Ppico estimada, además de incorporar un margen adicional para soportar picos de arranque de ciertos equipos, como motores de refrigeración. Un inversor subdimensionado puede generar fallas, apagados inesperados o interrupciones del servicio en los momentos de mayor demanda.
              .col-lg-5.col-md-8.col-10
                img.mb-0(src="@/assets/curso/tema3/17.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 De la potencia al consumo energético diario
                p.mb-4 La energía total consumida durante el día se obtiene a partir del área bajo la curva de demanda. Este valor resulta de la suma de las potencias registradas en cada intervalo de tiempo, multiplicadas por la duración del mismo, que normalmente es de una hora. Este procedimiento permite calcular la demanda energética diaria total, expresada en Wh/día, y validar los resultados obtenidos mediante el cálculo individual del consumo de los aparatos.
              .col-lg-5.col-md-8.col-10
                img.mb-0(src="@/assets/curso/tema3/18.png")
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .titu
      .col.ps-lg-0
        .sub.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Ejemplo práctico: cálculo de la demanda energética diaria

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1.col-md-2.col-4
        img.mb-4.mb-lg-0(src="@/assets/curso/tema3/19.svg")
      .col-lg-11.col-md-10
        p.mb-0 Como aplicación de los conceptos anteriores, se desarrolla un estudio de caso correspondiente al hogar rural “La Esperanza”. En este escenario se realiza un diagnóstico socioenergético a una vivienda que solicita la implementación de un Sistema Solar Fotovoltaico Aislado (SHS), con el objetivo de mejorar sus condiciones de vida mediante un acceso confiable y sostenible a la energía eléctrica.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Paso 1. Inventario y clasificación de cargas")
            .col-lg-12
              p.mb-4 Se identifican los siguientes aparatos, sus potencias (medidas) y sus tiempos de uso diario (obtenidos de la encuesta social).
              .titulo-sexto.mb-4
                h5 Tabla 4.
                | Inventario y clasificación de cargas
              .tabla-a.tabla-peq.tab4
                table
                  thead
                    tr
                      th.text-center N.º
                      th Aparato (carga)
                      th Potencia (P) (W)
                      th Tipo de corriente
                      th Tiempo de uso (T) (horas/día)
                  tbody
                    tr
                      td.bgw.text-center #[b 1]
                      td.bgw Bombillos LED (x4)
                      td.bgw 7 (cada uno)
                      td.bgw DC (12V)
                      td.bgw 5
                    tr
                      td.bgr.text-center #[b 2]
                      td.bgr Radio/cargador USB
                      td.bgr 10
                      td.bgr DC (12V)
                      td.bgr 6
                    tr
                      td.bgw.text-center #[b 3]
                      td.bgw Televisor LED 32"
                      td.bgw 50
                      td.bgw AC (120V)
                      td.bgw 3
                    tr
                      td.bgr.text-center #[b 4]
                      td.bgr Nevera eficiente
                      td.bgr 100
                      td.bgr AC (120V)
                      td.bgr 8 (tiempo de operación)
                    tr
                      td.bgw.text-center #[b 5]
                      td.bgw Licuadora
                      td.bgw 300
                      td.bgw AC (120V)
                      td.bgw 0.25 (15 minutos)
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Paso 2. Cálculo de la energía diaria (ediaria)")
            .col-lg-12
              p.mb-4 Se aplica la fórmula fundamental a cada carga.
              .titulo-sexto.mb-4
                h5 Tabla 5.
                | Cálculo de la energía diaria
              .tabla-a.tabla-peq.tab5
                table
                  thead
                    tr
                      th.text-center N.º
                      th Aparato
                      th P (W)
                      th T (h/día)
                      th Ediaria (Wh/día)
                  tbody
                    tr
                      td.bgw.text-center #[b 1]
                      td.bgw Iluminación (4x7W)
                      td.bgw 28
                      td.bgw 5
                      td.bgw 28x 5= 140
                    tr
                      td.bgr.text-center #[b 2]
                      td.bgr Radio/cargador
                      td.bgr 10
                      td.bgr 6
                      td.bgr 10 x 6 = 60
                    tr
                      td.bgw.text-center #[b 3]
                      td.bgw Televisor
                      td.bgw 50
                      td.bgw 3
                      td.bgw 50 x 3 = 150
                    tr
                      td.bgr.text-center #[b 4]
                      td.bgr Nevera
                      td.bgr 100
                      td.bgr 8
                      td.bgr 100 x 8 = 800
                    tr
                      td.bgw.text-center #[b 5]
                      td.bgw Licuadora
                      td.bgw 300
                      td.bgw 0.25
                      td.bgw 300 x 0.25 = 75
                    tr
                      td
                      td.bgr #[b TOTAL]
                      td.bgr N/A
                      td.bgr N/A
                      td.bgr Ediaria = 1225
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Paso 3. Determinación de la demanda energética total")
            .col-lg-12
              p.mb-0 La demanda energética diaria bruta del hogar “La esperanza” es de 1225 Wh/día.
              p.mb-0 Este valor es la base para el dimensionamiento del sistema.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Paso 4. Identificación de la potencia máxima instantánea (PPico)")
            .col-lg-12
              p.mb-4.mt-lg-0.mt-5.mt-md-2 Para dimensionar el inversor, se debe identificar la hora de mayor consumo (la PPico). Asumiendo que el pico ocurre a las 7:00 p. m., donde la familia usa simultáneamente:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Iluminación:] 28 W
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Televisor:] 50 W
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Nevera:] 100 W
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Licuadora (en uso para la cena):] 300 W
              .row.justify-content-center.mb-4
                .col-lg-6
                  .bg8.p-4.text-center
                    p.mb-0 PPico = 28 W + 50 W + 100 W + 300 W = 478 W
              p.mb-4 El inversor debe tener una capacidad nominal superior a 478 W (más margen de seguridad y picos de arranque).
              p.mb-4 #[b Conclusión del ejemplo]
              p.mb-4 Para el hogar “La esperanza”, el sistema FV aislado debe ser diseñado para:
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span a
                  p.mb-0 #[b Energía diaria requerida:] mínimo 1225 Wh/día (a lo que se sumarán pérdidas de eficiencia).
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span b
                  p.mb-0 #[b Potencia máxima del inversor:] mínimo 478 W (más margen de seguridad).

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
