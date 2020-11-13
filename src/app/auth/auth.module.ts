import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResourcesComponent } from './components/resources/resources.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ResourcesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
