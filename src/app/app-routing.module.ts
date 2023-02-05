import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia/editarexperiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { IndexComponent } from './componentes/index/index.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion/editareducacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos/new-proyectos.component';
import { EditarproyectosComponent } from './componentes/proyectos/editarproyectos/editarproyectos.component';
import { NewFotoperfilComponent } from './componentes/fotoperfil/new-fotoperfil/new-fotoperfil.component';
import {EditarfotoperfilComponent} from '../app/componentes/fotoperfil/editarfotoperfil/editarfotoperfil.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { EditarhabilidadesComponent } from './componentes/habilidades/editarhabilidades/editarhabilidades.component';
import { SignupComponent } from './componentes/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path:'index', component: IndexComponent},
  {path:'login',component: LoginComponent},
  {path:'informacion',component: InformacionComponent},
  {path:'editarexperiencia/:id',component: EditarexperienciaComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'nuevaedu',component: NewEducacionComponent},
  {path:'editareducacion/:id',component: EditareducacionComponent},
  {path:'nuevopro',component: NewProyectosComponent},
  {path:'editarproyectos/:id',component: EditarproyectosComponent},
  {path:'nuevaper',component: NewFotoperfilComponent},
  {path:'editarfotoperfil/:id',component: EditarfotoperfilComponent},
  {path:'nuevahab',component:NewHabilidadesComponent},
  {path:'editarhabilidades/:id', component:EditarhabilidadesComponent},
  {path :'signup',component:SignupComponent},
  {path:'**',component:ErrorComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }