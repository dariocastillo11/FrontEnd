import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() ide:number;

  expLab : experiencia = null;
  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.experienciaService.detail(this.ide).subscribe(
    {
     next: data =>{
      this.expLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR EXPERIENCIA");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
   
  )

}
onUpdate():void{
  //const id= this.activatedRouter.snapshot.params['id'];
  this.experienciaService.update(this.ide,this.expLab).subscribe({
    next: data => {
      //this.router.navigate([''])
      window.location.reload();

    },error: err =>{
      alert("ERROR AL MODIFICAR EXPERIENCIA");
      //this.router.navigate(['']);
      window.location.reload();

    }
  }
    
  )
}


}
