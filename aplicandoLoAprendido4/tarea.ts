export type Tarea={
    titulo:string;
    descripcion:string | null;
    dificultad: "⭐" | "⭐⭐" | "⭐⭐⭐";
    creacion: Date;
    estado: "Pendiente" | "En curso" | "Terminada" | "Cancelada";
}