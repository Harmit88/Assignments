import { Injectable } from '@angular/core';
import { Router,CanActivate ,ActivatedRouteSnapshot} from '@angular/router';

@Injectable()

export class RouterGuards implements CanActivate{
    constructor(private _router:Router){}
    canActivate(route: ActivatedRouteSnapshot):boolean {
        const id = +route.url[1].path;
        alert(id);
        if(isNaN(id) || id < 1) 
        {
            alert('invalid Url');
            this._router.navigate(['/submitAdmin/view']);
            return  false;
        }
        return true;
    } 

    } 
    

