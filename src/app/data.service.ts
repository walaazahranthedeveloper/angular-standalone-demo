import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Makes the service globally available
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Mock API

  // Cached data
  private dataStore: any[] = [];

  constructor(private http: HttpClient) {}

  // Fetch data from the API if it's not already cached
  fetchData(): Observable<any[]> {
    if (this.dataStore.length === 0) {
      return this.http.get<any[]>(this.apiUrl);
    } else {
      // Return the cached data
      return new Observable((observer) => {
        observer.next(this.dataStore);
        observer.complete();
      });
    }
  }

  // Store data locally in memory
  storeData(data: any[]) {
    this.dataStore = data;
  }

  // Get the stored data
  getStoredData(): any[] {
    return this.dataStore;
  }
}
