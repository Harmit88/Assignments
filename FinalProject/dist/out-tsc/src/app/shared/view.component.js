import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myService } from '../shared/my.service';
var ViewComponent = /** @class */ (function () {
    function ViewComponent(route, _myService) {
        this.route = route;
        this._myService = _myService;
        this.title = "Details page";
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.title += "<<< " + id;
        this.route.queryParams
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.Name = params['Name'];
            _this.Contact = params['Contact'];
            _this.Email = params['Email'];
            _this.Role = params['Role'];
        });
        //this.id=this.route.snapshot.params['id'];
        //console.log(this.id)
        // this.test=this._myService.getUserDetail(this.id).subscribe((dconsole.log(this.test);
        //this._myService.getUser().subscribe((data) => this.User = data);
        //.((data) => this.User = data);
    };
    ViewComponent.prototype.getUserName = function () {
        return this.getUserName();
    };
    ViewComponent = tslib_1.__decorate([
        Component({
            selector: 'view-comp',
            templateUrl: 'view.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            myService])
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
/*
 id:Number;
 details:Iproduct[];
gOnInit():void{
    this.id=this._route.snapshot.params['id'];
    this._productService.getProductDetails(this.id)
       .subscribe((data) => this.details = data)
    
        
}*/ 
//# sourceMappingURL=view.component.js.map