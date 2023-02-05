export class proyectos{

    id?: number;
    descripcion:String;
    nombre:String;
    tecnologias:String;
    urlimagen:String;

    constructor(descripcion :String, nombre :String,tecnologias:String,  urlimagen:String){
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.tecnologias = tecnologias;
        this.urlimagen= urlimagen;

    }

}