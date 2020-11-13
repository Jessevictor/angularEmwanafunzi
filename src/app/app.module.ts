import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopAComponent } from './modules/shopping/component/shop-a/shop-a.component';
import { ShopBComponent } from './modules/shopping/component/shop-b/shop-b.component';
import { ShopCComponent } from './modules/shopping/component/shop-c/shop-c.component';
import { ShopDComponent } from './modules/shopping/component/shop-d/shop-d.component';
import { ShopEComponent } from './modules/shopping/component/shop-e/shop-e.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
