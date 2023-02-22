import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model'


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 
 // URL = 'https://neutral-shirleen-dariocastillo11.koyeb.app/educacion/';
 URL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }  
//lista
public getEducacion(): Observable<educacion[]>{
    return this.httpClient.get<educacion[]>(this.URL+'ver');
}
//detail
public detail(id: number):Observable<educacion>{
  return this.httpClient.get<educacion>(this.URL+`detail/${id}`);
}
//save .el otro la tiene
public crearEducacion(educacion:educacion ):Observable<any>{
  return this.httpClient.post<any>(this.URL + 'new', educacion);
}


public update(id: number, educacion: educacion): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
}
public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
}
}
