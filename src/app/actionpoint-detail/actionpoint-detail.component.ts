import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionPoint, ActionPointEndpointService, Note, NoteEndpointService } from '../service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import { ToastrService } from 'ngx-toastr';
import { userInfo } from 'os';
import { KeycloakAngularModule } from 'keycloak-angular';

@Component({
  selector: 'app-actionpoint-detail',
  templateUrl: './actionpoint-detail.component.html',
  styles: []
})
export class ActionpointDetailComponent implements OnInit {

  disabled: Boolean = false;
  actionPoint: ActionPoint  = new ActionPoint();
  listOfNotes: Note[] = [];
  note: Note = new Note;

  constructor(private router: Router, private actionpointService: ActionPointEndpointService, 
    private route: ActivatedRoute, private noteEndpointService: NoteEndpointService, 
    private _location: Location, private toastr: ToastrService) { }

  ngOnInit() {
    this.getActionPoint();
  }

  update() {
    this.actionpointService.updateActionPointUsingPUT(this.actionPoint.id, this.actionPoint)
      .finally(this.showUpdated)
      .subscribe(actionPoint => this.actionPoint = actionPoint);
      this.showUpdated();
  }

  delete() {
    this.actionpointService.deleteActionPointUsingDELETE(this.actionPoint.id)
      .finally(() => this._location.back())
      .subscribe(actionPoint => this.actionPoint = actionPoint);
  }

  addComment() {
    this.noteEndpointService.createNoteUsingPOST(this.note)
    .subscribe(note => {
      note.author = KeycloakAngularModule.length
      note => this.note = note;
      this.addCommentToActionPoint(note)
    })
  }

  getActionPoint(){
    this.route.params
      .map(params => params['actionId'])
      .switchMap(id => this.actionpointService.getActionPointUsingGET(id))
      .subscribe(actionPoint => {
        this.actionPoint = actionPoint;
        this.actionPoint.listOfNotes.forEach(noteId => {
          this.noteEndpointService.getNoteUsingGET(noteId)
          .subscribe(note => this.listOfNotes.push(note))
        })  
      })
  }

  addCommentToActionPoint(note: Note){
    this.actionPoint.listOfNotes.push(note.id)
    this.actionpointService.updateActionPointUsingPUT(this.actionPoint.id, this.actionPoint)
    .finally(this.showUpdated)
    .subscribe(actionPoint => {
      this.listOfNotes = [];
      this.actionPoint = actionPoint;
      actionPoint.listOfNotes.forEach(noteId=>{
        this.noteEndpointService.getNoteUsingGET(noteId)
        .subscribe(note => this.listOfNotes.push(note))
      })
    })
  }

  checkClicked(val){
    if(val){
      this.disabled = false;
    } else{
      this.disabled = true;
    }
    console.log(val);
  }

showUpdated() {
  this.toastr.info('Action Point Updated!', '', {positionClass: "toast-bottom-left"});
}

showCommented() {
  this.toastr.info('Comment added!', '', {positionClass: "toast-bottom-left"});
}

}
