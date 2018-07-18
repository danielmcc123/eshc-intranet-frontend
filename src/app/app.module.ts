import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ActionpointListComponent } from './actionpoint-list/actionpoint-list.component';
import { ActionpointDetailComponent } from './actionpoint-detail/actionpoint-detail.component';
import { ActionpointCreateComponent } from './actionpoint-create/actionpoint-create.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionpointListComponent,
    ActionpointDetailComponent,
    ActionpointCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
