import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  //constructor(){}
  constructor( private http: HttpClient,) { }

  /*listRegioes(): Regiao[]{
    return[
      { id: 1, regiao: 'Norte', total_exames:1564}
    ];
  }*/

  listRegioes(): Observable<Regiao[]>{
    const url = '/api/regiao';
    return this.http.get<Regiao[]>(url);
  }
}
