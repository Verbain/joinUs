import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    EventModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
