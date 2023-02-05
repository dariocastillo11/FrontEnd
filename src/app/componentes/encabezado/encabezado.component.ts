import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router, private tokenService: TokenService) { }


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


}
