import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionpointListComponent } from './actionpoint-list/actionpoint-list.component';
import { ActionpointCreateComponent } from './actionpoint-create/actionpoint-create.component';
import { ActionpointDetailComponent } from './actionpoint-detail/actionpoint-detail.component';
import { WorkingListComponent } from './working-list/working-list.component';
import { EshcHomeComponent } from './eshc-home/eshc-home.component';
import { WorkingCreateComponent } from './working-create/working-create.component';

const routes: Routes = [
  {path: '', component: WorkingListComponent},
  {path: 'action-create/:workingId', component: ActionpointCreateComponent},
  {path: 'action-detail/:actionId', component: ActionpointDetailComponent},
  {path: 'action-list/:workingId', component: ActionpointListComponent},
  {path: 'working-list', component: WorkingListComponent},
  {path: 'working-create', component: WorkingCreateComponent},
  {path: 'eshc-home', component: EshcHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
