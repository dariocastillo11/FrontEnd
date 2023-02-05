import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Router } from '@angular/router';
import { HabilidadesComponent } from '../habilidades.component';


@Component({
  selector: 'app-editarhabilidades',
  templateUrl: './editarhabilidades.component.html',
  styleUrls: ['./editarhabilidades.component.css']
})
export class EditarhabilidadesComponent implements OnInit{
  habLab : habilidades = null;
  constructor(private habilidadesService: HabilidadesService, private activatedRouter: ActivatedRoute,
    private router:Router){

  }
ngOnInit(): void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.habilidadesService.detail(id).subscribe(
    {
     next: data =>{
      this.habLab=data;
    },error: err =>{
      alert("ERROR AL MODIFICAR HABILIDAD");
      this.router.navigate(['']);
    }
  }
   
  )

}
onUpdate():void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.habilidadesService.update(id,this.habLab).subscribe({
    next: data => {
      this.router.navigate([''])
    },error: err =>{
      alert("ERROR AL MODIFICAR HABILIDAD");
      this.router.navigate(['']);
    }
  }
    
  )
}


}
