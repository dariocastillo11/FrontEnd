import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/servicios/token.service';
import { PersonaService } from '../../servicios/persona.service';
@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
  
})
export class FotoperfilComponent implements OnInit{
  persona: persona[]= [];

  constructor(private PersonaService: PersonaService, private tokenService: TokenService){}
isLogged=false;



  ngOnInit():void{
    this.cargarPersona();
    (error:any)=>{
      console.log(error)
    }
    
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }



  }
  cargarPersona():void{
    this.PersonaService.getPersona().subscribe(
      data=>this.persona = data)
  }

delete(id: number){
  if(id!= undefined){
    this.PersonaService.delete(id).subscribe({
      next: data =>{
        this.cargarPersona();
      },error: err =>{
        alert("NO SE PUDO BORRAR LA PERSONA");
      }
    }
      
    )
  }

}


}





  
