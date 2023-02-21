import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from '../../../servicios/educacion.service';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionComponent } from '../educacion.component';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  titulo:String='';
  inicio:String='';
  fin:String='';
  descripcion:String='';
  imagenestudio:String='';
  urlimagen:String='';
  constructor(private EducacionService: EducacionService, private router:Router){}
  
  
  ngOnInit():void{
  
  
  }
  onCreate():void{
    const edu=new educacion(this.titulo,this.inicio,this.fin,this.descripcion,this.imagenestudio,this.urlimagen);
    this.EducacionService.crearEducacion(edu).subscribe(
      {
        next: resp => {
        alert("Educacion añadida");
        //this.router.navigate(['']);
        window.location.reload();

      },error: err => {
        alert("Fallo");
        //this.router.navigate(['']);
        window.location.reload();

      }
      }
      
    )
  }
  
  }
  