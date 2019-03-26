import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { User } from '../user.model';
var myService = /** @class */ (function () {
    function myService(_http, __Http) {
        this._http = _http;
        this.__Http = __Http;
        this._userUrl = 'http://localhost:3000/users';
    }
    myService.prototype.getUser = function () {
        return this.__Http.get(this._userUrl);
        //return this.__Http.get('http://localhost:3000/users')
        //                  .subscribe((res : Response<Iuser[]>) => res.json());
    };
    /*getUserDetail(id):Observable<Iuser[]>{
      return this.__Http.get<Iuser[]>(`${this._userUrl}?Id=${id}`);
      } */
    myService.prototype.myFun = function (username, password) {
        return this.__Http.post(this._userUrl, User.name).map(function (result) { return result; });
    };
    myService.prototype.getUserById = function (id) {
        console.log(id);
        return this.__Http.get(this._userUrl + '/' + id);
    };
    myService.prototype.updateUser = function (user) {
        return this.__Http.put(this._userUrl + '/' + user.id, user);
    };
    myService.prototype.DeleteUser = function (id) {
        return this.__Http.delete(this._userUrl + '/' + id);
    };
    myService.prototype.CreateUser = function (user) {
        return this.__Http.post(this._userUrl, user);
    };
    myService.prototype.RegisterUser = function (user) {
        return this.__Http.post(this._userUrl, user);
    };
    myService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http,
            HttpClient])
    ], myService);
    return myService;
}());
export { myService };
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
//# sourceMappingURL=my.service.js.map