import { Component, OnInit } from '@angular/core';
import { WorkingGroupEndpointService, WorkingGroup } from '../service';

@Component({
  selector: 'app-working-list',
  templateUrl: './working-list.component.html',
  styles: []
})
export class WorkingListComponent implements OnInit {

  workingGroups: WorkingGroup[];

  constructor(private workingGroupService: WorkingGroupEndpointService) { }

  ngOnInit() {
    this.workingGroupService.getAllWorkingGroupsUsingGET().subscribe(workingGroups => this.workingGroups = workingGroups.content);
  }

}
