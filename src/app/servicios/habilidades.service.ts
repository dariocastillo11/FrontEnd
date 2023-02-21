import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = environment.URL + '/habilidades/';

  constructor(private httpClient: HttpClient) { }  
//lista
public getHabilidades(): Observable<habilidades[]>{
    return this.httpClient.get<habilidades[]>(this.URL+'ver');
}
//detail
public detail(id: number):Observable<habilidades>{
  return this.httpClient.get<habilidades>(this.URL+`detail/${id}`);
}
//save .el otro la tiene
public crearHabilidades(habilidades:habilidades ):Observable<any>{
  return this.httpClient.post<any>(this.URL + 'new', habilidades);
}


public update(id: number, habilidades: habilidades): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, habilidades);
}
public delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
}
}
