import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var RouterGuards = /** @class */ (function () {
    function RouterGuards(_router) {
        this._router = _router;
    }
    RouterGuards.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        alert(id);
        if (isNaN(id) || id < 1) {
            alert('invalid Url');
            this._router.navigate(['/submitAdmin/view']);
            return false;
        }
        return true;
    };
    RouterGuards = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], RouterGuards);
    return RouterGuards;
}());
export { RouterGuards };
//# sourceMappingURL=router.Guard.js.map