import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkingGroupEndpointService, WorkingGroup } from '../service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-working-create',
  templateUrl: './working-create.component.html',
  styles: []
})
export class WorkingCreateComponent implements OnInit {

  workingGroup: WorkingGroup = new WorkingGroup();

  constructor(private router: Router, private workingGroupService: WorkingGroupEndpointService, 
    private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
  }

  create(){
    this.workingGroupService.createWorkingGroupUsingPOST(this.workingGroup)
      .subscribe(workingGroup => {
        this.workingGroup = workingGroup;
        let workingId = workingGroup.id;
        this.navigateBack(workingId)
      });
    
  }

  navigateBack(id: number){
    this.router.navigate(['/action-list', id])
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
