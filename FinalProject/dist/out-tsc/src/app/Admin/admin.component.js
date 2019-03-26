import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { myService } from '../shared/my.service';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, _myService) {
        this.router = router;
        this._myService = _myService;
        this.Show = true;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.User=this._myService.getUser();
        this._myService.getUser().subscribe(function (data) { return _this.User = data; });
    };
    AdminComponent.prototype.getData = function () {
        this.Show = !this.Show;
    };
    AdminComponent.prototype.ViewDetails = function (Id) {
        var _this = this;
        alert(Id);
        var selectedId = this._myService.getUserById(Id).subscribe(function (User) {
            User[0].Id === Id;
            console.log(selectedId);
            _this.router.navigate(['/submitAdmin/view', Id]);
            // return Id;
        });
    };
    AdminComponent.prototype.EditUser = function (use) {
        console.log("this id my id:" + use.id);
        localStorage.removeItem("EditUserID");
        localStorage.setItem("EditUserID", use.id.toString());
        // console.log("this is my ans" +myItem);
        this.router.navigate(['submitAdmin/edit']);
    };
    AdminComponent.prototype.DeleteUser = function (user) {
        var _this = this;
        console.log(user.id);
        this._myService.DeleteUser(user.id)
            .subscribe(function (data) {
            console.log(data);
            _this.User = _this.User.filter(function (u) { return u == user; });
            //alert("User Deleted");
            // this.router.navigate(['submitAdmin']);
            location.reload();
        });
    };
    AdminComponent.prototype.addUser = function () {
        this.router.navigate(['submitAdmin/add-user']);
    };
    AdminComponent = tslib_1.__decorate([
        Component({
            selector: 'Admin-comp',
            templateUrl: 'admin.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            myService])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
/*  this.User.forEach(function(item){
     Object.keys(item).forEach(function(key){
          if(key == "id"){
               if( userId == item[key])
               {
                 console.log("success");
               this.router.navigate(['/submitAdmin/view',userId]);
                  }
                  else{
                       console.log("fail");
                  }
                  })
           })
          } */
// console.log(key);
//   this.router.navigate(['/submitAdmin/view',userId]);   
//Onclick(){
//  }
//# sourceMappingURL=admin.component.js.map