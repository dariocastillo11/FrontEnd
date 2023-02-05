import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesComponent } from '../habilidades.component';
@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent {
  nombre:String='';
  porcentaje:String='';
  imagen:String='';

  constructor(private HabilidadesService: HabilidadesService, private router:Router){}
  
  
  ngOnInit():void{
  
  
  }
  onCreate():void{
    const hab=new habilidades(this.nombre,this.porcentaje,this.imagen);
    this.HabilidadesService.crearHabilidades(hab).subscribe(
      {
        next: resp => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      },error: err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
      }
      
    )
  }
  
  }
  