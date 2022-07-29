export class persona {

    id?:number;
    nombre: string
    apellido: string;
    img: string;
    sobre_mi: string;

    constructor(nombre:string, apellido:string, img:string, sobre_mi:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobre_mi = sobre_mi;
    }
}