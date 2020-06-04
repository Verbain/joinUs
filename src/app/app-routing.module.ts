import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../operations/guards/auth.guard';
import {LoginComponent} from '../operations/services/login/login.component';
import {MapComponent} from '../operations/components/map/map.component';


/* Routes */
const routes: Routes = [
  /* Redirect the empty path to the auth path */
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  /* Route for login component */
  { path: 'login', component: LoginComponent},
  /* Route for the admin component, canActivate guard the route for user not logged */
  { path: 'map/:name', component: MapComponent, canActivate: [AuthGuard] },
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
