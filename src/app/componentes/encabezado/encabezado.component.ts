import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;
  submitted: boolean;
  registerForm: any;
  constructor(private router: Router, private tokenService: TokenService,private modalService: NgbModal) { }


  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/login'])
  }

  modal : NgbModalRef;

  open(content: any) {
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