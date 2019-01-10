import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
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
  // hero = 'Windstorm';

  // component property, from mock-heroes.ts
  // heroes = HEROES; refactoring after adding HeroService
  heroes: Hero[];

  //  When the app starts, the selectedHero is undefined by design
  selectedHero: Hero;

  //  singleton instance of HeroService
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // Observable.subscribe()
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  // Add the click event handler
  onSelect(hero: Hero): void {
    //  void: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.

    this.selectedHero = hero;
  }

}


