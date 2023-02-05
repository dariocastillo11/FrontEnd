export class experiencia{

    id?: number;
    nombreempresa:String;
    esTrabajoactual:String;
    fechainicio:String;
    fechafin:String;
    descripcion:String;
    urlempresa:String;
    urlimagenempresa:String;

    constructor(nombreempresa :String, esTrabajoactual :String,fechainicio:String,  fechafin:String,  descripcion:String,urlempresa:String,  urlimagenempresa:String){
        this.nombreempresa = nombreempresa;
        this.esTrabajoactual = esTrabajoactual;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.descripcion = descripcion;
        this.urlempresa = urlempresa;
        this.urlimagenempresa = urlimagenempresa;

    }

}