import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ActionpointListComponent } from './actionpoint-list/actionpoint-list.component';
import { ActionpointDetailComponent } from './actionpoint-detail/actionpoint-detail.component';
import { ActionpointCreateComponent } from './actionpoint-create/actionpoint-create.component';
import { ActionPointEndpointService } from './service';


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
    FormsModule,
    HttpClientModule
  ],
  providers: [ActionPointEndpointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
