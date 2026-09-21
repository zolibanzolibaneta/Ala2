import readlineSync from "readline-sync";
import { menuEditarTarea } from "./menuEditarTarea.js";
import type { Tarea } from "../tareas/tarea.js"; // Importa el tipo Tarea desde el archivo tarea.js para usarlo en la función menuDetalleTarea.

export function menuDetalleTarea(tarea: Tarea): void { // void, antes no estaba
    console.log("=== DETALLE DE TAREA ===");
    console.log("Título: " + tarea.titulo);

    if (tarea.descripcion === "") {
        console.log("Descripción: (sin descripción)");
    } else {
        console.log("Descripción: " + tarea.descripcion);
    }

    console.log("Estado: " + tarea.estado);
    console.log("Dificultad: " + tarea.dificultad);

    if (tarea.vencimiento === null) {
        console.log("Vencimiento: (sin vencimiento)");
    } else {
        console.log("Vencimiento: " + tarea.vencimiento);
    }

    console.log("Fecha de creación: " + tarea.fechaCreacion);
    console.log("Última edición: " + tarea.fechaUltimaEdicion);
    console.log("");
    console.log("Presioná E para editar, o 0 para volver.");

    const opcion: string = readlineSync.question("Opción: ");//doy tipo

    if (opcion === "e" || opcion === "E") {
        menuEditarTarea(tarea);
    } else {
        console.log("Volviendo...");
    }
}