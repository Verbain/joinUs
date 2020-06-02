import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JoinUsEvent} from '../../Model/JoinUsEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() joinUsEvent: JoinUsEvent[];
  @Output() joinUsEventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.joinUsEvent = [
      new JoinUsEvent('Tech&Code Déjeuner', '10/01', '12:00', 'Aujourd\'hui on se retrouvent pour déjeuner ensemble.' )
    ];
  }

  sendJoinUsEvent(joinUsEventEmitter) {
    this.joinUsEventEmitter.emit(joinUsEventEmitter);
  }
}
