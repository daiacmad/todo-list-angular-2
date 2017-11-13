import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Hero } from "../hero";
import {HeroDataService} from '../hero-data.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDataService],
})
export class HeroDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute , private heroDataService:HeroDataService) { }

  heroDetail : Hero = new Hero();
  ngOnInit() {
  	// get URL parameters
    const HeroId = this.route
        .params
        .subscribe(params => {
        	this.heroDataService.getHeroDetail(params['id']).subscribe(response =>{
        		this.heroDetail = response;
        	});
    })
  }

}
