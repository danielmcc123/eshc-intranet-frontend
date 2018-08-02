import { Component, OnInit } from '@angular/core';
import { ActionPoint, ActionPointEndpointService, WorkingGroupEndpointService } from '../service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actionpoint-create',
  templateUrl: './actionpoint-create.component.html',
  styles: []
})
export class ActionpointCreateComponent implements OnInit {

actionPoint: ActionPoint = new ActionPoint();

  constructor(private router: Router, private actionPointService: ActionPointEndpointService, private workingGroupService: WorkingGroupEndpointService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  create(){
    this.actionPointService.createActionPointUsingPOST(this.actionPoint)
      .subscribe(actionPoint => {
        this.actionPoint = actionPoint;
        let actionId = actionPoint.id;
        let workingId = this.route.snapshot.params.workingId
        this.addActionPointToWorkingGroup(actionId, workingId);
      });
    
  }

  addActionPointToWorkingGroup(actionId: number, workingId){
    this.workingGroupService.addActionPointUsingPOST(actionId, workingId)
    .finally(() => this.router.navigate(['/action-list', workingId]))
    .subscribe()
  }

}
