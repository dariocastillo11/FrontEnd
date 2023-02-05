import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { experiencia } from '../../../model/experiencia.model';
import { ExperienciaService } from '../../../servicios/experiencia.service';
import { Router } from '@angular/router';
import {ExperienciaComponent } from '../../experiencia/experiencia.component';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit{
  expLab : experiencia = null;
  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.experienciaService.detail(id).subscribe(
    {
     next: data =>{
      this.expLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR EXPERIENCIA");
      this.router.navigate(['']);
    }
  }
   
  )

}
onUpdate():void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.experienciaService.update(id,this.expLab).subscribe({
    next: data => {
      this.router.navigate([''])
    },error: err =>{
      alert("ERROR AL MODIFICAR EXPERIENCIA");
      this.router.navigate(['']);
    }
  }
    
  )
}


}
