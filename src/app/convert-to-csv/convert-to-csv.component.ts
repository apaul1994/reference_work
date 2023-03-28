import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-convert-to-csv',
  templateUrl: './convert-to-csv.component.html',
  styleUrls: ['./convert-to-csv.component.scss']
})
export class ConvertToCsvComponent implements OnInit{

  constructor(private service:CommonService){
  }
  ngOnInit(): void {
    this.service.getTextForCsv()
    .subscribe((data)=>{
      let dataMod = data.replaceAll('\r','')
      this.data=dataMod
    })
  
  }

  public data:any;
  
  // install these two
  // npm i -S @types/file-saver
  // npm i -S file-saver

  generateFile() {
    const blob = new Blob([this.data], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "File_name.csv");
    }
}
