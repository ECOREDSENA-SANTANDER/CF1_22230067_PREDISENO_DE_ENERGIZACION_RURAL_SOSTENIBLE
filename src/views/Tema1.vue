<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de energización rural sostenible y zonas no interconectadas
      
    .bl1(data-aos="fade-right") 
      .bloque-texto-a.color-acento-contenido.p-lg-5.p-4.mb-5
        .row.m-0.align-items-center.justify-content-center  
          .col-lg-8.mb-0.col-texto
            .bloque-texto-a__texto.p-lg-5.p-4
              p.mb-0(data-aos="fade-left") El estudio de los fundamentos de la energización rural sostenible y de las zonas no interconectadas permite comprender los principios que orientan el acceso a la energía en territorios rurales que no cuentan con conexión al sistema interconectado nacional. Este enfoque integra criterios técnicos, sociales, económicos y ambientales, con el propósito de garantizar soluciones energéticas confiables, eficientes y sostenibles en el tiempo. Asimismo, considera las particularidades geográficas, demográficas y culturales de las comunidades rurales, reconociendo la energía como un factor clave para el desarrollo social, productivo y la mejora de la calidad de vida.
          .col-lg-4.col-md-6.mb-0
            img.enc.img-a(src='@/assets/curso/tema1/1.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/2.png', alt='')
      .col-lg-7
        .row.justify-content
          .col-lg-2.col-md-2
            img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/3.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 En este tema se analizan las diferentes formas en que la energía se manifiesta y se utiliza en diversos contextos rurales, así como las fuentes disponibles para su aprovechamiento. La comprensión de esta clasificación resulta esencial para identificar los patrones de consumo energético, caracterizar las necesidades reales de los usuarios y seleccionar de manera adecuada los indicadores de gestión energética. De esta forma, se fortalecen las capacidades para la toma de decisiones informadas y la formulación de proyectos de energización rural alineados con criterios de sostenibilidad y eficiencia.

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Pobreza energética
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right") 
      .col-lg-5
        .bg2.p-4.mb-lg-0.mb-4
          p.mb-0 La pobreza energética es un fenómeno de carácter multidimensional que trasciende la simple ausencia de conexión a la red eléctrica. Se define como la condición en la cual los hogares o las comunidades no logran acceder de manera adecuada a los servicios energéticos esenciales, tales como la iluminación, la cocción limpia, la calefacción o refrigeración y el suministro de energía para el uso de dispositivos, bajo criterios de seguridad, asequibilidad y sostenibilidad.
      .col-lg-3.col-md-7.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema1/4.svg', alt='')
      .col-lg-4
        img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema1/5.svg', alt='')
        p.mb-0 En el contexto colombiano, la pobreza energética se manifiesta de forma particular en las Zonas No Interconectadas (ZNI), donde las limitaciones de acceso, calidad y continuidad del servicio energético afectan de manera directa las condiciones de vida, el desarrollo social y las oportunidades productivas de las comunidades rurales.
    
    p.mb-5(data-aos="fade-left") En el contexto colombiano, la pobreza energética se manifiesta principalmente en dos formas en las ZNI:
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-0(data-aos="fade-right") 
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/6.png')
          h3.mb-4.text-center.text-white Falta de acceso
          p.mb-0.text-white Comunidades que no tienen ningún servicio eléctrico formal y dependen de velas, pilas o generadores esporádicos.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/7.png')
          h3.mb-4.text-center Acceso de baja calidad
          p.mb-lg-4 Comunidades con servicio eléctrico limitado a pocas horas al día (ejemplo: 8 a 12 horas, a menudo por generadores diésel), lo que impide actividades productivas nocturnas o el uso de equipos esenciales.

    .row.fondo1.p-4.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            .titulo-sexto.mb-4
              h5 Figura 1. 
              | Usuario rural sin acceso a energía eléctrica
            img(src='@/assets/curso/tema1/8.png', alt='Usuario rural en una vivienda iluminada únicamente por velas, lo que refleja la falta de acceso a energía eléctrica en entornos rurales dispersos.')
    
    p.mb-5(data-aos="fade-right") La persistencia de la pobreza energética en las áreas rurales y dispersas de Colombia se debe a causas estructurales interrelacionadas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Geografía y dispersión")
            .col-lg-12
              p.mb-0 La baja densidad de población en zonas montañosas o selváticas hace que el costo de la extensión de la red tradicional sea prohibitivo.
          .row.align-items-center(titulo="Costos operativos elevados")
            .col-lg-12
              p.mb-0 La dependencia del diésel subsidiado en los sistemas existentes de ZNI implica altos costos logísticos (transporte de combustible) y de mantenimiento, lo que presiona el presupuesto nacional y limita la expansión.
          .row.align-items-center(titulo="Barreras socioeconómicas")
            .col-lg-12
              p.mb-0 La falta de ingresos estables y la informalidad en las comunidades rurales dificultan la implementación de esquemas de pago o modelos de gestión comunitaria sólidos para proyectos de energía.
          .row.align-items-center(titulo="Deficiencia en la planificación")
            .col-lg-12
              p.mb-0 Históricamente, la planificación se centró en la cobertura del SIN, relegando a las ZNI a soluciones temporales o ineficientes.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/9.png')

    p.mb-5(data-aos="fade-right") La falta de acceso a energía de calidad actúa como un freno al desarrollo, perpetuando el ciclo de la pobreza.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Consecuencias socioeconómicas de la pobreza energética
        .tabla-a.tab1
          table
            thead
              tr
                th Sector
                th Impacto de la pobreza energética
            tbody
              tr
                td #[b Salud]
                td Uso de combustibles sólidos (leña, carbón) para cocinar, causando enfermedades respiratorias crónicas. Falta de refrigeración para vacunas y medicamentos.
              tr
                td.bgr #[b Educación]
                td.bgr Limitación del tiempo de estudio después del anochecer. Imposibilidad de usar computadores o acceder a internet, ampliando la brecha digital.
              tr
                td #[b Economía]
                td Imposibilidad de establecer negocios productivos (ejemplo: talleres, tiendas de refrigerados) que requieran energía 24/7. El alto costo de la energía diésel erosiona las ganancias.
              tr
                td.bgr #[b Seguridad]
                td.bgr Falta de alumbrado público que afecta la seguridad personal y la cohesión comunitaria.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/10.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2
            img.img-a.img-t.mb-lg-0.mb-4.mb-md-0(src='@/assets/curso/tema1/11.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 El programa de energización rural sostenible se justifica plenamente como la respuesta directa y estratégica a este problema. La solución es el prediseño y la estructuración de proyectos con FNCER porque:
        .bg5.p-4.p-lg-5
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Son escalables:] se adaptan a la pequeña escala de las comunidades dispersas (sistemas aislados o microrredes).
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Son sostenibles:] reducen la dependencia de combustibles fósiles, disminuyendo costos operativos y emisiones.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Permiten la viabilidad 24/7:] los sistemas híbridos y fotovoltaicos con baterías son la única opción técnica para garantizar un servicio continuo, rompiendo la restricción del servicio limitado.
    
    p.mb-5(data-aos="fade-left") Formar personas capaces de diagnosticar y estructurar estas soluciones es el primer paso para erradicar la pobreza energética en Colombia.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg6.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="<em>Podcast</em>: hablemos de energización rural y pobreza energética"
                :audio="require('@/assets/actividad/audio/Podcast_CF1_22230067_Prediseno_de_energizacion_rural_sostenible.mp3')"
            )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                
    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Marco Institucional Colombiano (ZNI)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/13.png')})`}", alt='Imagen decorativa.'
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El éxito de un proyecto de Energización Rural Sostenible (ERS) en Colombia depende, en gran medida, de su adecuada articulación con el andamiaje institucional y financiero diseñado específicamente para las Zonas No Interconectadas (ZNI). En este contexto, los profesionales formados en este programa deben conocer y comprender los roles de las entidades que intervienen en la planificación, regulación, financiación y supervisión de los proyectos, con el fin de gestionar de manera efectiva la viabilidad técnica, económica, social y ambiental de sus propuestas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 El Instituto de Planificación y Promoción de Soluciones Energéticas (IPSE)
                p.mb-4 Constituye la entidad central dentro del ecosistema de las ZNI. Su función principal es planificar, fomentar, promover y cofinanciar proyectos orientados a garantizar el acceso a la energía en las áreas no interconectadas del país.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Rol en el programa:] el IPSE actúa como el principal receptor y evaluador de las propuestas de proyectos. La prefactibilidad integral que se desarrolla en el proceso formativo debe cumplir con los lineamientos metodológicos y técnicos establecidos por esta entidad para la elegibilidad y la cofinanciación. El IPSE prioriza proyectos técnicamente sólidos, ambientalmente responsables y con modelos de gestión social que aseguren su sostenibilidad en el tiempo.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/14.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 El Fondo de Apoyo Financiero para la Energización de las ZNI (FAZNI)
                p.mb-4 Es el principal instrumento financiero mediante el cual se canalizan recursos del Presupuesto General de la Nación para la cofinanciación de inversiones en infraestructura eléctrica en las ZNI.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Rol en el programa:] la existencia del FAZNI resalta la importancia de la formalización de los proyectos. La prefactibilidad no se limita a un documento técnico, sino que constituye la herramienta fundamental que permite a los gestores, como empresas, cooperativas o entidades territoriales, postularse para acceder a estos recursos. Un proyecto bien estructurado, con viabilidades claramente definidas, presenta una ventaja significativa para la obtención del apoyo financiero del FAZNI.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/15.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 La Comisión de Regulación de Energía y Gas (CREG)
                p.mb-4 Es el organismo regulador encargado de establecer las normas relacionadas con tarifas, calidad del servicio y condiciones comerciales del sector energético. Si bien su ámbito principal es el Sistema Interconectado Nacional (SIN), también expide regulaciones específicas aplicables a las ZNI.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Rol en el programa:] la CREG incide de manera directa en la viabilidad técnica y económica de los proyectos de ERS. El prediseño debe considerar los límites de potencia máxima y los esquemas tarifarios definidos para las ZNI. El conocimiento y la correcta aplicación de esta normativa resultan fundamentales para garantizar que el modelo de operación propuesto en la prefactibilidad se ajuste al marco legal vigente en Colombia.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/16.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 La Superintendencia de Servicios Públicos Domiciliarios (Superservicios)
                p.mb-4 Ejerce funciones de inspección, vigilancia y control sobre las empresas y operadores responsables de la prestación del servicio público de energía eléctrica en las ZNI.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Rol en el programa:] esta entidad se relaciona directamente con la competencia orientada al control de los sistemas de gestión. En este sentido, la prefactibilidad debe proponer un modelo de gestión sólido, transparente y coherente, dado que dicho modelo será objeto de seguimiento por parte de la Superservicios. Un diseño inadecuado del modelo de gestión puede derivar en sanciones regulatorias o en dificultades operativas que comprometan la sostenibilidad del proyecto a largo plazo.
              .col-lg-5.col-md-8.col-10
                img.mb-0(alt="" src="@/assets/curso/tema1/17.png")

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-6
        .titulo-sexto.mb-4
          h5 Figura 2. 
          | Estructura institucional del sector eléctrico colombiano
        img(src='@/assets/curso/tema1/18.png', alt='Diagrama de la estructura institucional del sector eléctrico colombiano, que muestra las funciones y entidades responsables de la dirección, planeación, regulación, operación y control del sistema.')
        figcaption Fuente: Tomada del Ministerio de Minas y Energía (s. f.). 

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Introducción a las FNCER

    .bg7.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-lg-0(alt="" src="@/assets/curso/tema1/19.svg")
        .col-lg-11.col-md-9.col-11
          p.mb-0 Las Fuentes No Convencionales de Energía Renovable (FNCER) son aquellas que provienen de recursos que no se agotan y cuya explotación tecnológica y comercial es reciente o está en desarrollo. En el contexto de la Energización Rural Sostenible (ERS), las FNCER son la alternativa técnica más viable, eficiente y limpia para las Zonas No Interconectadas (ZNI).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Solar Fotovoltaica (FV)")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-4 Solar Fotovoltaica (FV)
                p.mb-4 La energía solar fotovoltaica es el pilar de la electrificación rural aislada, debido a su modularidad y facilidad de instalación en áreas dispersas.
                ol.lista-ol--cuadro
                  li.d-flex.mb-4
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0 #[b Principio de funcionamiento:] se basa en el efecto fotovoltaico, donde las celdas de silicio absorben fotones de la luz solar y liberan electrones, generando corriente continua (DC).
                  li.d-flex.mb-3
                    .lista-ol--cuadro__vineta
                      span 2
                    p.mb-0 #[b Ventajas en ZNI:]
                  ul.lista-ul.mb-4.mx-4
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Modularidad:] los sistemas pueden ser escalados fácilmente, desde pequeños sistemas domésticos (SHS) hasta micro redes.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Bajo mantenimiento:] una vez instalados, los módulos fotovoltaicos requieren un mantenimiento mínimo en comparación con los generadores diésel.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Costo:] la drástica reducción global en el precio de los paneles FV ha hecho que esta tecnología sea económicamente competitiva para ZNI.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 3
                    p.mb-0 #[b Relevancia para el prediseño:] el estudiante debe dominar el concepto de recurso solar y las Horas Solares Pico (HSP), que son datos críticos para determinar el tamaño (cantidad de módulos) necesario para cubrir la demanda de diseño (Wh/día).
          .tarjeta.color-a.p-4(titulo="Sistemas híbridos (FV + generador)")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-4 Sistemas híbridos (FV + generador)
                p.mb-4 En muchos casos, depender únicamente de la energía solar FV puede ser insuficiente, especialmente para cargas elevadas o en períodos largos de mal tiempo. Aquí entran los sistemas híbridos.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Definición:] un sistema híbrido combina dos o más fuentes de energía (una de ellas renovable) para suministrar electricidad, siendo la combinación más común solar FV y un generador diésel.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Función en ERS:] el componente FV se utiliza como fuente primaria durante el día, mientras que el generador diésel actúa como soporte o #[em "back up"] para cargar las baterías cuando el recurso solar es insuficiente o cuando la demanda supera las capacidades del sistema.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Ventaja operacional:] los sistemas híbridos reducen el consumo de diésel, disminuyendo los costos logísticos y operativos, a la vez que mejoran la confiabilidad del sistema, un factor esencial para proyectos financiados que buscan asegurar la continuidad del servicio.
          .tarjeta.color-a.p-4(titulo="Otras FNCER relevantes")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h4.mb-4 Otras FNCER relevantes
                p.mb-4 Aunque menos comunes que la solar FV en el contexto colombiano de ERS (debido a la dificultad logística o la especificidad del recurso), es importante conocer otras opciones:
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Eólica (eólica de pequeña escala):] viable solo en zonas rurales con vientos constantes y apropiados. Requiere una evaluación cuidadosa del recurso eólico local.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Pequeñas y micro centrales hidroeléctricas (PCH):] ideales para comunidades cercanas a cursos de agua con caudales estables. Son fuentes de energía firme (24/7), pero requieren una inversión inicial y un impacto ambiental mayor que el FV.

    p.mb-0(data-aos="fade-right") El conocimiento de estas tecnologías permite al futuro profesional identificar la solución FNCER más apropiada para la comunidad, un paso crucial en la fase de diagnóstico y prediseño del proyecto.

</template>

<script>
export default {
  name: 'Tema1',
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
