import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actionpoint-detail',
  templateUrl: './actionpoint-detail.component.html',
  styles: []
})
export class ActionpointDetailComponent implements OnInit {

  actionPoint = {
      id: "1",
      title: "Clean the hallway",
      description: "The hallway needs cleaned before the party at the weekend",
      imageURL: "https://cdn4.iconfinder.com/data/icons/city-life/500/work-512.png",
      leadContributor: "Daniel McCarragher",
      listOfContributors: [
        "Daniel McCarragher",
        "Rob Grierson"
      ],
      status:"Started"
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete() {
    //invoke our REST API
    this.router.navigate(['/action-list']);
  }

}
