import { Component, OnInit } from '@angular/core';
import { ActionPoint, ActionPointEndpointService } from '../service';

@Component({
  selector: 'app-actionpoint-list',
  templateUrl: './actionpoint-list.component.html',
  styles: []
})
export class ActionpointListComponent implements OnInit {

  nbActionPoints: number;
  actionPoints: ActionPoint[];
  
  constructor(private actionpointService: ActionPointEndpointService) { }

  ngOnInit() {
    this.actionpointService.countAllActionPointsUsingGET().subscribe(nbActionPoints => this.nbActionPoints = nbActionPoints);
    this.actionpointService.getActionPointsUsingGET().subscribe(actionPoints => this.actionPoints = actionPoints.content);
  }


}
