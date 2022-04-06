import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaetariaService {

  constructor( private http:HttpClient) { }

  listFaixaEtaria(): Observable<Faixaetaria[]>{
    const url = '/api/faixaetaria';
    return this.http.get<Faixaetaria[]>(url);
    //[ 
    //  { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos'}
    //];
  }
}
