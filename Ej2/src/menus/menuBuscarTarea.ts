import readlineSync from "readline-sync";
import { obtenerTareas } from "../tareas/tareaStores.js";
import { menuDetalleTarea } from "./menuDetalleTarea.js";
import type { Tarea } from "../tareas/tarea.js"; // Importa el tipo 

function contieneTexto(textoCompleto: string, textoBuscado: string ): boolean {  //Función interna (sin export, solo la usa este archivo). Busca si textoBuscado aparece dentro de textoCompleto. AHORA ACLARO EL TIPO, DEVUELVE BOOLEANO.
    for (let i: number = 0; i <= textoCompleto.length - textoBuscado.length; i++) {
        let coincide: boolean = true; //aclaro tipo

        for (let j: number = 0; j < textoBuscado.length; j++) { //Bucle externo: prueba cada posición posible donde podría empezar una coincidencia. El límite resta el largo de lo buscado para no salirse del string.
            if (textoCompleto[i + j] !== textoBuscado[j]) {
                coincide = false;   //Asume que coincide, y el bucle interno (j) compara letra por letra desde la posición i. Si encuentra una letra distinta, marca coincide = false. i + j es una suma simple que da una posición dentro del string
            }
        }

        if (coincide === true) {
            return true;
        }
    }

    return false;
}

export function menuBuscarTarea() {
    console.log("=== BUSCAR UNA TAREA ===");

    const palabraBuscada: string = readlineSync.question("Ingresá la palabra a buscar (0 para volver): "); //doy tipo

    if (palabraBuscada === "0") {
        console.log("Volviendo...");
        return;
    }

    const todasLasTareas: Tarea[] = obtenerTareas(); //ACLARO

    console.log("--- Resultados de la búsqueda ---");
    const tareasEncontradas: Tarea[] = []; //ACLARO TIPO

    for (let i: number = 0; i < todasLasTareas.length; i++) {
        const tarea = todasLasTareas[i];

        if (contieneTexto(tarea.titulo, palabraBuscada) === true) {
            tareasEncontradas[tareasEncontradas.length] = tarea;
            console.log(tareasEncontradas.length + ". " + tarea.titulo + " - Estado: " + tarea.estado);
        }
    }

    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con esa palabra.");
        return;
    }

    console.log("0. Volver");
    const seleccion: number = readlineSync.questionInt("Elegí una tarea para ver el detalle (0 para volver): ");//Dyo tipo

    if (seleccion === 0) {
        console.log("Volviendo...");
        return;
    }

    if (seleccion < 1 || seleccion > tareasEncontradas.length) {
        console.log("Número de tarea inválido.");
        return;
    }

    const tareaElegida: Tarea = tareasEncontradas[seleccion - 1]; //tipo tarea
    menuDetalleTarea(tareaElegida);
}