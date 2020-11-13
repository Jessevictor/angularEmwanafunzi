import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopAComponent } from './modules/shopping/component/shop-a/shop-a.component';
import { ShopBComponent } from './modules/shopping/component/shop-b/shop-b.component';
import { ShopCComponent } from './modules/shopping/component/shop-c/shop-c.component';
import { ShopDComponent } from './modules/shopping/component/shop-d/shop-d.component';
import { ShopEComponent } from './modules/shopping/component/shop-e/shop-e.component';
import { HomeComponent } from './modules/home/component/home/home.component';



const routes: Routes = [
  { path: 'shopA', component:ShopAComponent},
  { path: 'shopB', component:ShopBComponent},
  { path: 'shopC', component:ShopCComponent},
  { path: 'shopD', component:ShopDComponent},
  { path: 'shopE', component:ShopEComponent},
  { path: '', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
