function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const allQuestions = [
    {
        question: "El no acatar lo indicado en una señal de tránsito, ¿Es una infracción?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "En un semáforo con giro a la derecha o izquierda, si el conductor tiene el semáforo en verde, al igual que los peatones, ¿Quién tiene la preferencia?",
        image: "imagenes/pre2.png",
        answers: [
            { text: "Los peatones", correct: true },
            { text: "Los vehículos", correct: false },
            { text: "Ambos", correct: false }
        ]
    },
    {
        question: "Cuándo un cruce de vía está regulado por un agente de tránsito, ¿Las señales manuales de éste prevalecen sobre cualquier otra existente, incluso semáforos?",
        answers: [
            { text: "A veces", correct: false },
            { text: "Siempre", correct: true },
            { text: "Nunca", correct: false }
        ]
    },
    {
        question: "¿Una línea continua pintada en la calzada de color blanco o amarillo restringe la circulación vehicular de tal manera que ningún vehículo podrá cruzar como se observa en la imagen?",
        image: "imagenes/pre4.png",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "Una línea discontinua de color amarillo o blanco pintada en la calzada, de acuerdo a la imagen ¿Que indica?",
        image: "imagenes/pre5.png",
        answers: [
            { text: "Permite rebasar o adelantar sobre esta línea, siempre que exista seguridad para hacerlo", correct: true },
            { text: "El conductor no puede realizar maniobras de adelantamiento cuando la línea es discontinua", correct: false },
            { text: "Restringe la circulación vehicular de tal manera que ningún vehículo podrá cruzar esta línea ", correct: false }
        ]
    },
    {
        question: "Cuando vea pintado en la calzada una línea mixta, con la línea continua a la izquierda del conductor, de acuerdo a la imagen ¿Qué indica esta línea?",
        image: "imagenes/pre6.png",
        answers: [
            { text: "Puede realizar maniobras de adelantamiento cuando tiene la línea discontinua a la izquierda del conductor", correct: false },
            { text: "Puede realizar maniobras de adelantamiento cuando tiene la línea discontinua a la izquierda y derecha del conductor", correct: false },
            { text: "El conductor no puede realizar maniobras de adelantamiento cuando tiene la línea continua a su izquierda", correct: true }
        ]
    },
    {
        question: "Cuando ve pintado de color blanco o amarillo en la calzada doble línea continua ¿Qué indica?",
        image: "imagenes/pre7.png",
        answers: [
            { text: "El conductor puede realizar maniobras de adelantamiento cuando tiene doble línea", correct: false },
            { text: "Le permite al conductor rebasar o adelantar, siempre que exista la seguridad de hacerlo", correct: false },
            { text: "Están totalmente prohibidas las maniobras para rebasar o adelantar por cualquiera de los carriles que se transite para evitar choques", correct: true }
        ]
    },
    {
        question: "De acuerdo a la imagen, ¿Qué debe hacer si comparte carril con un ciclista?",
        image: "imagenes/pre8.png",
        answers: [
            { text: "Da prioridad a ciclista en el carril compartido", correct: false },
            { text: "Reduce a velocidad y comparte la vía con el ciclista", correct: false },
            { text: "Ambas", correct: true }
        ]
    },
    {
        question: "¿Esta señal se utiliza para indicar?",
        image: "imagenes/pre9.png",
        answers: [
            { text: "Un solo carril", correct: false },
            { text: "Obligación de los conductores circular solo en la dirección indicada", correct: true },
            { text: "Doble vía", correct: false }
        ]
    },
    {
        question: "De acuerdo a la imagen esta señal indica, No exceder de 30 km/h",
        image: "imagenes/pre10.png",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "De acuerdo a la imagen, ¿esta señal indica prohibido el cambio de carril?",
        image: "imagenes/pre11.png",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿Qué debe hacer cuando usted observa esta señal?",
        image: "imagenes/pre12.png",
        answers: [
            { text: "Pasar la línea de pare y no ceder el paso", correct: false },
            { text: "Detenerse antes de la línea de pare y ceder el paso a todo tránsito", correct: true },
            { text: "Reducir la velocidad y estar preparado para detenerse solamente si hay peligro de colisión con otro vehículo o peatón", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre13.png",
        answers: [
            { text: "Viraje permitido en el sentido de la flecha", correct: false },
            { text: "Viraje prohibido al sentido de la flecha", correct: true },
            { text: "Viraje seguro", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre14.png",
        answers: [
            { text: "No girar en 'U'", correct: true },
            { text: "No virar a la izquierda", correct: false },
            { text: "Tener cuidado con el tráfico que vira", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre15.png",
        answers: [
            { text: "Estacionamiento permitido para camiones", correct: false },
            { text: "Tránsito pesado debe circular por la derecha", correct: true },
            { text: "Circulación solo tránsito pesado", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre16.png",
        answers: [
            { text: "Prohibido circular vehículos pesados", correct: true },
            { text: "Tránsito pesado a la derecha", correct: false },
            { text: "Solo tránsito pesado", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre17.png",
        answers: [
            { text: "Solo tránsito liviano", correct: false },
            { text: "Prohibido doble columna", correct: false },
            { text: "Prohibido adelantar o rebasar", correct: true }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre18.png",
        answers: [
            { text: "Vehículos livianos deben girar a la derecha", correct: false },
            { text: "Vehículos livianos deben mantener su derecha", correct: true },
            { text: "Permitido estacionarse vehículos livianos", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre19.png",
        answers: [
            { text: "Cambio de carril", correct: false },
            { text: "No entre", correct: false },
            { text: "Comienza doble vía, pueden venir vehículos en sentido contrario. Precaución", correct: true }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre20.png",
        answers: [
            { text: "Prohibido estacionarse o detenerse", correct: true },
            { text: "Prohibido estacionarse", correct: false },
            { text: "Permite detenerse por un minuto solamente", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre21.png",
        answers: [
            { text: "Ingreso permitido", correct: false },
            { text: "No entre", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre22.png",
        answers: [
            { text: "Prohibido virar en U o a la izquierda", correct: true },
            { text: "Prohibido virar en U o a la derecha", correct: false },
            { text: "Prohibido virar a la derecha o a la izquierda", correct: false }
        ]
    },
    {
        question: "¿Qué significa está señal?",
        image: "imagenes/pre23.png",
        answers: [
            { text: "Prohibido virar en U o a la izquierda", correct: false },
            { text: "Prohibido tomar la vía sinuosa", correct: false },
            { text: "Prohibido cambio de carril a la izquierda", correct: true }
        ]
    },
    {
        question: "¿Cuáles son las consecuencias de incumplimiento de esta señal (prohibido estacionarse)?",
        image: "imagenes/pre24.png",
        answers: [
            { text: "Sanción con el 10% del salario básico unificado", correct: true },
            { text: "Pena privativa de libertad", correct: false },
            { text: "Retiro de la licencia de conducir.", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre25.png",
        answers: [
            { text: "Permitido estacionar a la izquierda hasta la próxima intersección", correct: false },
            { text: "Prohibido estacionar a la derecha hasta la próxima intersección", correct: false },
            { text: "Prohibido estacionar al lado izquierdo de la señal hasta la próxima intersección.", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre26.png",
        answers: [
            { text: "Estacionar a la derecha hasta la próxima intersección", correct: false },
            { text: "Prohibido estacionar al lado derecho de la señal hasta la próxima intersección", correct: true },
            { text: "Prohibición de estacionar a la izquierda hasta la próxima intersección", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre27.png",
        answers: [
            { text: "Prohibido estacionar a los dos lados de la señal hasta la próxima intersección a izquierda y derecha", correct: true },
            { text: "Estacionar a la derecha hasta la próxima intersección", correct: false },
            { text: "Permitido estacionar en ambos lados de la señal", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre28.png",
        answers: [
            { text: "Estacionamiento tarifado", correct: false },
            { text: "Prohibición de estacionar", correct: false },
            { text: "Estacionamiento permitido", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre29.png",
        answers: [
            { text: "Estacionamiento tarifado durante los días y horarios señalados", correct: true },
            { text: "Estacionamiento tarifado a excepción de los días y horarios definidos", correct: false },
            { text: "Estacionamiento no tarifado", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre30.png",
        answers: [
            { text: "Estacionamiento prohibido para personas con discapacidad", correct: false },
            { text: "Estacionamiento reservado solo para personas con discapacidad", correct: true },
            { text: "Estacionamiento reservado para vehículos grandes", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre31.png",
        answers: [
            { text: "Estacionamiento en paralelo reservado para vehículos grandes", correct: false },
            { text: "Estacionamiento en reservado solo para personas con discapacidad a los lados de la señal", correct: true },
            { text: "Estacionamiento en paralelo prohibido para personas con discapacidad", correct: false }
        ]
    },
    {
        question: "¿Qué debe hacer el conductor de un vehículo particular frente a esta señal?",
        image: "imagenes/pre32.png",
        answers: [
            { text: "Detener o estacionar el vehículo en esta zona", correct: false },
            { text: "Aumentar la velocidad o rebasar al bus", correct: false },
            { text: "Abstenerse de estacionar o detener el vehículo en esta zona", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre33.png",
        answers: [
            { text: "Largo máximo de los vehículos que circulan por esa vía", correct: true },
            { text: "Ancho máximo de los vehículos que circulan por esa vía", correct: false },
            { text: "Ancho de la vía", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre34.png",
        answers: [
            { text: "Circular utilizando luces de estacionamiento", correct: false },
            { text: "Circular con precaución sobre ese carril ya que es compartido con peatones y ciclistas", correct: false },
            { text: "Carril exclusivo para peatones y ciclistas", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre35.png",
        answers: [
            { text: "Que el carril segregado exclusivo para ciclistas y peatones se termina", correct: true },
            { text: "Que el carril segregado exclusivo para ciclistas y peatones se termina e inicia en la siguiente intersección", correct: false },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Qué debe hacer al observar la siguiente señal regulatoria?",
        image: "imagenes/pre36.png",
        answers: [
            { text: "Ceder el paso solo a los peatones", correct: false },
            { text: "Ceder el paso a los conductores, peatones y ciclistas", correct: true },
            { text: "Ceder el paso solo a los conductores", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre37.png",
        answers: [
            { text: "Más adelante vía lateral", correct: false },
            { text: "Más adelante cruce de vías", correct: false },
            { text: "Más adelante intersección en “Y”", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre38.png",
        answers: [
            { text: "Más adelante vire en U", correct: false },
            { text: "Aproximación a redondel", correct: true },
            { text: "Más adelante zona de derrumbes", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre39.png",
        answers: [
            { text: "Más adelante circulación en doble vía (bidireccional)", correct: true },
            { text: "Más adelante circulación en una vía", correct: false },
            { text: "Más adelante vire a la derecha", correct: false }
        ]
    }, 
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre40.png",
        answers: [
            { text: "Más adelante curva abierta hacia el lado que indica la flecha", correct: true },
            { text: "Más adelante curva cerrada hacia la derecha", correct: false },
            { text: "Más adelante curva y contra curva", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre41.png",
        answers: [
            { text: "Más adelante curva pronunciada a la derecha", correct: false },
            { text: "Más adelante curva abierta a la derecha", correct: false },
            { text: "Más adelante curva y contra curva cerrada a la derecha en la dirección señalada", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre42.png",
        answers: [
            { text: "Más adelante curva y contra curva abierta a la izquierda en la dirección señalada", correct: true },
            { text: "Más adelante curva pronunciada a la izquierda", correct: false },
            { text: "Más adelante curva abierta a la izquierda", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre43.png",
        answers: [
            { text: "Más adelante curva y contra curva cerradas a la izquierda", correct: false },
            { text: "Más adelante curva pronunciada a la izquierda", correct: false },
            { text: "Más adelante vía sinuosa a la izquierda", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre44.png",
        answers: [
            { text: "Prohibido virar en 'U' a la izquierda", correct: false },
            { text: "Más adelante curva en 'U' a la izquierda", correct: true },
            { text: "Prohibido virar en 'U' a la derecha", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre45.png",
        answers: [
            { text: "Más adelante bandas transversales de alerta o de retumbo", correct: true },
            { text: "Más adelante agua en la vía", correct: false },
            { text: "Más adelante hondonada", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre46.png",
        answers: [
            { text: "Más adelante calzada irregular", correct: false },
            { text: "Más adelante reductor de velocidad", correct: true },
            { text: "Más adelante hondonada", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre47.png",
        answers: [
            { text: "Más adelante pendiente peligrosa", correct: false },
            { text: "Más adelante angostamiento en la vía", correct: true },
            { text: "Más adelante puente angosto", correct: false }
        ]
    },
    {
        question: "¿Cómo debe actuar un conductor frente a la señal de curva cerrada?",
        image: "imagenes/pre48.png",
        answers: [
            { text: "Acelerar", correct: false },
            { text: "Disminuir la velocidad antes de ingresar a la curva", correct: true },
            { text: "Mantener la misma velocidad en la que se encuentra circulando", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre49.png",
        answers: [
            { text: "Aproximación a una curva abierta a la derecha", correct: false },
            { text: "Aproximación a una contra curva a la derecha", correct: false },
            { text: "Aproximación a una curva cerrada en la dirección señalada", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre50.png",
        answers: [
            { text: "Aproximación a un cruce de vías al virar a la izquierda", correct: false },
            { text: "Aproximación a una curva cerrada a la izquierda", correct: false },
            { text: "Aproximación a una vía lateral izquierda o derecha en curva", correct: true }
        ]
    },
    {
        question: "Esta señal se utiliza para indicar:",
        image: "imagenes/pre51.png",
        answers: [
            { text: "La ubicación y el lugar por el cual el flujo de tránsito debe continuar la calzada normal", correct: false },
            { text: "Que el desvío se ha terminado y que el flujo del tránsito regresa por el desvío a la ruta original", correct: false },
            { text: "Dirección y lugar por el cual el flujo de tránsito debe dejar la calzada normal y desviarse por otras calles", correct: true }
        ]
    },
    {
        question: "¿Qué indica esta señal de tránsito?",
        image: "imagenes/pre52.png",
        answers: [
            { text: "Señal con lugar de destino y mensaje de acciones en palabras", correct: false },
            { text: "Señal con código de ruta, lugar de destino y mensaje de salida con distancia en kilómetros", correct: false },
            { text: "Señal con lugar de destino y flecha de asignación de carril", correct: true }
        ]
    },
    {
        question: "¿Qué le indica la siguiente señal?",
        image: "imagenes/pre53.png",
        answers: [
            { text: "La velocidad máxima en una zona donde se encuentran centros educativos", correct: false },
            { text: "Zona Escolar", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Qué le indica la siguiente señal?",
        image: "imagenes/pre54.png",
        answers: [
            { text: "Reducir la velocidad y conducir con precaución", correct: false },
            { text: "La velocidad máxima de circulación en una zona escolar", correct: false },
            { text: "Ambas", correct: true }
        ]
    },
    {
        question: "¿Qué le indica la siguiente señal?",
        image: "imagenes/pre55.png",
        answers: [
            { text: "El inicio del paradero de una zona escolar", correct: true },
            { text: "Parada de vehículos pesados", correct: false },
            { text: "Zona permitida para familiares de estudiantes", correct: false }
        ]
    },
    {
        question: "La luz amarilla intermitente en un semáforo significa:",
        answers: [
            { text: "Parar siempre y cuando lo pueda hacer con seguridad", correct: false },
            { text: "Disminuir la velocidad y atravesar la intersección con mucha precaución", correct: true },
            { text: "Parar, ceda el paso a todo el tráfico que cruza antes de atravesar la intersección", correct: false }
        ]
    },
    {
        question: "¿Las instrucciones del agente de tránsito prevalecen sobre las señales de tránsito aunque el semáforo se encuentre en luz roja?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿En cuál de las siguientes luces de semáforo debería siempre detener su vehículo?",
        answers: [
            { text: "Luces rojas y luces rojas intermitentes", correct: true },
            { text: "Luces rojas continuas, flechas rojas y luces amarillas intermitentes ", correct: false },
            { text: "Luces rojas continuas, luces rojas intermitentes y luces amarillas", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre59.png",
        answers: [
            { text: "Motocicletas deben girar a la derecha", correct: false },
            { text: "Permitido estacionarse motocicletas", correct: false },
            { text: "Motocicletas deben mantenerse en el carril derecho", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre60.png",
        answers: [
            { text: "Prohibida la circulación de vehículos pesados", correct: false },
            { text: "Prohibido el ingreso o circulación de vehículos motorizados", correct: true },
            { text: "Prohibida la circulación de buses", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre61.png",
        answers: [
            { text: "Más adelante redondel", correct: false },
            { text: "Más adelante intersección en “T”", correct: true },
            { text: "Más adelante cruce de tren", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre62.png",
        answers: [
            { text: "Más adelante parterre termina", correct: true },
            { text: "Más adelante angostamiento de vía", correct: false },
            { text: "Más adelante parterre comienza", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre63.png",
        answers: [
            { text: "Más adelante parterre termina", correct: false },
            { text: "Más adelante angostamiento de vía", correct: false },
            { text: "Más adelante parterre comienza", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre64.png",
        answers: [
            { text: "Más adelante cruce de ganado", correct: true },
            { text: "Más adelante cruce de peatones", correct: false },
            { text: "Más adelante cruce de maquinaria agrícola", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre65.png",
        answers: [
            { text: "Túnel obstruido", correct: false },
            { text: "Trabajos en el túnel", correct: false },
            { text: "Aproximación a túnel", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre66.png",
        answers: [
            { text: "Más adelante vía sinuosa a la derecha", correct: true },
            { text: "Más adelante curva pronunciada a la derecha", correct: false },
            { text: "Más adelante curva y contra curva abiertas a la derecha", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre67.png",
        answers: [
            { text: "Más adelante solo vehículos livianos", correct: false },
            { text: "Más adelante vía compartida con ciclistas", correct: true },
            { text: "Más adelante vía solo para ciclistas", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre68.png",
        answers: [
            { text: "Más adelante vía cerrada", correct: false },
            { text: "Más adelante reductor de velocidad", correct: false },
            { text: "Más adelante depresión en la vía", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre69.png",
        answers: [
            { text: "Más adelante pendiente peligrosa", correct: false },
            { text: "Más adelante estrechamiento en la vía", correct: false },
            { text: "Más adelante puente angosto", correct: true }
        ]
    },
    {
        question: "¿Qué significan la siguiente señal?",
        image: "imagenes/pre70.png",
        answers: [
            { text: "Velocidad mínima de Km/h ", correct: false },
            { text: "Límite máximo de velocidad", correct: true },
            { text: "Usted se encuentra en el Kilómetro 30", correct: false }
        ]
    },
    {
        question: "La luz roja intermitente en un semáforo significa:",
        answers: [
            { text: "Parar siempre", correct: true },
            { text: "Disminuir la velocidad y atravesar la intersección con mucha precaución", correct: false },
            { text: "Parar, ceda el paso a todo el tráfico que cruza antes de atravesar la intersección", correct: false }
        ]
    },
    {
        question: "La luz roja intermitente en una señal de PARE en el extremo lateral izquierdo de un transporte escolar, ¿Qué significa?",
        answers: [
            { text: "Prohibido adelantar o rebasar al transporte escolar, hasta que se apague la luz intermitente y se guarde la señal de PARE", correct: true },
            { text: "Disminuir la velocidad y adelantar con precaución al transporte escolar", correct: false },
            { text: "Que se encendió las luces de estacionamiento del transporte escolar", correct: false }
        ]
    },
    {
        question: "La licencia digital es válida para circular en el Ecuador:",
        answers: [
            { text: "Si", correct: true },
            { text: "Solo si está impresa", correct: false },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "Es válido portar una copia simple de la licencia o matrícula para circular en el Ecuador:",
        answers: [
            { text: "No, nunca", correct: true },
            { text: "Solo si está impresa", correct: false },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "Debo hacer un curso de conducción para obtener mi licencia de conductor en el Ecuador:",
        answers: [
            { text: "No", correct: false },
            { text: "Solo si me pide el agente de tránsito", correct: false },
            { text: "Sí, siempre", correct: true }
        ]
    },
    {
        question: "El no cancelar el valor de multas no le permitirá: renovar la licencia, realizar la revisión técnica vehicular y matricular su vehículo",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿El conductor que NO haya sido sancionado durante el tiempo de vigencia de la licencia de conducir y mantenga los 30 (puntos), se beneficiará del 30% en el pago del valor de la especie de la licencia de conducir?",
        answers: [
            { text: "Verdadero", correct: false },
            { text: "Falso", correct: true },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "Si conduce su vehículo con un nivel de alcohol por litro de sangre de 0, a 0,80; ¿Qué sanción será aplicada?",
        answers: [
            { text: "Treinta días de privación de libertad y retención del vehículo por veinticuatro horas", correct: false },
            { text: "Cinco días de privación de libertad y retención del vehículo por veinticuatro horas", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "El conductor que falte de obra a la autoridad o agente de tránsito, ¿Será sancionado con pena privativa de libertad de tres días?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "Si se queda sin combustible y por esa razón obstaculiza el tránsito vehicular, ¿Está cometiendo una contravención?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿Es una contravención de tránsito, la o el conductor que conduzca con licencia caducada?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "La o el conductor y pasajeros que no hagan uso del cinturón de seguridad, ¿Corresponde a una contravención de transito?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "La o el conductor que invada con su vehículo circulando o estacionándose, en las vías asignadas para uso exclusivo de los ciclistas, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "Los conductores que conduzcan en estado de embriaguez o bajo los efectos de sustancias estupefacientes, psicotrópicas o preparados que las contengan y del cual provoquen un siniestro del cual resulte la muerte, ¿Qué sanción corresponde?",
        answers: [
            { text: "Pena privativa de la libertad de doce a veinte años", correct: false },
            { text: "Revocatoria definitiva de la licencia para conducir", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "El conducir un vehículo cuyas llantas se encuentren lisas o en mal estado, ¿Será sancionado con pena privativa de libertad de cinco a quince días?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "El conducir un vehículo con las luces no encendidas en horas de la noche o conduzca en sitios oscuros como túneles con la luces apagadas, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿Cuál de los siguientes enunciados corresponde a una contravención de tránsito?",
        answers: [
            { text: "La o el conductor que conduce sin mantener una distancia prudente de seguimiento respecto al vehículo y ciclista de adelante ", correct: true },
            { text: "La o el conductor que conduce con una distancia prudente de seguimiento respecto al vehículo de adelante", correct: false },
            { text: "La o el conductor que cede el paso y permite el adelantamiento de otros vehículos. ", correct: false }
        ]
    },
    {
        question: "La o el conductor de un vehículo automotor que circule con personas en los estribos o pisaderas, baldes de camionetas, parachoques o colgados de las carrocerías de los vehículos, ¿Es una contravención de transito?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "La o el conductor de un vehículo particular que tenga vidrios con películas antisolares oscuras, polarizados o cualquier tipo de adhesivo y que no tenga la debida autorización, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿Qué indican las líneas blancas que se observan en la imagen?",
        image: "imagenes/pre90.png",
        answers: [
            { text: "Estacionamiento en paralelo", correct: false },
            { text: "Líneas de borde", correct: true },
            { text: "Línea de prohibición de estacionamiento ", correct: false }
        ]
    },
    {
        question: "¿Qué indican las líneas amarillas al borde de la calzada que se observan en la imagen?",
        image: "imagenes/pre91.png",
        answers: [
            { text: "Indican a los conductores que es permitido el parqueo vehículos", correct: false },
            { text: "Indican a los conductores que se permite el adelantamiento de vehículo", correct: false },
            { text: "Indican a los conductores, especialmente en caso de poca visibilidad, dónde se encuentra el borde de la calzada", correct: true }
        ]
    },
    {
        question: "¿Qué significan las líneas segmentadas pintadas de blanco en una intersección, que se observan en la imagen?",
        image: "imagenes/pre92.png",
        answers: [
            { text: "Cruce de ciclovías", correct: true },
            { text: "Cruce peatonal", correct: false },
            { text: "Cruce de mascotas", correct: false }
        ]
    },
    {
        question: "De acuerdo a la imagen, ¿Las señales reglamentarias indican la dirección obligatoria en el carril que deben seguir los vehículos en la próxima intersección?",
        image: "imagenes/pre93.png",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "¿Qué debe hacer el conductor cuando en la vía observe un cruce peatonal demarcado tipo cebra como indica la imagen?",
        image: "imagenes/pre94.png",
        answers: [
            { text: "Debe pitar para alertar al peatón que no baje de la vereda", correct: false },
            { text: "Debe ceder el paso a los peatones que se encuentran cruzando la vía", correct: true },
            { text: "Debe acelerar para pasar más rápido", correct: false }
        ]
    },
    {
        question: "¿Qué debe hacer el conductor cuando se encuentre con una señal horizontal pintada en la vía como se observa en la imagen?",
        image: "imagenes/pre95.png",
        answers: [
            { text: "Velocidad mínima de 40 km/h", correct: false },
            { text: "Velocidad máxima de 40 km/h", correct: true },
            { text: "Peso permitido de 40", correct: false }
        ]
    },
    {
        question: "De acuerdo a la imagen, ¿Qué significa la siguiente señal horizontal pintada en la vía?",
        image: "imagenes/pre96.png",
        answers: [
            { text: "Estacionar temporalmente cuando no exista un agente de tránsito", correct: false },
            { text: "Prohibido estacionar", correct: true },
            { text: "Estacionamiento exclusivo para personas con discapacidad", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señalización horizontal?",
        image: "imagenes/pre97.png",
        answers: [
            { text: "Estacionamiento tarifado", correct: true },
            { text: "No estacionar", correct: false },
            { text: "Estacionamiento gratuito", correct: false }
        ]
    },
    {
        question: "El conductor cuando se encuentre en una intersección, ¿Debe detener su vehículo, bicicleta y peatones completamente y dar el paso a cualquier vehículo que se encuentre cruzando la intersección?",
        image: "imagenes/pre98.png",
        answers: [
            { text: "Verdadero", correct: true },
            { text: "Falso", correct: false },
            { text: "Desconoce", correct: false }
        ]
    },
    {
        question: "Los vehículos A y B llegan al mismo tiempo a una intersección en cruz por diferentes lados ¿Cuál tiene derecho de vía?",
        image: "imagenes/pre99.png",
        answers: [
            { text: "Cualquiera de los dos", correct: false },
            { text: "El vehículo que se aproxima a la izquierda", correct: false },
            { text: "El vehículo que se aproxima a la derecha", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre100.png",
        answers: [
            { text: "Saludo", correct: false },
            { text: "Giro a izquierda", correct: true },
            { text: "Disminuir la velocidad", correct: false }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre101.png",
        answers: [
            { text: "Saludo", correct: false },
            { text: "Parar", correct: false },
            { text: "Giro a derecha", correct: true }
        ]
    },
    {
        question: "¿Qué significa esta señal?",
        image: "imagenes/pre102.png",
        answers: [
            { text: "Solicita ayuda", correct: false },
            { text: "Estacionarse o detenerse", correct: true },
            { text: "Giro a izquierda", correct: false }
        ]
    },
    {
        question: "¿Qué significa el espacio de la berma?",
        image: "imagenes/pre103.png",
        answers: [
            { text: "Estacionamiento", correct: false },
            { text: "Espacio exclusivo para circulación de peatones, ciclistas y movilidad personal", correct: true },
            { text: "Carril para circulación de motos", correct: false }
        ]
    },
    {
        question: "¿Qué es la movilidad activa?",
        answers: [
            { text: "Es aquella que depende del movimiento motorizado, incluye el transporte público", correct: false },
            { text: "Es aquella que depende del movimiento físico de las personas, incluye la caminata el uso de la bicicleta y movilidad personal", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Cuáles son derechos de los biciusuarios? ",
        answers: [
            { text: "Derecho preferente de vía o circulación en los desvíos de avenidas y carreteras, cruce de caminos intersecciones no señalizadas y ciclovías", correct: false },
            { text: "Disponer vías de circulación privilegiada dentro de las ciudades y en carreteras, como ciclovías y espacios similares", correct: false },
            { text: "Todas las anteriores", correct: true }
        ]
    },
    {
        question: "De acuerdo a la normativa, ¿Dónde tienen derecho a circular los ciclistas?",
        answers: [
            { text: "Únicamente en las sendas especiales destinadas al uso de bicicletas", correct: false },
            { text: "En las aceras, con cuidado respectivo a los peatones", correct: false },
            { text: "Transitar por todas las vías del país con respeto y seguridad", correct: true }
        ]
    },
    {
        question: "¿En qué momento los conductores son responsables de su seguridad, de los pasajeros y el resto de usuarios viales?",
        answers: [
            { text: "Los conductores no son responsables de lo que el pasajero haga o deje de hacer en cuanto a su seguridad", correct: false },
            { text: "En todo momento", correct: true },
            { text: "Solo cuando esté encendido el motor del vehículo", correct: false }
        ]
    },
    {
        question: "¿Qué se entiende por vía pública?",
        answers: [
            { text: "El lugar por donde circulan los vehículos", correct: false },
            { text: "Espacio público destinado al libre tránsito vehicular, bicicletas y peatonal", correct: true },
            { text: "El lugar por donde circulan los peatones", correct: false }
        ]
    },
    {
        question: "¿Cuáles son las obligaciones de los peatones en la vía pública? ",
        answers: [
            { text: "Solicitar transporte o pedir ayuda a los automovilistas en lugares apropiados o prohibidos", correct: false },
            { text: "Cruzar por las esquinas o cruces peatonales en las vías primarías y vías secundarias con más de dos carriles efectivos de circulación; en vías secundarias que cuenten con un máximo de dos carriles efectivos de circulación podrán cruzar en cualquier punto; y siempre y cuando le sea posible hacerlo de manera segura", correct: true },
            { text: "Cruzar la calle por la parte anterior y posterior de los automotores que se hayan detenido momentáneamente", correct: false }
        ]
    },
    {
        question: "¿Cuáles son derechos de los peatones?",
        answers: [
            { text: "Tener libre circulación sobre las aceras y zonas peatonales exclusivas, tener preferencia de vía sobre todas las intersecciones, inclusive en las que tienen semáforo cuando la luz verde peatonal esté encendida, todo el tiempo en los pasos cebra y en las esquinas no reguladas por semáforos, procurando su propia seguridad y la de los demás", correct: false },
            { text: "Disponer de las vías públicas libres de obstáculos y no invadidas, y contar con infraestructura y señalización vial adecuadas que les brinden seguridad, en especial para las personas pertenecientes a los grupos de atención prioritaria", correct: false },
            { text: "Todas las anteriores", correct: true }
        ]
    },
    {
        question: "Uno de los objetivos de la Ley de Transporte Terrestre Tránsito y Seguridad Vial, es:",
        answers: [
            { text: "Definir sus principios, garantizar el derecho a la educación superior de calidad que propenda a la excelencia", correct: false },
            { text: "Contribuir al desarrollo del País a través de la formulación de políticas, regulaciones, planes, programas y proyectos, que garanticen el buen vivir", correct: false },
            { text: "El establecimiento de programas de capacitación y difusión para conductores, peatones, pasajeros y autoridades, en materia de seguridad vial, para la creación de una cultura y conciencia vial responsable y solidaria", correct: true }
        ]
    },
    {
        question: "¿Cómo se sanciona a los responsables de un siniestro de tránsito que no sean conductores (pasajeros, controladores, peatones, etc.)?",
        answers: [
            { text: "Con las mismas penas que a un conductor responsable del siniestro", correct: false },
            { text: "Con las mismas sanciones que un conductor, exceptuando la pérdida de puntos", correct: true },
            { text: "Con la mitad de las penas establecidas para un conductor responsable de un siniestro", correct: false }
        ]
    },
    {
        question: "¿Qué implica conducir con prudencia a pesar de las acciones incorrectas de otros conductores y de las condiciones adversas del clima y las vías, practicando normas de seguridad para no provocar un siniestro de tránsito?",
        answers: [
            { text: "Conducción con precaución", correct: true },
            { text: "Conducir con rapidez", correct: false },
            { text: "Cumplir con las normas de tránsito", correct: false }
        ]
    },
    {
        question: "¿Qué implica la prevención de siniestros?",
        answers: [
            { text: "Evitar las conductas riesgosas : exceso de velocidad, consumo de alcohol, no uso de cinturón, casco o sistemas de retención infantil, no respetar las señales de tránsito, manejo distraído", correct: false },
            { text: "Desarrollar un sistema seguro de movilidad, lo cual implica infraestructura para la seguridad vial, control y capacitación de los actores viales", correct: false },
            { text: "Todas las anteriores", correct: true }
        ]
    },
    {
        question: "¿Cuáles son los objetivos de la educación vial? ",
        answers: [
            { text: "Reducir de forma sistemática los siniestros de tránsito", correct: false },
            { text: "Formar y capacitar a las personas en general para el uso correcto de todos los medios de transporte terrestre", correct: false },
            { text: "Todas las anteriores", correct: true }
        ]
    },
    {
        question: "Los niños menores de 12 años podrán viajar en:",
        answers: [
            { text: "En el asiento delantero con cinturón de seguridad", correct: false },
            { text: "En el asiento delantero sin cinturón de seguridad", correct: false },
            { text: "En los asientos posteriores utilizando los sistemas de retención infantil de acuerdo a la edad y altura", correct: true }
        ]
    },
    {
        question: "¿Para qué sirven los seguros a prueba de niños en los vehículos?",
        answers: [
            { text: "Aseguran las hebillas de los cinturones de seguridad", correct: false },
            { text: "Bloquean las ventanas traseras manteniéndolas cerradas", correct: false },
            { text: "Impiden que las puertas puedan abrirse desde el interior", correct: true }
        ]
    },
    {
        question: "El dispositivo de seguridad pasiva que reduce el desplazamiento de la cabeza hacia atrás para evitar el efecto latigazo cervical, se conoce como:",
        answers: [
            { text: "Apoya cabeza", correct: true },
            { text: "Cinturón de seguridad", correct: false },
            { text: "Airbag", correct: false }
        ]
    },
    {
        question: "¿Cómo se conoce al dispositivo de seguridad pasiva incluida en algunos vehículos el cual se acciona en milisegundos al producirse un impacto?",
        answers: [
            { text: "Apoya cabeza", correct: false },
            { text: "Cinturón de seguridad", correct: false },
            { text: "Airbag o bolsa de aire", correct: true }
        ]
    },
    {
        question: "¿Cuál es la distancia mínima que debe mantener entre vehículo y ciclista al conducir?",
        answers: [
            { text: "1,0 metros", correct: false },
            { text: "1,5 metros", correct: true },
            { text: "Todas las anteriores", correct: false }
        ]
    },
    {
        question: "¿Cuándo debo llevar el kit de emergencia o carretero en mi vehículo?",
        answers: [
            { text: "Solo Triángulos", correct: false },
            { text: "Siempre", correct: true },
            { text: "Solo en caso de emergencia", correct: false }
        ]
    },
    {
        question: "En un paso cebra no regulado, ¿Quién tiene la preferencia de paso?",
        answers: [
            { text: "Los vehículos en circulación", correct: false },
            { text: "Los Peatones", correct: true },
            { text: "El transporte público", correct: false }
        ]
    },
    {
        question: "En caso de avería mecánica en la vía, ¿Debo poner los triángulos o conos de seguridad?",
        answers: [
            { text: "No es necesario", correct: false },
            { text: "Sí, siempre", correct: true },
            { text: "Solo en caso de haber agentes de tránsito", correct: false }
        ]
    },
    {
        question: "¿A qué distancia mínima antes de una maniobra es obligatorio poner la respectiva luz intermitente? ",
        answers: [
            { text: "Cuando ejecuto la maniobra", correct: false },
            { text: "Mínimo 30 metros antes", correct: true },
            { text: "Mínimo 10 metros antes", correct: false }
        ]
    },
    {
        question: "En un siniestro de tránsito las autoridades encargadas del control del tránsito, ¿Pueden detener a las personas involucradas?",
        answers: [
            { text: "No pueden detener a nadie hasta que tengan una orden judicial", correct: false },
            { text: "Pueden detenerlos y ponerlos a las órdenes del fiscal, en el caso donde resultaron personas lesionadas o fallecidas", correct: true },
            { text: "Solamente pueden detener a los vehículos", correct: false }
        ]
    },
    {
        question: "Al momento de rebasar a un ciclista en circulación, ¿Qué distancia mínima debe tomar el vehículo?",
        answers: [
            { text: "1 metro", correct: false },
            { text: "1,5 metros", correct: true },
            { text: "50 centímetros", correct: false }
        ]
    },
    {
        question: "¿Cuál es la distancia mínima de seguimiento que debe mantener entre vehículo y ciclista al conducir?",
        answers: [
            { text: "1 metro", correct: false },
            { text: "3 metros", correct: true },
            { text: "2 metros", correct: false }
        ]
    },
    {
        question: "¿Qué debe realizar un conductor cuando ve que un bus escolar e institucional se detiene en una parada?",
        answers: [
            { text: "Acelerar la marcha para pasar al bus", correct: false },
            { text: "Esperar y dar el paso a todos los peatones que se bajan del bus", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "En las carreteras, ¿Los conductores cuando circulan deben dar preferencia?",
        answers: [
            { text: "Otros conductores", correct: false },
            { text: "Peatones, ciclistas, motociclistas y similares.", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Qué se presume si un conductor se niega a realizarse pruebas para la detección de alcohol o de la presencia de sustancias estupefacientes?",
        answers: [
            { text: "No", correct: false },
            { text: "Será considerada como presunción de estar en el máximo grado de intoxicación", correct: true },
            { text: "Solo en el día", correct: false }
        ]
    },
    {
        question: "Cuando se conduzca un vehículo a motor y se requiera cruzar una acera para entrar o salir de un estacionamiento, ¿quién tiene preferencia de paso?",
        answers: [
            { text: "El conductor que está saliendo.", correct: false },
            { text: "Solo los vehículos", correct: false },
            { text: "Peatones, ciclistas y vehículos", correct: true }
        ]
    },
    {
        question: "¿A qué velocidad se estima que un atropellamiento de un niño/a sería mortal? ",
        answers: [
            { text: "10km/h", correct: false },
            { text: "15km/h", correct: false },
            { text: "25km/h", correct: true }
        ]
    },
    {
        question: "¿A qué velocidad se estima que el atropellamiento a un adulto sería mortal?",
        answers: [
            { text: "20km/h", correct: false },
            { text: "40km/h", correct: false },
            { text: "60km/h", correct: true }
        ]
    },
    {
        question: "En caso de que no exista señalización horizontal y/o vertical, ¿Quién tendría derecho de paso en la vía en caso de que los usuarios presentes incluyan peatones, ciclistas, vehículos livianos, carga pesada?",
        answers: [
            { text: "Peatones", correct: true },
            { text: "Biciusuarios", correct: false },
            { text: "Transporte público de pasajeros", correct: false }
        ]
    },
    {
        question: "Si un peatón va a cruzar una intersección con luz verde del semáforo vehicular o una intersección no regulada y un vehículo va girar, ¿Quién tiene la preferencia de paso?",
        answers: [
            { text: "El auto", correct: false },
            { text: "El peatón", correct: true },
            { text: "Los dos", correct: false }
        ]
    },
    {
        question: "¿Qué son las zonas 30?",
        answers: [
            { text: "Zona en donde la velocidad máxima es 30 km/h", correct: true },
            { text: "Es una zona peatonal", correct: false },
            { text: "Zona en donde la velocidad mínima es 30km/h", correct: false }
        ]
    },
    {
        question: "¿Por qué la movilidad activa es importante?",
        answers: [
            { text: "Está de moda", correct: false },
            { text: "Genera menor impacto ambiental, social y económico", correct: true },
            { text: "Ninguna de las anteriores", correct: false }
        ]
    },
    {
        question: "¿Un pasajero de transporte público puede denunciar ante la autoridad de tránsito, cuando el conductor esté en estado de ebriedad?",
        answers: [
            { text: "Es su obligación", correct: true },
            { text: "Tal vez", correct: false },
            { text: "No", correct: false }
        ]
    },
    {
        question: "¿En qué porcentaje disminuyen las probabilidades de muerte para un motociclista o ciclista durante un siniestro si utiliza casco homologado? ",
        answers: [
            { text: "No disminuyen, aumentan", correct: false },
            { text: "1%", correct: false },
            { text: "30%", correct: true }
        ]
    },
    {
        question: "En una vía urbana, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo liviano?",
        answers: [
            { text: "40 Km/h", correct: false },
            { text: "50 Km/h", correct: true },
            { text: "60 Km/h", correct: false }
        ]
    },
    {
        question: "En una vía perimetral, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo liviano?",
        answers: [
            { text: "80 Km/h", correct: false },
            { text: "90 Km/h", correct: true },
            { text: "95 Km/h", correct: false }
        ]
    },
    {
        question: "En vías rectas, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo liviano?",
        answers: [
            { text: "80 Km/h", correct: false },
            { text: "90 Km/h", correct: true },
            { text: "100 Km/h", correct: false }
        ]
    },
    {
        question: "¿De los siguientes enunciados cual corresponde a una Contravención de Tránsito?",
        answers: [
            { text: "La o el conductor de un taxi, que utilice el taxímetro debidamente homologado", correct: false },
            { text: "La o el conductor de un taxi, que ubique el taxímetro en el lugar especificado por los Organismos de Control de Tránsito", correct: false },
            { text: "La o el conductor de un taxi, que no utilice el taxímetro las veinticuatro horas, altere su funcionamiento o no lo ubique en un lugar visible al usuario", correct: true }
        ]
    },
    {
        question: "¿Cuál es la capacidad de un taxi convencional?",
        answers: [
            { text: "Cinco pasajeros sin incluir al conductor", correct: false },
            { text: "Cinco pasajeros, incluido el conductor", correct: true },
            { text: "Cuatro pasajeros incluido el conductor", correct: false }
        ]
    },
    {
        question: "Los vehículos que brindan el servicio de transporte en taxi ejecutivo tienen prohibido:",
        answers: [
            { text: "Recoger pasajeros en las vías y que no respondan a llamadas telefónicas requiriendo el servicio", correct: true },
            { text: "Recoger pasajeros en las vías y que respondan a llamadas telefónicas requiriendo el servicio", correct: false },
            { text: "No recoger pasajeros en las vías", correct: false }
        ]
    },
    {
        question: "¿Se puede brindar el servicio de transporte en taxi con vehículos no autorizados?",
        answers: [
            { text: "Si, si el vehículo autorizado se encuentra en reparación", correct: false },
            { text: "Si, si la directiva de la operadora le autoriza mediante un documento el cual debe portar", correct: false },
            { text: "No, bajo ninguna circunstancia", correct: true }
        ]
    },
    {
        question: "¿En qué momento los conductores de los servicios de taxis deben utilizar el taxímetro?",
        answers: [
            { text: "En todo momento y en correcto funcionamiento durante el día y la noche", correct: true },
            { text: "En todo momento y en correcto funcionamiento hasta las 20h00", correct: false },
            { text: "En todo momento y en correcto funcionamiento hasta las 22h00", correct: false }
        ]
    },
    {
        question: "Se denomina servicio de transporte comercial al que:",
        answers: [
            { text: "Satisface necesidades de movilización de personas o bienes", correct: false },
            { text: "Se presta a terceras personas a cambio de una contraprestación económica, siempre que no sea servicio de transporte colectivo o masivo", correct: true },
            { text: "Se lo realiza sólo dentro los límites establecidos para la zona de integración fronteriza respectiva", correct: false }
        ]
    },
    {
        question: "¿De los siguientes enunciados cual corresponde a una Contravención de Tránsito?",
        answers: [
            { text: "La o el conductor que con un vehículo automotor no exceda los límites de velocidad, establecidos en el reglamento correspondiente", correct: false },
            { text: "La o el conductor que ocasione un accidente de tránsito del que resulten solamente daños materiales, cuyos costos sean inferiores a dos salarios básicos unificados del trabajador en general", correct: true },
            { text: "La o el conductor que ocasione un accidente de tránsito del que resulten solamente daños materiales, cuyos costos sean inferiores a un salario básico unificado del trabajador en general", correct: false }
        ]
    },
    {
        question: "Cuando uno o más pasajeros abordan un vehículo, quienes deben colocarse el cinturón de seguridad?",
        answers: [
            { text: "Solo el conductor y el pasajero que viaja en el asiento delantero", correct: false },
            { text: "Solo el conductor", correct: false },
            { text: "Todos los ocupantes del vehículo", correct: true }
        ]
    },
    {
        question: "¿De los siguientes enunciados cual corresponde a una Contravención de Tránsito?",
        answers: [
            { text: "La o el conductor que se detenga en lugares permitidos para hacer uso de su teléfono celular", correct: false },
            { text: "La o el conductor que utilice el teléfono celular mientras conduce y utilice dispositivos instalados en su vehículo mediante bluetooth", correct: false },
            { text: "La o el conductor que utilice el teléfono celular mientras conduce y no haga uso del dispositivo homologado de manos libres", correct: true }
        ]
    },
    {
        question: "Con que periodicidad los conductores profesionales se someterán a exámenes médicos, psicológicos, psicosensométricos y teóricos",
        answers: [
            { text: "Cada dos años", correct: false },
            { text: "Semestralmente", correct: false },
            { text: "Anualmente", correct: true }
        ]
    },
    {
        question: "Para el caso de conductores profesionales que deseen acceder a una licencia de categoría superior, deberán acreditar",
        answers: [
            { text: "Haber mantenido mínimo por el lapso de dos años, una licencia profesional de categoría inferior que se pretende obtener", correct: false },
            { text: "Las escuelas de formación deberán comprobar la experiencia adquirida dentro del lapso de dos años", correct: false },
            { text: "Todas las anteriores", correct: true }
        ]
    },
    {
        question: "¿Qué tipo de licencia es necesaria para que una persona pueda conducir vehículos diseñados para el transporte comercial con una capacidad de carga de hasta 3,5 toneladas?",
        answers: [
            { text: "B", correct: false },
            { text: "C", correct: true },
            { text: "D", correct: false }
        ]
    },
    {
        question: "¿Cuál es la distancia mínima de seguimiento que debe mantener entre vehículo y ciclista al conducir?",
        answers: [
            { text: "1 metro", correct: false },
            { text: "3 metros", correct: true },
            { text: "2 metros", correct: false }
        ]
    },
    {
        question: "¿Al momento de rebasar a un ciclista en circulación que distancia mínima debe tomar el vehículo?",
        answers: [
            { text: "1 metro", correct: false },
            { text: "1,5 metros", correct: true },
            { text: "50 centímetros", correct: false }
        ]
    },
    {
        question: "¿A qué velocidad se estima que un atropellamiento de un niño/a sería mortal?",
        answers: [
            { text: "10km/h", correct: false },
            { text: "15km/h", correct: false },
            { text: "25km/h", correct: true }
        ]
    },
    {
        question: "¿En un paso cebra no regulado, quien tiene la preferencia de paso?",
        answers: [
            { text: "Los vehículos en circulación", correct: false },
            { text: "Los Peatones", correct: true },
            { text: "El transporte público", correct: false }
        ]
    },
];

shuffle(allQuestions);

const questions = allQuestions;

let currentQuestionIndex = 0;
const answers = [];

function loadQuestion() {
    const question = questions[currentQuestionIndex];

    shuffle(question.answers);
    
    const questionContainer = document.getElementById('question-container');
    
    questionContainer.innerHTML = `
        <h2>${currentQuestionIndex+1}. ${question.question}</h2>
        ${question.image ? `<img src="${question.image}" alt="Imagen de la pregunta" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">` : ''}
        <div id="answers-container">
            ${question.answers.map((answer, index) => `
                <div>
                    <input type="radio" id="answer-${index}" name="answer" value="${index}">
                    <label for="answer-${index}">${answer.text}</label>
                </div>
            `).join('')}
        </div>
    `;
    
    document.getElementById('prev-button').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').textContent = currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente';

    updateProgressBar();
}

function handleNextButton() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answers[currentQuestionIndex] = parseInt(selectedAnswer.value);
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function handlePrevButton() {
    currentQuestionIndex--;
    loadQuestion();
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / (questions.length - 1)) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
}

function showResults() {
    const resultsContainer = document.getElementById('results-container');
    const progressContainer = document.getElementById('progress-container');
    
    resultsContainer.style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('navigation-buttons').style.display = 'none';
    progressContainer.style.display = 'none';
    
    let correctAnswersCount = 0;
    let incorrectAnswersCount = 0;
    let answeredCount = 0;
    const totalQuestions = questions.length;

    questions.forEach((question, index) => {
        const userAnswerIndex = answers[index];
        if (userAnswerIndex !== undefined) {
            answeredCount++;
            if (question.answers[userAnswerIndex].correct) {
                correctAnswersCount++;
            } else {
                incorrectAnswersCount++;
            }
        }
    });

    const maxPoints = 20;
    const score = Math.round((correctAnswersCount / totalQuestions) * maxPoints);
    
    let resultHTML = `
        <h2>Resultados</h2>
        <p>Puntuación: ${score}/${maxPoints}</p>
        <a href="#" id="toggle-details" style="color: blue; text-decoration: underline;">Mostrar resultados específicos</a>
        <div id="detailed-results" style="display: none;">
            <p style="color: black; font-weight: bold;">Respuestas respondidas: ${answeredCount}/${totalQuestions}</p>
            <p style="color: green; font-weight: bold;">Respuestas correctas: ${correctAnswersCount}/${totalQuestions}</p>
            <p style="color: red; font-weight: bold;">Respuestas incorrectas: ${incorrectAnswersCount}/${totalQuestions}</p>
    `;

    questions.forEach((question, index) => {
        const userAnswerIndex = answers[index];
        const correctAnswer = question.answers.find(answer => answer.correct);
        
        resultHTML += `
            <div>
                <h3>${index + 1}. ${question.question}</h3>
                ${question.image ? `<img src="${question.image}" alt="Imagen de la pregunta" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">` : ''}
                <ul>
                    ${question.answers.map((answer, i) => {
                        let color = 'black';
                        let status = '';
                        if (i === userAnswerIndex) {
                            if (answer.correct) {
                                color = 'green';
                                status = ' (Correcto)';
                            } else {
                                color = 'red';
                                status = ' (Incorrecto)';
                            }
                        }
                        return `
                            <li style="color: ${color}; font-weight: ${i === userAnswerIndex ? 'bold' : 'normal'};">
                                ${answer.text}${status}
                            </li>
                        `;
                    }).join('')}
                </ul>
                ${!question.answers[userAnswerIndex]?.correct ? `<p style="color: green; font-weight: bold;">Respuesta correcta: ${correctAnswer.text}</p>` : ''}
            </div>
        `;
    });

    resultHTML += `</div>`;
    resultsContainer.innerHTML = resultHTML;

    document.getElementById('toggle-details').addEventListener('click', function(e) {
        e.preventDefault();
        const detailedResults = document.getElementById('detailed-results');
        const toggleLink = document.getElementById('toggle-details');
        
        if (detailedResults.style.display === 'none') {
            detailedResults.style.display = 'block';
            toggleLink.textContent = 'Ocultar resultados específicos';
        } else {
            detailedResults.style.display = 'none';
            toggleLink.textContent = 'Mostrar resultados específicos';
        }
    });
}

document.getElementById('next-button').addEventListener('click', handleNextButton);
document.getElementById('prev-button').addEventListener('click', handlePrevButton);

loadQuestion();