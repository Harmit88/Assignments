import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MyComponent = /** @class */ (function () {
    function MyComponent(router) {
        this.router = router;
    }
    MyComponent.prototype.ngOnInit = function () {
    };
    MyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MyComponent);
    return MyComponent;
}());
export { MyComponent };
/*var status=1;
   if(this.Data.name == "Harmit"  && status==1){

   this.router.navigate[('/submit1')];
  // console.log("hi");
  
   }
   else
   {
     this.router.navigate(['/submit0']);
     console.log("bye");
   }
   
    return false */ 
//# sourceMappingURL=app.component.js.map