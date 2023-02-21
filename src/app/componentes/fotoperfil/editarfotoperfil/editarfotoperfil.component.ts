import { Component, Input, OnInit } from '@angular/core';
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
  @Input() ide:number;
  perLab : persona = null;
  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(this.ide).subscribe(
    {
     next: data =>{
      this.perLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR PERSONA");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
   
  )

}
onUpdate():void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.personaService.update(this.ide,this.perLab).subscribe({
    next: data => {
      this.router.navigate([''])
    },error: err =>{
      alert("ERROR AL MODIFICAR PERSONA");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
    
  )
}


}


