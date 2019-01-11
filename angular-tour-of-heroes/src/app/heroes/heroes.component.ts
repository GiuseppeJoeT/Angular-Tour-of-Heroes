import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  //  the component's CSS/HTML element selector
  selector: 'app-heroes',
  // the location of the component's template file
  templateUrl: './heroes.component.html',
  //  the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // component property, from mock-heroes.ts
  // heroes = HEROES; refactoring after adding HeroService
  heroes: Hero[];

  //  singleton instance of HeroService
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // Observable.subscribe() represents the execution of an Observable
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}


