import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { TokenService } from 'src/app/servicios/token.service';
import { EducacionService } from '../../servicios/educacion.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: educacion[] = [];
  submitted: boolean;
  registerForm: any;

  constructor(private EducacionService: EducacionService, private tokenService: TokenService,private modalService: NgbModal, router: Router){}
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


