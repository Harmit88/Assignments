import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from '../common.model';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { User} from '../user.model'


@Injectable()

export class myService{
   private _userUrl='http://localhost:3000/users';
 

    constructor( private _http:Http,
                  private __Http:HttpClient){} 
      getUser():Observable<Iuser[]>{
          return this.__Http.get<Iuser[]>(this._userUrl);

          //return this.__Http.get('http://localhost:3000/users')
          //                  .subscribe((res : Response<Iuser[]>) => res.json());
          
        }
    
        /*getUserDetail(id):Observable<Iuser[]>{
          return this.__Http.get<Iuser[]>(`${this._userUrl}?Id=${id}`);
          } */

          myFun(username:string,password:string)
          {
           var test=this.__Http.get(this._userUrl)
           .map(res => res);
           console.log(test)
           return test;

           
          }
          //login(data) {
          //  return this._http.post(this._userUrl, data);
         // }

          getUserById(id:number){
            console.log(id);
            return this.__Http.get<Iuser>(this._userUrl + '/' + id);
          }

          updateUser(user: Iuser) {
            return this.__Http.put(this._userUrl + '/' + user.id, user);
          }
          DeleteUser(id:number){

          return this.__Http.delete(this._userUrl + '/' + id);
        }

        CreateUser(user:Iuser){
          return this.__Http.post(this._userUrl, user);
        }

        RegisterUser(user:Iuser){
          return this.__Http.post(this._userUrl, user);
        }


        
         
        }

    
    
    
    
    
    
        /*  getUser():Iuser[] {
            return [
                {
                "Id":1,
                "Name": "Chathurangi",
                "email": "chathurangi@gmail.com",
                "Contact": "+14029263479",
                "Admin": 1
              },
              {
                "Id": 2,
                "Name": "Chamani",
                "email": "chamani@innovera.com",
                "Contact": "+19529556634",
                "Admin": 1
              },
            ]
        } */

     
    



/*
getProduct():Observable<Iproduct[]>{
        return  this.__http.get<Iproduct[]>(this._productUrl);
       // .pipe(map(this.extractData));

    }
    getProductDetails(id):Observable<Iproduct[]>{

        return this.__http.get<Iproduct[]>(`${this._productUrl}?productId=${id}`);
    }*/