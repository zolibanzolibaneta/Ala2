import readlineSync from "readline-sync";
import { agregarTarea } from "../tareas/tareaStores.js";
import { tituloValido, descripcionValida } from "../tareas/validaciones.js";
import type { Tarea } from "../tareas/tarea.js"; //el mismo en todos


export function menuAgregarTarea():void { //no retorna
    console.log("=== AGREGAR UNA TAREA ===");

    const titulo:string = readlineSync.question("Título: ");//doy tipo

    if (tituloValido(titulo) === false) {
        console.log("El título no puede estar vacío ni superar los 100 caracteres.");
        return;
    }

    const descripcion:string = readlineSync.question("Descripción (dejar vacío si no aplica): ");//doy tipo

    if (descripcionValida(descripcion) === false) {
        console.log("La descripción no puede superar los 500 caracteres.");
        return;
    }

    console.log("Estado:");
    console.log("1. Pendiente");
    console.log("2. En curso");
    console.log("3. Terminada");
    console.log("4. Cancelada");
    const opEstado:number = readlineSync.questionInt("Elegí una opción (o 0 para dejar el valor por defecto): ");//Doy tipo

    let estado:string|undefined; //doy tipo
    if (opEstado === 1) {
        estado = "pendiente";
    } else if (opEstado === 2) {
        estado = "en curso";
    } else if (opEstado === 3) {
        estado = "terminada";
    } else if (opEstado === 4) {
        estado = "cancelada";
    } else {
        estado = undefined;
    }

    console.log("Dificultad:");
    console.log("1. Fácil");
    console.log("2. Media");
    console.log("3. Difícil");
    const opDificultad:number = readlineSync.questionInt("Elegí una opción (o 0 para dejar el valor por defecto): ");

    let dificultad:string|undefined;
    if (opDificultad === 1) {
        dificultad = "facil";
    } else if (opDificultad === 2) {
        dificultad = "media";
    } else if (opDificultad === 3) {
        dificultad = "dificil";
    } else {
        dificultad = undefined;
    }

    const vencimiento:string = readlineSync.question("Vencimiento (dejar vacío si no aplica): ");

    let vencimientoFinal:string|undefined;
    if (vencimiento === "") {
        vencimientoFinal = undefined;
    } else {
        vencimientoFinal = vencimiento;
    }

    const nuevaTarea:Tarea = agregarTarea({
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        dificultad: dificultad,
        vencimiento: vencimientoFinal,
    });

    console.log("¡Tarea guardada con éxito! (id: " + nuevaTarea.id + ")");
}