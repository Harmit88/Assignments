import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { myService } from '../shared/my.service';
import { FormBuilder, Validators } from '@angular/forms';
var RegisterComponent = /** @class */ (function () {
    //registeruser:RegisterUser;
    function RegisterComponent(router, route, _myService, formBuilder) {
        this.router = router;
        this.route = route;
        this._myService = _myService;
        this.formBuilder = formBuilder;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.RegisterForm = this.formBuilder.group({
            Id: [],
            Name: [' ', Validators.required],
            Password: [' ', [Validators.required, Validators.maxLength(6)]],
            Email: [' ', Validators.required],
            Contact: [' ', Validators.required],
            Role: [' ', Validators.required]
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._myService.RegisterUser(this.RegisterForm.value).subscribe(function (data) {
            _this.router.navigate(['/UserSubmit']);
        });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'my-form',
            templateUrl: 'register.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            myService,
            FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
/*private getUser(id:number):void
{
 if (id === 0 ){
   this.registeruser = {
      Admin:null,
      id:null,
      Name:null,
      Email:'',
      Contact:null,
      password:null,
      confpassword:null,
      Role:null
    };
   }
   else{
     console.log(this.registeruser);
   //this.registeruser =this._myService.getUserDetail(id);
      

   }
 
}*/
//# sourceMappingURL=register.component.js.map