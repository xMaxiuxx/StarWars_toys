import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path: 'cart', component: CartSummaryComponent},
  {path: 'page-not-found', component :PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
