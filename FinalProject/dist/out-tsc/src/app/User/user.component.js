import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { myService } from '../shared/my.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(UserServices) {
        this.UserServices = UserServices;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserServices.getUser().subscribe(function (data) { return _this.myUser = data; });
        //subscribe((data)=> this.MyUser = data);
        //console.log(this.Mydata.id);
    };
    UserComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'user.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [myService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map