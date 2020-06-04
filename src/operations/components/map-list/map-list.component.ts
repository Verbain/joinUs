import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Promotion} from '../../../app/enums/promotion.enum';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  public promotions: string [] ;
  constructor(private router: Router) {
    this.promotions = Object.values(Promotion);
  }

  ngOnInit(): void {
  }
  public changeMap(index: number): void{
    this.router.navigate([`map/${this.promotions[index]}`]);
  }
}
