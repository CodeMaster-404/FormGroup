import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule(
{
  declarations: [
    // DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ],
})
export class AuthModule {}

