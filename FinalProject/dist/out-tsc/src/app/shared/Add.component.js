import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { myService } from './my.service';
var AddComponent = /** @class */ (function () {
    function AddComponent(formBuilder, router, _myService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this._myService = _myService;
        this.title = "Add New User";
    }
    AddComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            Name: [' ', Validators.required],
            Email: [' ', Validators.required],
            Contact: [' ', [Validators.maxLength(10), Validators.required]],
            Role: [' ', Validators.required],
            Password: [' ', Validators.required]
        });
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._myService.CreateUser(this.addForm.value).subscribe(function (data) {
            _this.router.navigate(['/submitAdmin']);
            console.log(data);
        });
    };
    AddComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'Add.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            myService])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=Add.component.js.map