<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodología de diagnóstico social
    
    .row.mb-5(data-aos="fade-right")          
      .col-lg-12
        img(src='@/assets/curso/tema2/1.png' alt='AvatarTop')

    p.mb-5(data-aos="fade-left") La integración de la dimensión social constituye un factor determinante que diferencia a un proyecto de Energización Rural Sostenible (ERS) exitoso de aquel que se limita a cumplir con criterios de viabilidad técnica. El diagnóstico social permite garantizar que la solución energética propuesta sea culturalmente pertinente, económicamente accesible para los usuarios y respaldada por una organización comunitaria con capacidades para la operación y gestión del sistema en el largo plazo.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png', alt='')
      .col-lg-7
        .bg5.p-4
          .row.justify-content
            .col-lg-2.col-md-2.mt-lg-1
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema2/3.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0.mb-lg-1 Adicionalmente, el diagnóstico social facilita la identificación de dinámicas comunitarias, liderazgos locales, prácticas productivas y condiciones socioeconómicas que inciden directamente en el uso y apropiación de la energía. Esta información resulta fundamental para diseñar modelos de gestión participativos, promover el sentido de corresponsabilidad y prevenir riesgos asociados al abandono, uso inadecuado o deterioro de la infraestructura. De esta manera, la dimensión social se consolida como un eje transversal que fortalece la sostenibilidad, la gobernanza y el impacto positivo de los proyectos de energización rural.

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Apropiación comunitaria como factor de viabilidad
    
    .row.justify-content-center.align-items-end.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-9
        p.mb-lg-5.mb-4 La apropiación comunitaria es el sentido de pertenencia y responsabilidad que la comunidad desarrolla hacia el sistema energético. No es solo un requisito; es la garantía de vida útil del proyecto.
        .row.justify-content-center.align-items-end.mb-0
          .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/4.png', alt='')
          .col-lg-7
            .bg5.p-4.p-lg-5
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Riesgo de fracaso:] históricamente, muchos proyectos de electrificación rural han fracasado no por fallas técnicas, sino por falta de gestión, vandalismo o negligencia, derivados de una baja apropiación social.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Gestión del mantenimiento:] la apropiación asegura que la comunidad participe activamente en el mantenimiento preventivo, el pago de tarifas (si aplica) y el cuidado general de la infraestructura
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/5.png', alt='')

    .row.fondo3.p-4.mb-5(data-aos="fade-right")
      .col-lg-12
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            .titulo-sexto.mb-4
              h5 Figura 3. 
              | Apropiación cultural de proyectos energéticos
            img.mb-3(src='@/assets/curso/tema2/6.png', alt='Participación activa de la comunidad rural en la instalación de un sistema fotovoltaico, reflejando la apropiación cultural y el compromiso local con los proyectos energéticos.')
            figcaption Fuente: Redacción El País (2023).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema2/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Técnicas de levantamiento social
    
    p.mb-5(data-aos="fade-right") El diagnóstico debe ser participativo y metodológico para obtener datos cualitativos esenciales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario.mb-0
          .bg8.p-lg-5.p-4(titulo="Encuestas socioenergéticas detalladas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema2/7.png', alt='')
                  .col-lg-7
                    p.mb-4 Mås allá de preguntar sobre la cantidad de bombillos, las encuestas deben incluir:
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Capacidad de pago:] identificar la disposición y capacidad económica de los usuarios para asumir pequeñas cuotas de mantenimiento o recaudo.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Roles de género:] determinar quién gestiona la energía y los electrodomésticos en el hogar, para asegurar que la capacitación y los modelos de gestión sean inclusivos.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Percepción de la solución:] evaluar si la comunidad prefiere soluciones individuales (SHS) o colectivas (micro red), y si tienen alguna reserva cultural o ambiental.
          .bg8.p-lg-5.p-4(titulo="Mapeo de actores clave")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema2/8.png', alt='')
                  .col-lg-7
                    p.mb-4 Se identifican los individuos y organizaciones locales que serán los gestores y fiscalizadores del proyecto: 
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Juntas de Acción Comunal (JAC):] a menudo son el vehículo legal y social para el manejo de los sistemas.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Líderes naturales y cabildos (en zonas indígenas):] su aval y participación son imprescindibles para la legitimidad del proyecto.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Entidades de apoyo locales:] identificar si hay organizaciones locales (ONGs, asociaciones productivas) que puedan apoyar la capacitación.
          .bg8.p-lg-5.p-4(titulo="Talleres participativos")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema2/9.png', alt='')
                  .col-lg-7
                    p.mb-4 Se utilizan herramientas para obtener información de forma colaborativa y validar los hallazgos:
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Diagrama de flujo del consumo:] la comunidad describe cuándo y cómo usa la energía (ejemplo: el pico de consumo es a las 6.00 p. m. cuando llega la novela).
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Validación de la solución:] presentar a la comunidad la solución predimensionada (ejemplo: puede usar una nevera pequeña, pero no una lavadora) para gestionar expectativas desde el inicio y evitar insatisfacción posterior.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-8
        p.mb-4 Los datos sociales recopilados se utilizan directamente en la siguiente fase de prefactibilidad para proponer un modelo de gestión operativa viable:
        .bg9.p-4.p-lg-5.mb-4
          .row.justify-content-center.align-items.mb-0
            .col-lg-1.d-none.d-lg-block
              img.img-a.img-t(src='@/assets/curso/tema2/11.svg', alt='')
            .col-lg-11
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Se define la estructura legal (ejemplo: cooperativa vs. operador privado).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Se establecen las normas de uso (ejemplo: prohibición de uso de resistencias de alto consumo).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Se diseña el plan de capacitación y transferencia tecnológica, asegurando que la comunidad adquiera la competencia técnica básica para operar el sistema.
        p.mb-lg-0.mb-4 El dominio de esta metodología garantiza que la solución técnica se fusione con la realidad socioeconómica de los usuarios, maximizando la probabilidad de que el proyecto ERS sea un éxito sostenible.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema2/10.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
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
