import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';


@Injectable({
    providedIn: 'root'
  })
  export class ProyectosService {
    URL = 'https://neutral-shirleen-dariocastillo11.koyeb.app/proyectos/' ;

    constructor(private httpClient: HttpClient) { }  
  //lista
  public getProyectos(): Observable<proyectos[]>{
      return this.httpClient.get<proyectos[]>(this.URL+'ver');
  }
  //detail
  public detail(id: number):Observable<proyectos>{
    return this.httpClient.get<proyectos>(this.URL+`detail/${id}`);
  }
  //save .el otro la tiene
  public crearProyectos(proyectos:proyectos ):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', proyectos);
  }
  
  
  public update(id: number, proyectos: proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
  }
  