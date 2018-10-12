import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ActionpointListComponent } from './actionpoint-list/actionpoint-list.component';
import { ActionpointDetailComponent } from './actionpoint-detail/actionpoint-detail.component';
import { ActionpointCreateComponent } from './actionpoint-create/actionpoint-create.component';
import { ActionPointEndpointService, WorkingGroupEndpointService, NoteEndpointService } from './service';
import { WorkingListComponent } from './working-list/working-list.component';
import { EshcHomeComponent } from './eshc-home/eshc-home.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { WorkingCreateComponent } from './working-create/working-create.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ActionpointListComponent,
    ActionpointDetailComponent,
    ActionpointCreateComponent,
    WorkingListComponent,
    EshcHomeComponent,
    WorkingCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ActionPointEndpointService, WorkingGroupEndpointService, NoteEndpointService,
    {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
