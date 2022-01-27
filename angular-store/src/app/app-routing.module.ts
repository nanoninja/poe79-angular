import { DetailsComponent } from './components/product/details/details.component';
import { ListComponent } from './components/product/list/list.component';
import { FormComponent } from './components/product/form/form.component';
import { ErrorComponent } from './components/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "products",
    children: [
      { path: "", component: ListComponent },
      { path: "create", component: FormComponent },
      { path: "details", component: DetailsComponent },
    ]
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
