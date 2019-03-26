import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MyComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './Admin/admin.component';
import { UserComponent } from './User/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { FilterPipe } from './Admin/filterUser.pipe';
import { ViewComponent } from './shared/view.component';
import { myService } from './shared/my.service';
import { HttpModule } from '@angular/http';
import { RouterGuards } from './shared/router.Guard';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './shared/Add.component';
import { editComponent } from './Admin/edit.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterModule.forRoot([
                    { path: 'login', component: LoginComponent },
                    { path: 'submitAdmin', component: AdminComponent },
                    { path: 'UserSubmit', component: UserComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'submitAdmin/view', component: ViewComponent },
                    { path: 'back', component: AdminComponent },
                    // {path:'submitAdmin/view/:id',canActivate:[RouterGuards],component :ViewComponent}
                    { path: 'submitAdmin/view/:id', component: ViewComponent },
                    { path: 'submitAdmin/edit', component: editComponent },
                    { path: 'submitAdmin/add-user', component: AddComponent },
                    //{path:'edit',component:editComponent},
                    { path: 'UserSubmit/:name', component: UserComponent }
                ])
            ],
            declarations: [
                MyComponent,
                AdminComponent,
                UserComponent,
                LoginComponent,
                RegisterComponent,
                FilterPipe,
                ViewComponent,
                AddComponent,
                editComponent
            ],
            bootstrap: [
                MyComponent
            ],
            providers: [
                myService,
                RouterGuards
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map