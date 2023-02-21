import { Component, Input, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { educacion } from '../../../model/educacion.model';
import { EducacionService } from '../../../servicios/educacion.service';
import { Router } from '@angular/router';
import { EducacionComponent } from '../../educacion/educacion.component';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})

export class EditareducacionComponent implements OnInit {
  @Input() ides:number;
  eduLab: educacion = null;
  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(this.ides).subscribe(
      {
        next: data => {
          this.eduLab = data;
        }, error: err => {
          alert("ERROR AL MODIFICAR EDUCACION");
          //this.router.navigate(['']);
          window.location.reload();

        }
      }

    )

  }
  onUpdate(): void {
    // const id= this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(this.ides, this.eduLab).subscribe({
      next: data => {
        // this.router.navigate([''])
        window.location.reload();

      }, error: err => {
        alert("ERROR AL MODIFICAR EXPERIENCIA");
        window.location.reload();

        //this.router.navigate(['']);
      }
    }

    )
  }


}
