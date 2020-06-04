import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JoinUsEvent} from '../../../../app/Models/JoinUsEvent';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event;
  constructor() { }

  ngOnInit(): void {
  }
}
