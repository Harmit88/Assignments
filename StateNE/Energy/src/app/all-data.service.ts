import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IaddLoan } from './add-loan/add-loan.model';


@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  private _Url="http://localhost:3000/IaddLoan";

  constructor( private __Http :HttpClient) {}

  getDetails():Observable<IaddLoan[]>{
    return this.__Http.get<IaddLoan[]>(this._Url);
  } 

  CreateDetails(user:IaddLoan){
    return this.__Http.post(this._Url,user);
  }
}