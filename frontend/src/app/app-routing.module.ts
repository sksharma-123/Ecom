import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent
  },
  // {
  //   path: 'admin/products', component: ProductComponent
  // },
  // {
  //   path: 'edit/:id', component: EditEmployeeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }