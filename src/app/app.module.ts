import { PostService } from './services/post.service';
import { ControlMessageModule } from './control-message/control-message.module';
import { ErrorNotifier } from './services/error-notifier.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BlogRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ApiHttp } from './services/apiHttp.service';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BlogRoutingModule,
    MaterialModule.forRoot(),
    ControlMessageModule
  ],
  providers: [
    ApiHttp,
    AuthService, 
    AuthGuard,
    ErrorNotifier,
    PostService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
