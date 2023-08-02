import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducListComponent } from './produc-list/produc-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:ProducListComponent},
  {path: 'cart', component: CartSummaryComponent},
  {path: 'page-not-found', component :PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
