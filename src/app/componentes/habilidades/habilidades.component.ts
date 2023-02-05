import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/model/habilidades.model';
import { TokenService } from 'src/app/servicios/token.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{

  habilidades: habilidades[] = [];

  constructor(private HabilidadesService: HabilidadesService, private tokenService: TokenService){}
isLogged=false;



    ngOnInit():void{
      this.cargarHabilidades();
      (error:any)=>{
        console.log(error)
      }
      
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }



    }
    cargarHabilidades():void{
      this.HabilidadesService.getHabilidades().subscribe(
        data=>this.habilidades = data)
    }

  delete(id: number){
    if(id!= undefined){
      this.HabilidadesService.delete(id).subscribe({
        next: data =>{
          this.cargarHabilidades();
        },error: err =>{
          alert("NO SE PUDO BORRAR LA HABILIDAD");
        }
      }
        
      )
    }

  }


}


