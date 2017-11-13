import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {HeroDataService} from '../hero-data.service';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.css'],
  providers :[HeroDataService]
})
export class HeroContainerComponent implements OnInit {

  constructor(private heroDataService: HeroDataService) { }

  heroes: Hero[] = [];

  ngOnInit() {
  	this.heroDataService
      .getAllHeroes()
      .subscribe(
        (heroes) => {
          this.heroes = heroes;
        }
      );
  }



}
