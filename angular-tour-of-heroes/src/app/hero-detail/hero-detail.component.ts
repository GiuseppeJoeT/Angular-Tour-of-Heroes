import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
// The hero property must be an Input property, annotated with the @Input() decorator,
// because the external HeroesComponent will bind to it like this.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
