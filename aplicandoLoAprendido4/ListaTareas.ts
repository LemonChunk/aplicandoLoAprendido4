import { Tarea } from "./tarea";
export class listaTareas{
    #tareas: Tarea[];
    constructor(){
        this.#tareas=[];
    }
    aniadirTarea(nuevaTarea:Tarea){
        this.#tareas.push(nuevaTarea);
    }
    esVacia():boolean{
        return (this.#tareas.length===0);
    }
    ordenarTareas():void{
        this.#tareas.sort((a, b) => {
            let tituloA = a.getTitulo().toLowerCase();
            let tituloB = b.getTitulo().toLowerCase();
            if (tituloA < tituloB) return -1;
            if (tituloA > tituloB) return 1;
            return 0;
        });
    }
    filtrarTareasPorEstado(estado:string):void{
        let estadoTareas = [];
        if(estado !== 'Todas'){
            type TareaConIndice = Tarea & { indice: number };
            const tareasFiltradasConIndice = this.#tareas
        .map((tarea: Tarea, indice: number): TareaConIndice => ({ ...tarea, indice }))  // Copia todas las propiedades de `tarea` y agrega el índice
        .filter((tareaConIndice: TareaConIndice) => tareaConIndice.getEstado() === estado);  // Filtra por el estado
        } else {
            return this.tareas;
        }
        return estadoTareas;
    }
}