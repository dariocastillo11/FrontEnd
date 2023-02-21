import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: experiencia[] = [];
  submitted: boolean;
  registerForm: any;

  constructor(private ExperienciaService: ExperienciaService, private tokenService: TokenService,private modalService: NgbModal, router: Router){}
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


