import { IaddNewSigner } from './add-new-signer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})

export class NewSignerService{

    private _Url = "http://localhost:3000/IaddNewSigner" ;

    constructor( private _Http : HttpClient ) {}

    getSignerDetails(){
        return this._Http.get<IaddNewSigner[]>(this._Url);
    }

    createSigner(user:IaddNewSigner){
           return this._Http.post(this._Url,user);
    }
}
