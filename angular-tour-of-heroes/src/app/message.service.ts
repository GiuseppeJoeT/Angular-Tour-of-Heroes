import { Injectable } from '@angular/core';

@Injectable({
  // A provider is something that can create or deliver a service;
  // in this case, it instantiates the HeroService class to provide the service at root level
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
