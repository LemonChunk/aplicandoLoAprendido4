import promptSync from "prompt-sync";
export function ingresarPorTeclado():string{
    const teclado = promptSync();
    return teclado(">");
}
export function escribirEnPantalla (cadena:string){
    return console.log(`${cadena}`);
}
export function menuPrincipal():void{
    escribirEnPantalla("Menú de opciones");
    escribirEnPantalla("1. Agregar tarea.");
    escribirEnPantalla("2. Ver tarea.");
    escribirEnPantalla("3. Buscar tarea.");
}