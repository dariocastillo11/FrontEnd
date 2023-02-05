import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { TokenService } from 'src/app/servicios/token.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos: proyectos[] = [];

  constructor(private ProyectosService: ProyectosService, private tokenService: TokenService){}
isLogged=false;



    ngOnInit():void{
      this.cargarProyectos();
      (error:any)=>{
        console.log(error)
      }
      
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }



    }
    cargarProyectos():void{
      this.ProyectosService.getProyectos().subscribe(
        data=>this.proyectos = data)
    }

  delete(id: number){
    if(id!= undefined){
      this.ProyectosService.delete(id).subscribe({
        next: data =>{
          this.cargarProyectos();
        },error: err =>{
          alert("NO SE PUDO BORRAR EL PROYECTO");
        }
      }
        
      )
    }

  }


}




