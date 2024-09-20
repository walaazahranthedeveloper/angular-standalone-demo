import { Component } from '@angular/core';
import { StandaloneComponent } from './standalone/standalone.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StandaloneComponent],  // Include the standalone component
  template: `
    <h1>Angular Standalone Component Demo</h1>
    <app-standalone></app-standalone>
  `,
})
export class AppComponent {}
