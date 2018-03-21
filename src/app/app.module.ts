import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './fakebackend.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { routing }  from './app.router';
import { AuthGuard } from './guard.service';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard,AuthenticationService,UserService,fakeBackendProvider,MockBackend,BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }