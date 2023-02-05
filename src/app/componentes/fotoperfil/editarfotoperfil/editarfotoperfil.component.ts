import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { persona } from '../../../model/persona.model';
import { PersonaService } from '../../../servicios/persona.service';
import { Router } from '@angular/router';
import { FotoperfilComponent } from '../../fotoperfil/fotoperfil.component';

@Component({
  selector: 'app-editarfotoperfil',
  templateUrl: './editarfotoperfil.component.html',
  styleUrls: ['./editarfotoperfil.component.css']
})
export class EditarfotoperfilComponent implements OnInit{
  perLab : persona = null;
  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    {
     next: data =>{
      this.perLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR PERSONA");
      this.router.navigate(['']);
    }
  }
   
  )

}
onUpdate():void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.personaService.update(id,this.perLab).subscribe({
    next: data => {
      this.router.navigate([''])
    },error: err =>{
      alert("ERROR AL MODIFICAR PERSONA");
      this.router.navigate(['']);
    }
  }
    
  )
}


}


