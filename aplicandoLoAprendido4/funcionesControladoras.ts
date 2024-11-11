export function comprobarTitulo(titulo:string):boolean{
    return (titulo==="Sin titulo" || titulo==="");
}
export function comprobarDificultad(dificultad:number){
    return ((isNaN(dificultad)) || (dificultad!=1 && dificultad!=2 && dificultad!=3));
}