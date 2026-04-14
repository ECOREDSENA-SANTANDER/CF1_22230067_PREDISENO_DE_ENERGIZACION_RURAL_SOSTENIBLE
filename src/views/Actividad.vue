<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico social y energético de usuario rural.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se define la “pobreza energética” según el contenido abordado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es exclusivamente la falta de conexión física a la red eléctrica nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se refiere únicamente a la incapacidad económica de pagar la factura de servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es la condición multidimensional donde no se accede a servicios energéticos esenciales bajo criterios de seguridad, asequibilidad y sostenibilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es la preferencia de las comunidades rurales por utilizar fuentes de energía tradicionales como la leña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza el “acceso de baja calidad” en las Zonas No Interconectadas (ZNI)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La dependencia total de velas y pilas sin ningún tipo de generador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contar con servicio eléctrico limitado a pocas horas al día, usualmente mediante generadores diésel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Tener conexión al Sistema interconectado nacional pero con variaciones de voltaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El uso de paneles solares que solo funcionan durante las horas de sol intenso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la entidad central encargada de planificar, fomentar y cofinanciar proyectos en las ZNI de Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Comisión de Regulación de Energía y Gas (CREG).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Superintendencia de Servicios Públicos Domiciliarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Fondo de Apoyo Financiero para la Energización de las ZNI (FAZNI).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El Instituto de Planificación y Promoción de Soluciones Energéticas (IPSE).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué unidad de medida es fundamental para determinar el tamaño del banco de baterías y los módulos solares?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vatio (W).', esCorrecta: false },
            { id: 'b', texto: 'Voltio (V).', esCorrecta: false },
            {
              id: 'c',
              texto: 'Vatio-hora por día (Wh/día).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Amperio (A).', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una de las causas estructurales que hace prohibitiva la extensión de la red tradicional en zonas rurales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La geografía accidentada y la baja densidad de población (dispersión).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La falta de interés de las empresas privadas en el desarrollo rural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La prohibición legal de llevar cables a zonas selváticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El uso excesivo de electrodomésticos de alta potencia por parte de los campesinos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'En el diagnóstico social, ¿qué se busca identificar mediante el “mapeo de actores clave”?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número exacto de bombillos por cada vivienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nivel de radiación solar en los techos de las casas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los individuos y organizaciones locales, como las JAC, que gestionarán el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las marcas de electrodomésticos preferidas por la comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función del inversor en un sistema fotovoltaico (FV) aislado?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar la energía generada durante el día para usarla en la noche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir la corriente continua (DC) de las baterías en corriente alterna (AC).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Regular la carga para evitar que las baterías se dañen por sobrecalentamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar la cantidad de horas solares picos disponibles en la zona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es la “Potencia Máxima Instantánea” (Ppico)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El mayor nivel de potencia requerido en un momento específico del día cuando se usan varios equipos a la vez.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La suma total de energía consumida por un hogar durante un mes completo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad máxima que tienen los paneles solares de producir energía bajo la lluvia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La velocidad a la que se descargan las baterías durante la noche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Por qué se considera que la apropiación comunitaria es un factor de viabilidad?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite que el gobierno gaste menos dinero en materiales de construcción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque asegura que la comunidad participe en el cuidado, mantenimiento y gestión del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque exime a las entidades de cumplir con las normas técnicas de la CREG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque garantiza que los paneles solares duren más de 50 años sin revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja técnica ofrecen los sistemas híbridos (FV + Diésel)?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminan por completo el uso de baterías en cualquier condición climática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Son mucho más económicos de instalar que un sistema simple de paneles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejoran la confiabilidad del sistema al contar con un soporte cuando el recurso solar es insuficiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Permiten que cualquier electrodoméstico funcione sin necesidad de cables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es el riesgo de un diagnóstico de demanda subestimado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el sistema sea demasiado costoso para la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El colapso del sistema por descarga total de baterías e insatisfacción del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que los paneles solares se quemen por falta de uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el IPSE no acepte el proyecto por ser demasiado eficiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué entidad define los esquemas tarifarios y las normas de calidad del servicio energético?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El IPSE.', esCorrecta: false },
            { id: 'b', texto: 'La Superservicios.', esCorrecta: false },
            { id: 'c', texto: 'La CREG.', esCorrecta: true },
            { id: 'd', texto: 'El Ministerio de Salud', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En la fórmula de energía ($E = P \\times T$), ¿qué representa la variable “P”?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La potencia nominal del aparato, generalmente expresada en Vatios (W).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El precio del servicio energético por cada kilovatio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El peso total de los paneles solares instalados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La presión atmosférica que afecta a las turbinas eólicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es un impacto directo de la pobreza energética en el sector educación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aumento de los costos de matrícula en escuelas rurales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La limitación del tiempo de estudio nocturno y la brecha digital por falta de equipos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La falta de uniformes escolares para los niños de las comunidades dispersas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La imposibilidad de realizar actividades físicas durante el día.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué significa que las Fuentes No Convencionales de Energía Renovable (FNCER) sean “escalables”?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que se pueden instalar en lugares muy altos como montañas o edificios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que su precio aumenta cada año según el mercado internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que se pueden adaptar desde pequeñas soluciones individuales hasta grandes microrredes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que requieren escaleras especiales para su mantenimiento preventivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué instrumento financiero canaliza recursos del Presupuesto General para infraestructura eléctrica en las ZNI?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El Banco Mundial.', esCorrecta: false },
            { id: 'b', texto: 'El FAZNI.', esCorrecta: true },
            { id: 'c', texto: 'La Superservicios.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El IVA recaudado en las ciudades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Para qué se utilizan los “talleres participativos” en la metodología de diagnóstico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para validar hallazgos y gestionar expectativas de la comunidad sobre el uso de la energía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para enseñar a los niños de la comunidad a fabricar sus propios paneles solares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para recolectar dinero destinado a la compra de generadores diésel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para decidir qué marca de inversor comprar sin consultar a los ingenieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué aparato se clasifica comúnmente como “carga de corriente continua (DC)” en sistemas rurales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una licuadora estándar de cocina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un televisor de 50 pulgadas de última generación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Iluminación LED de bajo consumo diseñada para 12V.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una herramienta eléctrica como un taladro de alta potencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál es el objetivo de clasificar las cargas por prioridad?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cobrar más dinero a quienes usen los aparatos menos importantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decidir qué vecinos recibirán energía y cuáles no.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asegurar el suministro para necesidades críticas como salud o comunicación ante limitaciones de recurso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar que los usuarios compren electrodomésticos en el mercado local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué factor es crítico para el diseño técnico y se define como la cantidad de sol disponible?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los vatios instantáneos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Las Horas Solares Pico (HSP).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nivel de humedad relativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La densidad de la población por kilómetro cuadrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el Diagnóstico social y energético de usuario rural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo Diagnóstico social y energético de usuario rural.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
