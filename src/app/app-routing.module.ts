import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionpointListComponent } from './actionpoint-list/actionpoint-list.component';
import { ActionpointCreateComponent } from './actionpoint-create/actionpoint-create.component';
import { ActionpointDetailComponent } from './actionpoint-detail/actionpoint-detail.component';

const routes: Routes = [
  {path: '', component: ActionpointListComponent},
  {path: 'action-create', component: ActionpointCreateComponent},
  {path: 'action-detail/:actionId', component: ActionpointDetailComponent},
  {path: 'action-list', component: ActionpointListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
