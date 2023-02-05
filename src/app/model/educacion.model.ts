export class educacion{
    id?: number;
    titulo:String;
    inicio:String;
    fin:String;
    descripcion:String;
    imagenestudio:String;
    urlimagen:String;

    constructor(titulo:String,inicio:String,fin:String, descripcion:String, imagenestudio:String, urlimagen:String){
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.imagenestudio = imagenestudio;
        this.urlimagen=urlimagen;  
    }

}