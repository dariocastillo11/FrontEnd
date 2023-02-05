import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  proLab : proyectos = null;
  constructor(private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.proyectosService.detail(id).subscribe(
    {
     next: data =>{
      this.proLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR PROYECTO");
      this.router.navigate(['']);
    }
  }
   
  )

}
onUpdate():void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.proyectosService.update(id,this.proLab).subscribe({
    next: data => {
      this.router.navigate([''])
    },error: err =>{
      alert("ERROR AL MODIFICAR PROYECTO");
      this.router.navigate(['']);
    }
  }
    
  )
}


}
