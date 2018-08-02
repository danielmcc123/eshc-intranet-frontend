import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionPoint, ActionPointEndpointService, WorkingGroupEndpointService, WorkingGroup } from '../service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-actionpoint-list',
  templateUrl: './actionpoint-list.component.html',
  styles: []
})
export class ActionpointListComponent implements OnInit {

  nbActionPoints: number;
  actionPoints: ActionPoint[];
  workingGroup: WorkingGroup  = new WorkingGroup();
  constructor(private router: Router, private workingGroupService: WorkingGroupEndpointService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .map(params => params['workingId'])
    .switchMap(id => this.workingGroupService.getWorkingGroupUsingGET(id))
    .subscribe(workingGroup => this.workingGroup = workingGroup)

    this.route.params
    .map(params => params['workingId'])
    .switchMap(id => this.workingGroupService.getActionPointsUsingGET1(id))
    .subscribe(actionPoints => this.actionPoints = actionPoints.content)
  }

}
