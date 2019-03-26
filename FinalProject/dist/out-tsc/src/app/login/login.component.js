import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../user.model';
import { myService } from '../shared/my.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, myService) {
        this.router = router;
        this.myService = myService;
        this.IsLoggined = true;
        this.Data = new User('', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getuserName = function () {
        return this.Data.name;
    };
    LoginComponent.prototype.myFun = function (username, password) {
        var _this = this;
        this.status = 1;
        // this.myService.getUserByName()
        this.myService.myFun(username, password).subscribe(function (users) {
            if (users) {
                _this.router.navigate(['submitAdmin']);
            }
            else {
                _this.IsLoggined = false;
                return false;
            }
            ;
        });
        /*if(this.Data.name == "Harmit"  && this.status==1){
     
         this.router.navigate(['/submitAdmin']);
        // console.log("hi");
        
         }
         else
         {
           this.router.navigate(['/UserSubmit',this.Data.name]);
           console.log("bye");
         }
         console.log(this.Data.name)
         return this.Data.name */
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'login-comp',
            templateUrl: 'login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            myService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map