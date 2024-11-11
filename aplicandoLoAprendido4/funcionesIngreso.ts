import { escribirEnPantalla, ingresoInvalido } from "./funcionesPantalla";
import { comprobarDificultad} from "./funcionesControladoras";
import promptSync from "prompt-sync";
export function ingresarPorTeclado():string{
    const teclado:any = promptSync();
    return teclado(">");
}
export function ingresarTitulo():string{
    escribirEnPantalla("Ingrese un titulo para la tarea.");
    const titulo:string = ingresarPorTeclado();
    return titulo;
}
export function ingresarDescripcion():string{
    escribirEnPantalla("Ingrese una descripción para la tarea.");
    const descripcion:string = ingresarPorTeclado();
    return descripcion;
}
export function ingresarDificultad():number{
    escribirEnPantalla("Ingrese una dificultad para la tarea(1, 2, o 3)");
    const dificultad: number =Number(ingresarPorTeclado());
    if(comprobarDificultad(dificultad)){
        ingresoInvalido();
        return ingresarDificultad();
    }
    return dificultad;
}
export function ingresarVencimiento():Date{
    escribirEnPantalla("Ingrese la fecha de vencimiento (dd/mm/yyyy): ");
    const entrada:String = this.ingresarPorTeclado();
    // Intentar convertir la entrada en una fecha válida
    const [dia, mes, anio]:number[] = entrada.split('/').map(Number); // Convertir a números
    const fechaVencimiento:number|Date= new Date(anio, mes - 1, dia); // Mes empieza en 0 (Enero)
    // Validar que la fecha sea válida y no anterior a hoy
    if (!isNaN(Number(fechaVencimiento)) && fechaVencimiento >= new Date()){// No permitir fechas anteriores 
        return fechaVencimiento;
    } else {
        //aplicar recursividad para solicitar la fecha nuevamente
        ingresoInvalido();
        return ingresarVencimiento();
    }  
}