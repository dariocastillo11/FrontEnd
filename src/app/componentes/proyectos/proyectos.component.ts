import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { TokenService } from 'src/app/servicios/token.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos: proyectos[] = [];
  submitted: boolean;
  registerForm: any;

  constructor(private ProyectosService: ProyectosService, private tokenService: TokenService,private modalService: NgbModal, router: Router){}
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




