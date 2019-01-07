import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// This marks the class as one that participates in the dependency injection system.
@Injectable({

  // A provider is something that can create or deliver a service;
  // in this case, it instantiates the HeroService class to provide the service.
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes method returns the mock heroes
  getHeroes(): Hero[] {
    return HEROES;
  }
}
