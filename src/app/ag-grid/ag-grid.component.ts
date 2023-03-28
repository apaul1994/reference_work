import { AfterViewChecked, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { IGetRowsParams,ColDef,ICellRendererParams } from 'ag-grid-community';
import { filter, of } from 'rxjs';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit{
  @ViewChild('tableGrid') grid!: AgGridAngular;
  // public columnDefs!: ColDef[];
  public rowData!: any[];
  public gridOptions:any;
  private gridApi:any;
  public rows:any;
  public lastRow:any=20;
  public dataload:number=20;
  public showEditForm=false;
  public editIds:any;
  public editTermilal!:FormGroup;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  constructor(public service:CommonService, public fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.gridOptions = {
      cacheBlockSize: 20,
      maxBlocksInCache: 20,
      // rowModelType: 'serverSide',
    };
  }
  public columnDefs: ColDef[]= [
      {
        field: 'id',
        // flex: 0.1,
        checkboxSelection: true,
        headerCheckboxSelection:true,
      },
      { headerName: 'USER-ID', field: 'userId'},
      { headerName: 'TITLE', field: 'title', width:800 }
    ];
    
  


  // private getRowData(startRow: number, endRow: number) {
  //   // this.totalRows = this.rows.length
  //   console.log(this.rows.slice(startRow,endRow))
  //   return of(this.rows.slice(startRow,endRow));
  // }

  onGridReady(params: any) {
    this.gridApi = params.api;
    console.log(params)
    console.log(this.gridApi.rowRenderer);
    console.log(this.gridApi);
    this.service.getDummyPost().subscribe((data)=>{
      this.rows=data;
      this.rowData=this.rows
      params.api.setDomLayout('normal');
    })
  }

  editBulk(){
    let payload = {
      "id":null,
      "changeData":{
        "userId":this.editTermilal.controls["userId"].value,
        "title":this.editTermilal.controls["title"].value
      }
    }
     payload["id"] = this.editIds;
    console.log(payload)
    this.editIds = null;

  }

  generateFormForEdit(){
    this.showEditForm=true;
    this.editIds = this.gridApi.getSelectedRows().map((data:any)=>{
      return data['id']
    })
    this.editTermilal = this.fb.group({
      'userId':['',[Validators.required]],
      'title':['', [Validators.required]]
    })
  }
}
