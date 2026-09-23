# 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

- Tipado explícito: toda variable/función puede declarar su tipo (let x: number), y el compilador exige que los valores coincidan.
- Tipos personalizados: type/interface definen la forma exacta de un dato (propiedades, tipos, opcionalidad).
- Chequeo en tiempo de compilación: tsc revisa el código antes de ejecutarlo y rechaza lo que no respeta los tipos (JS solo falla al correr).
- Tipos unión: string | null expresa que un valor puede tener más de una forma posible.
- Módulos: import/export para organizar el código en archivos.

# 2. Creencias de los profesionales: ¿qué se cree "mejor"?

- Detecta errores antes de ejecutar el programa, no después.
- El tipado documenta la forma de los datos, sin depender de comentarios.
- Permite refactorizar con más seguridad (el compilador avisa qué se rompe).
- Se puede adoptar de a poco, sin reescribir todo el proyecto de una.
- Mejor soporte del editor (autocompletado, navegación de código).