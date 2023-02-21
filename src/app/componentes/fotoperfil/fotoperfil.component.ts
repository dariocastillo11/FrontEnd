import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/servicios/token.service';
import { PersonaService } from '../../servicios/persona.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
  
})
export class FotoperfilComponent implements OnInit{
  persona: persona[]= [];
  submitted: boolean;
  registerForm: any;

  constructor(private PersonaService: PersonaService, private tokenService: TokenService,private modalService: NgbModal, router: Router){}
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
modal : NgbModalRef;

open(content: any, id?:number) {
  this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })
  
  this.modal.result.then((e) => {
      console.log("dialogo cerrado")
  });        
}

cerrar() {
  this.modal.close();
}

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }
  alert('SUCCESS!! :-)');
}

}


