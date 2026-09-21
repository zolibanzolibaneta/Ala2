import { crearTarea } from './tarea.js';//Trae la función crearTarea desde el otro archivo, para usarla acá.
import type { Tarea, DatosNuevaTarea } from './tarea.js';//Trae el type DatosNuevaTarea desde el otro archivo, para usarlo acá.
const tareas: Tarea[] = [];//un array donde cada elemento es del tipo Tarea. Al estar afuera de cualquier función, mantiene su valor entre distintos llamados.

export function agregarTarea({ titulo, descripcion, estado, vencimiento, dificultad }: DatosNuevaTarea):Tarea {
    const tarea = crearTarea({ titulo, descripcion, estado, vencimiento, dificultad });
    tareas[tareas.length] = tarea;          // le pide a crearTarea que arme el objeto completo (con id y defaults), lo agrega al array en la primera posición libre (tareas[tareas.length]), y devuelve la tarea creada.
    return tarea;
}

export function obtenerTareas(): Tarea[] {//Devuelve el array completo de tareas, para que otros archivos puedan leerlo. Y debe ser de tipo Tarea[] porque es un array de objetos Tarea.
    return tareas;
}

export function buscarTareaPorId(id: number): Tarea | null { //Recorre el array con un for clásico. Si encuentra una tarea con ese id, la devuelve al instante (corta la función ahí). Si termina el bucle sin encontrar nada, devuelve null.
    for (let i:number = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            return tareas[i];
        }
    }
    return null;
}
// Entender mas despues
//bucle externo (i) hace una pasada completa por vez; bucle interno (j) compara elementos vecinos. El - i acorta el rango en cada vuelta, porque el elemento más grande ya quedó ubicado al final.
export function ordenarTareasPorTitulo(arrayDeTareas: Tarea[]): Tarea[] {
    for (let i:number = 0; i < arrayDeTareas.length - 1; i++) {
        for (let j:number = 0; j < arrayDeTareas.length - 1 - i; j++) {
            if (arrayDeTareas[j].titulo > arrayDeTareas[j + 1].titulo) {
                const temporal = arrayDeTareas[j];
                arrayDeTareas[j] = arrayDeTareas[j + 1];//Si el título en j es alfabéticamente mayor que el de j+1, están en el orden equivocado: los intercambia usando una variable temporal para no perder el valor original en el proceso.
                arrayDeTareas[j + 1] = temporal;
            }
        }
    }

    return arrayDeTareas; //Devuelve el array ordenado aunque no haga falta
}