import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkingGroupEndpointService, WorkingGroup } from '../service';

@Component({
  selector: 'app-working-list',
  templateUrl: './working-list.component.html',
  styles: []
})
export class WorkingListComponent implements OnInit {

  workingGroups: WorkingGroup[];

  constructor(private router: Router, private workingGroupService: WorkingGroupEndpointService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.workingGroupService.getAllWorkingGroupsUsingGET().subscribe(workingGroups => this.workingGroups = workingGroups.content);
  }

}
