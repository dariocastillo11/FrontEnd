import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from '../../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: experiencia[] = [];

  constructor(private ExperienciaService: ExperienciaService, private tokenService: TokenService){}
isLogged=false;



    ngOnInit():void{
      this.cargarExperiencia();
      (error:any)=>{
        console.log(error)
      }
      
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }



    }
    cargarExperiencia():void{
      this.ExperienciaService.getExperiencia().subscribe(
        data=>this.experiencia = data)
    }

  delete(id: number){
    if(id!= undefined){
      this.ExperienciaService.delete(id).subscribe({
        next: data =>{
          this.cargarExperiencia();
        },error: err =>{
          alert("NO SE PUDO BORRAR LA EXPERIENCIA");
        }
      }
        
      )
    }

  }


}


