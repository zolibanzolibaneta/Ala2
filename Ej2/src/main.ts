import { menuPrincipal } from './menus/menuPrincipal.js';

let opcionElegida:number;

do {
    opcionElegida = menuPrincipal();
} while (opcionElegida !== 0);

//Usar objetos camuflados y las tareas almacenarlas en un arreglo
//modularizar y usar abstraccion