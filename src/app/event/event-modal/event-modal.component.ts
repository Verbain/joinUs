import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {JoinUsEvent} from '../../Model/JoinUsEvent';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  modalRef: BsModalRef;
  indexEvent: JoinUsEvent;
  @Input() events = [];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'grey modal-lg'})
    );
  }

  addEvent(name: string, date: string, hour: string, description: string) {
    this.indexEvent = new JoinUsEvent(name, date, hour, description);
    this.events.push(this.indexEvent);
    this.modalRef.hide();
  }
}
