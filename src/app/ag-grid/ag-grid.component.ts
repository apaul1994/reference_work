import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { IGetRowsParams } from 'ag-grid-community';
import { filter, of } from 'rxjs';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent{
  public columnDefs: any[];
  public rowData!: any[];
  public gridOptions: any;
  public info!: string;
  private totalRows = 100;
  private dataLatencyInMilliSeconds = 2000;
  public rowHeight = 30;
  public rows:any;

  constructor(public service:CommonService) {
    const checkBoxColumDefn = {
      headerName: 'Select',
      field: '',
      flex: 0.1,
      filter: false,
      checkboxSelection: true,
      suppressSizeToFit: true,
      cellStyle: (params:any) => {
        if (params.data?.qtyAlloc > 0) {
          params.node.selected = true;
          params.node.selectable = true;
          return { 'pointer-events': 'none', opacity: '0.7', padding: '' };
        } else {
          params.node.selectable = true;
          return { padding: '' };
        }
      },
    };
    const col4 = { headerName: 'id ', field: 'id' };
    const col5 = { headerName: 'userId', field: 'userId' };
    const col6 = { headerName: 'title', field: 'title' };

    this.columnDefs = [checkBoxColumDefn, col4, col5, col6];

    this.gridOptions = {
      enableCellTextSelection: true,
      suppressMovableColumns: true,
      suppressLoadingOverlay: false,
      stopEditingWhenCellsLoseFocus: true,
      suppressDragLeaveHidesColumns: false,
      suppressHorizontalScroll: false,
      singleClickEdit: true,
      suppressRowClickSelection: true,
      rowSelection: 'multiple',
      cacheBlockSize: 20,
      maxBlocksInCache: Infinity,
      rowModelType: 'infinite',
    };
  }


  private getRowData(startRow: number, endRow: number) {
    this.totalRows = this.rows.length
    console.log(this.rows.slice(startRow,endRow))
    return of(this.rows.slice(startRow,endRow));
  }

  onGridReady(params: any) {
    this.service.getDummyPost().subscribe((data)=>{
      this.rows=data;
      params.api.setDomLayout('normal');
      params.api.setDatasource(this.getDataSource());
    })
  }

  private getDataSource() {
    const dataSource = {
      getRows: (params: IGetRowsParams) => {
        this.info =
          'Getting datasource rows, start: ' +
          params.startRow +
          ', end: ' +
          params.endRow;
        if (this.totalRows >= params.endRow) {
          setTimeout(() => {
            this.getRowData(params.startRow, params.endRow).subscribe(
              (data:any) => {
                params.successCallback(data, this.totalRows);
              }
            );
          }, this.dataLatencyInMilliSeconds);
        }
      },
    };
    return { ...dataSource };
  }
}
