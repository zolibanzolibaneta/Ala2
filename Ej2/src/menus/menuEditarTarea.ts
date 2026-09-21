import readlineSync from "readline-sync";
import type { Tarea } from "../tareas/tarea.js"; // Importa el tipo 

export function menuEditarTarea(tarea: Tarea): void { // void, antes no estaba
    console.log("=== EDITAR TAREA ===");
    console.log("Dejá vacío y presioná Enter para no modificar ese valor.");

    const nuevoTitulo: string = readlineSync.question("Título (" + tarea.titulo + "): ");//doy tipo
    if (nuevoTitulo !== "") {
        tarea.titulo = nuevoTitulo;
    }

    const nuevaDescripcion: string = readlineSync.question("Descripción (" + tarea.descripcion + "): ");//doy tipo
    if (nuevaDescripcion !== "") {
        tarea.descripcion = nuevaDescripcion;
    }

    console.log("Estado actual: " + tarea.estado);
    console.log("1. Pendiente  2. En curso  3. Terminada  4. Cancelada  (0 para no modificar)");
    const opEstado: number = readlineSync.questionInt("Elegí una opción: ");//doy tipo
    if (opEstado === 1) {
        tarea.estado = "pendiente";
    } else if (opEstado === 2) {
        tarea.estado = "en curso";
    } else if (opEstado === 3) {
        tarea.estado = "terminada";
    } else if (opEstado === 4) {
        tarea.estado = "cancelada";
    }

    console.log("Dificultad actual: " + tarea.dificultad);
    console.log("1. Fácil  2. Media  3. Difícil  (0 para no modificar)");
    const opDificultad: number = readlineSync.questionInt("Elegí una opción: ");//Doy tipo
    if (opDificultad === 1) {
        tarea.dificultad = "facil";
    } else if (opDificultad === 2) {
        tarea.dificultad = "media";
    } else if (opDificultad === 3) {
        tarea.dificultad = "dificil";
    }

    const nuevoVencimiento: string = readlineSync.question("Vencimiento (" + tarea.vencimiento + "): ");//doy tipo
    if (nuevoVencimiento !== "") {
        tarea.vencimiento = nuevoVencimiento;
    }

    tarea.fechaUltimaEdicion = new Date(); //Actuliza la fecha de última edición aunque no se haya modificado

    console.log("¡Tarea actualizada con éxito!");
}