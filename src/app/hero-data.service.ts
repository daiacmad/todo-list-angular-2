import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class HeroDataService {

  constructor(private api: ApiService) { }

  getAllHeroes(): Observable<Hero[]> {
     return this.api.getAllHeroes();
  }

  getHeroDetail(id : string): Observable<Hero>{
  	return this.api.getHeroDetail(id); 
  }
}
