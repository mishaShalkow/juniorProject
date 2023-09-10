import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AutorizationComponent } from './components/autorization/autorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { PostWindowComponent } from './components/post-window/post-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutorizationComponent,
    RegistrationComponent,
    MainWindowComponent,
    PostWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
