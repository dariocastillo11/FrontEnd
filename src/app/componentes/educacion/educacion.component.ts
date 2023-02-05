import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { TokenService } from 'src/app/servicios/token.service';
import { EducacionService } from '../../servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: educacion[] = [];

  constructor(private EducacionService: EducacionService, private tokenService: TokenService){}
isLogged=false;



    ngOnInit():void{
      this.cargarEducacion();
      (error:any)=>{
        console.log(error)
      }
      
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }



    }
    cargarEducacion():void{
      this.EducacionService.getEducacion().subscribe(
        data=>this.educacion = data)
    }

  delete(id: number){
    if(id!= undefined){
      this.EducacionService.delete(id).subscribe({
        next: data =>{
          this.cargarEducacion();
        },error: err =>{
          alert("NO SE PUDO BORRAR LA EDUCACION");
        }
      }
        
      )
    }

  }


}


