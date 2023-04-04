import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FotoperfilComponent } from './componentes/fotoperfil/fotoperfil.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardskillComponent } from './componentes/hardskill/hardskill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FotoperfilComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardskillComponent,
    ProyectosComponent,
    LoginComponent,
    IndexComponent,
    InformacionComponent,
    ErrorComponent,
    QuiensoyComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
