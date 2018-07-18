import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actionpoint-list',
  templateUrl: './actionpoint-list.component.html',
  styles: []
})
export class ActionpointListComponent implements OnInit {

  nbActionPoints: number = 2;
  actionPoints = [
    {
    id: "1",
    title: "Clean the hallway",
    description: "The hallway needs cleaned before the party at the weekend",
    imageURL: "https://cdn4.iconfinder.com/data/icons/city-life/500/work-512.png"
    },
    {
      id: "2",
      title: "Write up party proposal for 78th GM",
      description: "I need to write up this very important proposal to do with having more parties",
      imageURL: "https://cdn4.iconfinder.com/data/icons/city-life/500/work-512.png"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
