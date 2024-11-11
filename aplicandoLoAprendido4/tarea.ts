export class Tarea{
        #titulo:string;
        #descripcion:string;
        #estado:"Pendiente"|"En curso" | "Terminada" | "Cancelada";
        #creacion:Date;
        #ultimaModificacion:Date;
        #vencimiento: Date| "Sin fecha de vencimiento";
        #dificultad: number;
    constructor(
        titulo="Sin titulo",                     
        descripcion="Sin descripción",
        estado="Pendiente",
        creacion=new Date(),
        ultimaModificacion=creacion,
        vencimiento="Sin fecha de vencimiento",
        dificultad=1
    )
    {}
    getTitulo(): string {
        return this.#titulo;
    }
    setTitulo(value: string) {
        this.#titulo=value;
    }

    getDescripcion(): string {
        return this.#descripcion;
    }
    setDescripcion(value: string) {
        this.#descripcion = value;
    }

    getEstado(): string {
        return this.#estado;
    }
    setEstado(value: "Pendiente"|"En curso" | "Terminada" | "Cancelada") {
        this.#estado=value;
    }

    getCreacion(): Date {
        return this.#creacion;
    }
    // La fecha de creación no debería modificarse, por lo tanto no hay setter para ella.

    getUltimaModificacion(): Date {
        return this.#ultimaModificacion;
    }
    setUltimaModificacion(value: Date) {
        this.#ultimaModificacion = value;
    }

    getVencimiento(): Date | string {
        return this.#vencimiento;
    }
    setVencimiento(value: Date | "Sin fecha de vencimiento") {
        this.#vencimiento = value;
    }

    getDificultad(): number {
        return this.#dificultad;
    }
    setDificultad(value: number) {
        this.#dificultad=value;
    }
}