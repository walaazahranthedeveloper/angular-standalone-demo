import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'; // Required for standalone components

@Component({
  selector: 'app-standalone',
  standalone: true, // Declare as a standalone component
  imports: [CommonModule], // Import CommonModule to use basic Angular features
  template: `
    <h2>Standalone Component with Data Service</h2>
    <ul>
      <li *ngFor="let item of apiData">
        {{ item.title }}
      </li>
    </ul>
  `,
})
export class StandaloneComponent implements OnInit {

  apiData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data => {
      this.apiData = data;
      this.dataService.storeData(data);  // Cache the data in the service
    });
  }
}
