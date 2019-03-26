import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterby) {
        filterby = filterby ? filterby.toLowerCase() : null;
        return filterby ? value.filter(function (user) {
            return (user.Name.toLowerCase().indexOf(filterby) != -1);
        }) : value;
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: "filterpipe"
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
/*return filterBy ? value.filter((products:Iproduct) =>
(products.productName.toLowerCase().indexOf(filterBy) !== -1 ) || (products.productCode.toLowerCase().indexOf(filterBy) !== -1)): value;

}
} */ 
//# sourceMappingURL=filterUser.pipe.js.map