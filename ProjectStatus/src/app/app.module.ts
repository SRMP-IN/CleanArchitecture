import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { FooterComponent } from './components/partials/footer/footer.component'; 
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/partials/input-text/input-text.component';
import { ToasterComponent } from './components/partials/toaster/toaster.component';
import { ToastComponent } from './components/partials/toast/toast.component';
import { TimeLaps } from './utilities/constants/Pipes/time-laps';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent ,
    HomeComponent,
    LoginComponent,
    InputTextComponent,
    ToasterComponent,
    ToastComponent,
    TimeLaps
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
