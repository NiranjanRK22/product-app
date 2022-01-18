import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
