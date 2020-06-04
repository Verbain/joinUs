import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JoinUsEvent} from '../../Model/JoinUsEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() events;
  constructor() { }

  ngOnInit() {
  }

}
