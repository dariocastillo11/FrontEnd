import { Component, OnInit } from '@angular/core';
import { habilidades } from 'src/app/model/habilidades.model';
import { TokenService } from 'src/app/servicios/token.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidades: habilidades[] = [];
  submitted: boolean;
  registerForm: any;

  constructor(private HabilidadesService: HabilidadesService, private tokenService: TokenService,private modalService: NgbModal, router: Router){}
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


