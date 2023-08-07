import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,

    CartSummaryComponent,
    PageNotFoundComponent,
    // ProductListComponent,
    HeaderComponent,
    MainComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
