import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { myService } from '../shared/my.service';
import { first } from 'rxjs/operators';
var editComponent = /** @class */ (function () {
    function editComponent(formBuilder, router, MyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.MyService = MyService;
    }
    editComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem("EditUserID");
        console.log("this is id" + userId);
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['submitAdmin']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            Email: ['', [Validators.required, Validators.email]],
            Name: ['', Validators.required],
            Contact: ['', Validators.required],
            Role: ['', Validators.required],
            Password: []
        });
        FormGroup;
        this.MyService.getUserById(+userId)
            .subscribe(function (data) {
            _this.editForm.setValue(data);
            console.log(data);
        });
    };
    editComponent.prototype.onSubmit = function () {
        var _this = this;
        this.MyService.updateUser(this.editForm.value)
            .pipe(first())
            .subscribe(function (data) {
            _this.router.navigate(['submitAdmin']);
        }, function (error) {
            alert(error);
        });
    };
    editComponent = tslib_1.__decorate([
        Component({
            selector: 'edit-user',
            templateUrl: 'edit.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, myService])
    ], editComponent);
    return editComponent;
}());
export { editComponent };
//# sourceMappingURL=edit.component.js.map