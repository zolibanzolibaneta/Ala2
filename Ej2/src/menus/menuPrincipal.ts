import readlineSync from 'readline-sync';
import { menuVerTareas } from './menuVerTareas.js';
import { menuBuscarTarea } from './menuBuscarTarea.js';
import { menuAgregarTarea } from './menuAgregarTarea.js';

export function menuPrincipal(): number {
    console.log('BIENVENIDO AL MENÚ PRINCIPAL');
    console.log('Seleccione una opción:');
    console.log('1. Ver mis tareas');
    console.log('2. Buscar una tarea');
    console.log('3. Agregar una tarea');
    console.log("0. Salir");

    const op: number = readlineSync.questionInt('Ingrese el número de la opción deseada: ');
    switch (op) {
        case 1:
            menuVerTareas();
            break;
        case 2:
            menuBuscarTarea();
            break;
        case 3:
            menuAgregarTarea();
            break;
        case 0:
            console.log('Saliendo...');
            break;
        default:
            console.log('Opción no válida');
    }
    return op;
}