import { Component } from '@angular/core';
import { LoggerService, LoopBackConfig } from './services/lbservice';

@Component({
  selector: 'app-root',
  template: `
  <h1 style='text-align:center'>To-do-hoy</h1>
  <p style='text-align:center'> (Acordate de arrancar el backend o no vas a ver nada) </p>
  <router-outlet></router-outlet>
  <br><br>
  

  `,
  styles: []
})
export class AppComponent {
  title = 'todohoy';
  constructor(private log: LoggerService) {
    LoopBackConfig.setDebugMode(false);
    this.log.info('Component is Loaded');
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }
}
