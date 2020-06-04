import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../operations/services/login/login.component';
import { EventListComponent } from '../operations/components/event/event-list/event-list.component';
import { EventItemComponent } from '../operations/components/event/event-item/event-item.component';
import { HeaderComponent } from '../operations/components/header/header.component';
import { MapComponent } from '../operations/components/map/map.component';
import { MapListComponent } from '../operations/components/map-list/map-list.component';
import { EventModalComponent } from '../operations/components/event/event-modal/event-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthButtonComponent } from '../operations/services/auth-button/auth-button.component';
import { LogoutComponent } from '../operations/services/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MapComponent,
    MapListComponent,
    EventModalComponent,
    EventListComponent,
    EventItemComponent,
    AuthButtonComponent,
    LogoutComponent,
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
