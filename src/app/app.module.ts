import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopAComponent } from './modules/shopping/component/shop-a/shop-a.component';
import { ShopBComponent } from './modules/shopping/component/shop-b/shop-b.component';
import { ShopCComponent } from './modules/shopping/component/shop-c/shop-c.component';
import { ShopDComponent } from './modules/shopping/component/shop-d/shop-d.component';
import { ShopEComponent } from './modules/shopping/component/shop-e/shop-e.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './modules/component/view/view.component';
import { CartComponent } from './modules/component/cart/cart.component';
import { DeliveryComponent } from './modules/component/delivery/delivery.component';
import { PaymentComponent } from './modules/component/payment/payment.component';


import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    ShopAComponent,
    ShopBComponent,
    ShopCComponent,
    ShopDComponent,
    ShopEComponent,
    NavbarComponent,
    FooterComponent,
    ViewComponent,
    CartComponent,
    DeliveryComponent,
    PaymentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
