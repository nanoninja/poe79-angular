import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { DetailsComponent } from './components/product/details/details.component';
import { ListComponent } from './components/product/list/list.component';
import { FormComponent } from './components/product/form/form.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    {
        path: "products",
        children: [
            { path: "", component: ListComponent },
            { path: "create", component: FormComponent, canActivate: [AuthGuard] },
            { path: "details/:id", component: DetailsComponent },
        ]
    },
    {
        path: "users",
        children: [
            { path: "", component: UserListComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: "login", component: UserLoginComponent },
    { path: "**", component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
