import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventItemComponent } from './event/event-item/event-item.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MapListComponent } from './map-list/map-list.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthButtonComponent } from './auth-button/auth-button.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    MapComponent,
    MapListComponent,
    EventModalComponent,
    EventListComponent,
    EventItemComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
