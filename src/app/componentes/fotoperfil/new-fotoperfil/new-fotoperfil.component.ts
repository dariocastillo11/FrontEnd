import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona.model';
import { FotoperfilComponent } from '../fotoperfil.component';

@Component({
  selector: 'app-new-fotoperfil',
  templateUrl: './new-fotoperfil.component.html',
  styleUrls: ['./new-fotoperfil.component.css']
})
export class NewFotoperfilComponent {
  nombre:string='';
  apellido:string='';
  fechanacimiento:string='';
  domicilio:string='';
  sobremi:string='';
  urlfoto:string='';
constructor(private PersonaService: PersonaService, private router:Router){}


ngOnInit():void{


}
onCreate():void{
  const per=new persona(this.nombre,this.apellido,this.fechanacimiento,this.domicilio,this.sobremi,this.urlfoto);
  this.PersonaService.crearPersona(per).subscribe(
    {
      next: resp => {
      alert("Persona añadida");
      this.router.navigate(['']);
    },error: err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    }
    
  )
}

}


