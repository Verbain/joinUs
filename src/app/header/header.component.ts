import {Component, Input, OnInit} from '@angular/core';
import {JoinUsEvent} from '../Model/JoinUsEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() joinUsEvent: JoinUsEvent[];
  joinUsEventEmitter: JoinUsEvent;
  constructor() {
  }

  ngOnInit(): void {
  }

  sendJoinUsEvent(joinUsEvent){
    this.joinUsEventEmitter = joinUsEvent;
  }
}
