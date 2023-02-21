import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'neutral-shirleen-dariocastillo11.koyeb.app/experiencia/';


  constructor(private httpClient: HttpClient) { }  
//lista
public getExperiencia(): Observable<experiencia[]>{
    return this.httpClient.get<experiencia[]>(this.URL+'ver');
}
//detail
public detail(id: number):Observable<experiencia>{
  return this.httpClient.get<experiencia>(this.URL+`detail/${id}`);
}
//save .el otro la tiene
public crearExperiencia(experiencia:experiencia ):Observable<any>{
  return this.httpClient.post<any>(this.URL + 'new', experiencia);
}


public update(id: number, experiencia: experiencia): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
}
public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
}
}
