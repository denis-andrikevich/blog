import { AuthGuard } from './services/auth-guard.service';
import { ControlMessageComponent } from './control-message/control-message.component';
import { AuthService } from './services/auth.service';
import { BlogRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { apiHttpServiceProvider } from './services/apiHttp.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ControlMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BlogRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthService,
    apiHttpServiceProvider,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
