import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionPoint, ActionPointEndpointService } from '../service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-actionpoint-detail',
  templateUrl: './actionpoint-detail.component.html',
  styles: []
})
export class ActionpointDetailComponent implements OnInit {

  disabled: Boolean = false;
  actionPoint: ActionPoint  = new ActionPoint();
  constructor(private router: Router, private actionpointService: ActionPointEndpointService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['actionId'])
      .switchMap(id => this.actionpointService.getActionPointUsingGET(id))
      .subscribe(actionPoint => this.actionPoint = actionPoint)
  }

  update() {
    this.actionpointService.updateActionPointUsingPUT(this.actionPoint.id, this.actionPoint)
      .finally(() => this.router.navigate(['/action-detail', this.actionPoint.id]))
      .subscribe();
  }

  delete() {
    this.actionpointService.deleteActionPointUsingDELETE(this.actionPoint.id)
      .finally(() => this.actionpointService.getActionPointUsingGET(this.actionPoint.id))
      .subscribe(actionPoint => this.actionPoint = actionPoint);
  }

  checkClicked(val){
    if(val){
      this.disabled = false;
    } else{
      this.disabled = true;
    }
    console.log(val);
}

}
