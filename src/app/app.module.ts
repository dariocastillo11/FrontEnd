import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FotoperfilComponent } from './componentes/fotoperfil/fotoperfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia/editarexperiencia.component';
import { EditarfotoperfilComponent } from './componentes/fotoperfil/editarfotoperfil/editarfotoperfil.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion/editareducacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos/editarproyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos/new-proyectos.component';
import { NewFotoperfilComponent } from './componentes/fotoperfil/new-fotoperfil/new-fotoperfil.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EditarhabilidadesComponent } from './componentes/habilidades/editarhabilidades/editarhabilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { CopyrightComponent } from './componentes/copyright/copyright.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FotoperfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    LoginComponent,
    IndexComponent,
    InformacionComponent,
    ErrorComponent,
    QuiensoyComponent,
    EditarexperienciaComponent,
    EditarfotoperfilComponent,
    EditareducacionComponent,
    NewExperienciaComponent,
    EditareducacionComponent,
    NewEducacionComponent,
    EditarproyectosComponent,
    NewProyectosComponent,
    NewFotoperfilComponent,
    HabilidadesComponent,
    EditarhabilidadesComponent,
    NewHabilidadesComponent,
    SignupComponent,
    CopyrightComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
