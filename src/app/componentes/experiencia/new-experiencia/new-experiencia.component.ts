import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from '../../../servicios/experiencia.service';
import { experiencia } from '../../../model/experiencia.model';
import { ExperienciaComponent } from '../../experiencia/experiencia.component';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreempresa:String='';
  esTrabajoactual:String='';
  fechainicio:String='';
  fechafin:String='';
  descripcion:String='';
  urlempresa:String='';
  urlimagenempresa:String='';
constructor(private ExperienciaService: ExperienciaService, private router:Router){}


ngOnInit():void{


}
onCreate():void{
  const expe=new experiencia(this.nombreempresa,this.esTrabajoactual,this.fechainicio,this.fechafin,this.descripcion,this.urlempresa,this.urlimagenempresa);
  this.ExperienciaService.crearExperiencia(expe).subscribe(
    {
      next: resp => {
      alert("Experiencia añadida");
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
