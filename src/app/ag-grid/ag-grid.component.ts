import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription, tap } from 'rxjs';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit, OnDestroy{
  constructor(private service:CommonService){}
  
  public rowData:any;
  public postData:any;

  ngOnInit(): void {
    console.log("Inside OnInit");
    this.service.getDummyData().subscribe((data)=>{
      this.rowData=data;
    });

    this.service.getDummyPost().pipe(delay(2000))
    .subscribe((data)=>{
      console.log(data);
      this.postData = data;
    })
  }
  columnDefs = [
    {headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

  columnDef1 = [
    {headerName: 'Id', field: 'id' },
		{headerName: 'UserId', field: 'userId' },
		{headerName: 'Title', field: 'title'}
	];
  columnDef2 = [

    
    {headerName: 'age', field: 'age' },
		{headerName: 'athlete', field: 'athlete' },
		{headerName: 'bronze', field: 'bronze'},
		{headerName: 'country', field: 'country'},
		{headerName: 'date', field: 'date'},
		{headerName: 'gold', field: 'gold'},
		{headerName: 'silver', field: 'silver'},
		{headerName: 'sport', field: 'sport'},
		{headerName: 'total', field: 'total'},
		{headerName: 'year', field: 'year'},
	];

  onGridReady(event:any){
    console.log(event)
  }

  ngOnDestroy(): void {
  }

}
