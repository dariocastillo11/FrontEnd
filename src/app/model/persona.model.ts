export class persona{
    id?: number;//con el signo ? le indicamos q no es necesario. si no salta error
    nombre:String;
    apellido:String;
    domicilio:String;
    fechanacimiento:String;
    sobremi:String;
    urlfoto:String;

    constructor(nombre:String, apellido:String, domicilio:String, fechanacimiento:String, sobremi:String,urlfoto:String){
        this.nombre = nombre;
        this.apellido=apellido;
        this.domicilio=domicilio;
        this.fechanacimiento=fechanacimiento;
        this.sobremi=sobremi;
        this.urlfoto=urlfoto;// el id es autogenerado . no hace falta ponerlo
    }

}