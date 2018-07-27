import { Component, OnInit } from '@angular/core';
import { ActionPoint, ActionPointEndpointService } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actionpoint-create',
  templateUrl: './actionpoint-create.component.html',
  styles: []
})
export class ActionpointCreateComponent implements OnInit {

actionPoint: ActionPoint = new ActionPoint();

  constructor(private router: Router, private actionPointService: ActionPointEndpointService) { }

  ngOnInit() {
  }

  create(){
    this.actionPointService.createActionPointUsingPOST(this.actionPoint)
      .finally(() => this.router.navigate(['/action-list']))
      .subscribe();
  }

}
