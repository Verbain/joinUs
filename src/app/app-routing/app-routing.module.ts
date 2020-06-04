import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from '../auth.guard';
import {LoginComponent} from '../login/login.component';
import {HeaderComponent} from '../header/header.component';
import {MapComponent} from '../map/map.component';
import {MapListComponent} from '../map-list/map-list.component';

/* Routes */
const routes: Routes = [
  /* Redirect the empty path to the auth path */
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  /* Route for login component */
  { path: 'login', component: LoginComponent},
  /* Route for the admin component, canActivate guard the route for user not logged */
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent },
  { path: 'map/:name', component: MapComponent },
  { path: 'mapList', component: MapListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
