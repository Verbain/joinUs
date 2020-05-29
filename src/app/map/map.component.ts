import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MapParams} from '../Types/map-params.types';
import {Promotion} from '../enums/promotion.enum';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public name: string;
  public showMapAll: boolean;
  public showMapP2022: boolean;
  public showMapP2023: boolean;
  public showMapP2024: boolean;
  public showMapP2025: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    }
    /*
    Select map to display for the user
     */
    public mapChoose(): void {
      this.name = (this.activatedRoute.snapshot.params as MapParams).name;
      this.showMapAll = false;
      this.showMapP2022 = false;
      this.showMapP2023 = false;
      this.showMapP2024 = false;
      this.showMapP2025 = false;
      if (this.name === Promotion.P2022)
      {
        this.showMapP2022 = !this.showMapP2022;
        console.log('switch to p2022 map complete');
      }
      else if (this.name === Promotion.P2023)
      {
        this.showMapP2023 = !this.showMapP2023;
        console.log('switch to p2023 map complete');
      }
      else if (this.name === Promotion.P2024)
      {
        this.showMapP2024 = !this.showMapP2024;
        console.log('switch to p2024 map complete');
      }
      else if (this.name === Promotion.P2025)
      {
        this.showMapP2025 = !this.showMapP2025;
        console.log('switch to p2025 map complete');
      }
      else if (this.name === Promotion.All)
      {
        this.showMapAll = !this.showMapAll;
        console.log('switch to All map complete');
      }
}
  }

