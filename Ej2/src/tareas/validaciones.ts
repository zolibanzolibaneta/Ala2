export function tituloValido(titulo: string): boolean {  //Valida que el título no esté vacío ni sea demasiado largo. Devuelve true si es válido, false si no lo es.
    if (titulo === "" || titulo === undefined) {
        return false;
    }
    if (titulo.length > 100) {
        return false;
    }
    return true;
}

export function descripcionValida(descripcion: string | undefined): boolean {  //Valida que la descripción no sea demasiado larga. Devuelve true si es válido, false si no lo es.
    if (descripcion === undefined) {
        return true;
    }
    if (descripcion.length > 500) {
        return false;
    }
    return true;
}