import { Component } from '@angular/core';

@Component({
  // Component decorator
  selector: 'app-root',
  // selezione il tag <app-root> presente nell' index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 { color: dodgerblue }
  // `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  // title era usato in app.component.html
  // name = 'My Angular-test-app';
}
