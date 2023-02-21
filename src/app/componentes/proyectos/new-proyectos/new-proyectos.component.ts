import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosComponent } from '../proyectos.component';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent {
  descripcion:String='';
  nombre:String='';
  tecnologias:String='';
  urlimagen:String='';
constructor(private ProyectosService: ProyectosService, private router:Router){}


ngOnInit():void{


}
onCreate():void{
  const pro=new proyectos(this.descripcion,this.nombre,this.tecnologias,this.urlimagen);
  this.ProyectosService.crearProyectos(pro).subscribe(
    {
      next: resp => {
      alert("Proyecto añadido");
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


