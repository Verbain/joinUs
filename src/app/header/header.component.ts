import {Component, Input, OnInit} from '@angular/core';
import {JoinUsEvent} from '../Model/JoinUsEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  eventsTransmited = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  eventAdd(event) {
    console.log(event);
    this.eventsTransmited.push(event);
    console.log(this.eventsTransmited);
  }
}
