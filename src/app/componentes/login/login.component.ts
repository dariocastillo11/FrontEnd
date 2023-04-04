import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLogged=false;
isLogginFail=false;
loginUsuario!: LoginUsuario;
nombreUsuario!:string;
password!:string;
roles:string[] = [];
errMsj!:string;
//form: FormGroup;
constructor(private tokenService: TokenService,private authService:AuthService,private router:Router, private formBuilder: FormBuilder){
  //this.form= this.formBuilder.group({
    
  //  password:['',[Validators.required, Validators.minLength(4)]],
    
 //})
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthoriries(); 
    }
}
onLogin():void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
    this.isLogged=true;
    this.isLogginFail=false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);
    this.router.navigate(['']);

  }, err =>{
    this.isLogged=false;
    this.isLogginFail=true;
    this.errMsj= err.error.mensaje;
    console.log(this.errMsj);
  }
  )

}


}