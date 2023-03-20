import { Injectable } from '@angular/core';
import { interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http : HttpClient) { }
  dummyData = of([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'asf', model: 'gasd', price: 874100 },
    { make: 'Poryertsche', model: 'tww', price: 82000 }
  ]);
  getDummyData(){

    return this.dummyData;
  }

  getInterval(){
    return interval(1000);
  }

  getDummyPost(){
    return this.http.get('https://www.ag-grid.com/example-assets/olympic-winners.json');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
