import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Router } from '@angular/router';
import { ProyectosComponent } from '../proyectos.component';

@Component({
  selector: 'app-editarproyectos',
  templateUrl: './editarproyectos.component.html',
  styleUrls: ['./editarproyectos.component.css']
})
export class EditarproyectosComponent implements OnInit{

  @Input() idess:number;
  proLab : proyectos = null;
  constructor(private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.proyectosService.detail(this.idess).subscribe(
    {
     next: data =>{
      this.proLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR PROYECTO");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
   
  )

}
onUpdate():void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.proyectosService.update(this.idess,this.proLab).subscribe({
    next: data => {
     // this.router.navigate([''])
      window.location.reload();

    },error: err =>{
      alert("ERROR AL MODIFICAR PROYECTO");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
    
  )
}


}
