export function escribirEnPantalla (cadena:string){
    return console.log(`${cadena}`);
}
export function ingresoInvalido ():void{
    escribirEnPantalla("Opción ingresada no válida.");
}