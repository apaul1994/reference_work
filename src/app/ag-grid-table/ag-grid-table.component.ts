import { AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.scss']
})
export class AgGridTableComponent implements OnInit, AfterViewChecked{
  public data:any=[];
  public selectAll:boolean = false;
  public selectedData:any = [];
  
  constructor(private service:CommonService, private cf:ChangeDetectorRef){}
  ngAfterViewChecked() {
  }

  ngOnInit() {
    this.callData();
    this.selectAll = false
    this.chekcValue()
  }

  callData(){
    this.service.getUserList().subscribe((data:any)=>{
      data.forEach((row:any) => {
        this.data.push(row)
      });
    })
  }

  sortDate(data:String){
    console.log(data);
  }

  chekcValue(){
    this.selectedData = [];
    if(this.selectAll){
      if(this.data){
        this.data.forEach((data:any) => {
          this.selectedData.push(data.id)
          this.cf.detectChanges();
        });
      }
    }
  }


  chekcValueIndividual(data:number){
    console.log(data)
    let notPresent = this.checkInArray(data)
    if(notPresent){
      this.selectedData.push(data);
    }
    else{
      this.selectAll = false
      this.selectedData.pop(data)
    }
  }

  checkInArray(data:number){
    return (this.selectedData.indexOf(data)==-1)
  }

  @HostListener('window:scrollend', ['$event']) 
  scrollHandler(event:any) {
    let scrollHeight = event.target.scrollHeight;
    let scrollTop = event.target.scrollTop;
    let clientHeight = event.target.clientHeight;
    let scrollBottom = scrollHeight - (scrollTop+clientHeight);
    if(scrollBottom<1){
      this.callData();
    }
  }


}
