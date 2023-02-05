export class habilidades{
    id?: number;
    nombre:String;
    porcentaje:String;
    imagen:String;
 

    constructor(nombre:String,porcentaje:String,imagen:String){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagen=imagen;
    }

}