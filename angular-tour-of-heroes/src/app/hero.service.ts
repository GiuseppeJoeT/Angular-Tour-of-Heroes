import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, from } from 'rxjs';
import { MessageService } from './message.service';

// This marks the class as one that participates in the dependency injection system.
@Injectable({

  // A provider is something that can create or deliver a service;
  // in this case, it instantiates the HeroService class to provide the service.
  providedIn: 'root'
})
export class HeroService {

  // Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TO DO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
