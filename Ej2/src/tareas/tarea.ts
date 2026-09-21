export type Tarea = {       // molde para que otros archivos puedan usarlo
    id: number;
    titulo: string;
    descripcion: string;
    estado:string;
    vencimiento: string | null;
    dificultad: string;
    fechaCreacion: Date;
    fechaUltimaEdicion: Date;
};

//uso otro type para los valores de entrada, porque no quiero que el usuario tenga que darme un id ni fechas, que son generadas automáticamente.
export type DatosNuevaTarea = {
    titulo: string;
    descripcion: string|undefined;
    estado: string|undefined;
    vencimiento: string|undefined;
    dificultad: string|undefined;
};

let ultimoId = 0; //Variable global (vive afuera de la función). Guarda el último id usado, para generar ids únicos y consecutivos.
export function crearTarea({ titulo, descripcion, estado, vencimiento, dificultad }: DatosNuevaTarea/*despues del parametro desestructurado, le doy una forma exacta al objeto*/): Tarea/*tipo que devuelve*/ {
    const ahora = new Date();//new Date() crea un objeto que representa el instante exacto en que se ejecuta esa línea (fecha + hora)
    ultimoId = ultimoId + 1;//Incrementa el contador global en 1, para que esta tarea tenga un id distinto a la anterior.

    let estadoFinal: string;
    if (estado === undefined ) {
        estadoFinal = 'pendiente';
    } else {
        estadoFinal = estado;
    }
    let dificultadFinal: string;
    if (dificultad === undefined) {
        dificultadFinal = 'facil';
    } else {
        dificultadFinal = dificultad;
    }
    let descripcionFinal: string;
    if (descripcion === undefined) {
        descripcionFinal = '';
    } else {
        descripcionFinal = descripcion;
    }

    let vencimientoFinal: string|null;
    if (vencimiento === undefined) {
        vencimientoFinal = null;
    } else {
        vencimientoFinal = vencimiento;
    }

    return {
        id: ultimoId,
        titulo: titulo,
        descripcion: descripcionFinal,
        estado: estadoFinal,
        vencimiento: vencimientoFinal,
        dificultad: dificultadFinal,
        fechaCreacion: ahora, //arrancan iguales, apuntando al mismo ahora.
        fechaUltimaEdicion: ahora, //no la declaro porque toma un valor existeente, que es el mismo que fechaCreacion
    };
}



