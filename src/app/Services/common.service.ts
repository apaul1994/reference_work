import { Injectable } from '@angular/core';
import { interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http : HttpClient) { }

  getInterval(){
    return interval(1000);
  }

  getDummyPost(){
    // return this.http.get<UsedObject[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getTextForCsv(){
    return this.http.get('http://localhost:5000/api/auth/test', { responseType: 'text' });
  }
}
