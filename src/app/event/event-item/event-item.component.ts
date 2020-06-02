import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JoinUsEvent} from '../../Model/JoinUsEvent';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() joinUsEvent: JoinUsEvent[];
  constructor() { }

  ngOnInit(): void {
  }
}
