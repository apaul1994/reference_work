import { AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ada-comp',
  templateUrl: './ada-comp.component.html',
  styleUrls: ['./ada-comp.component.scss']
})
export class AdaCompComponent implements OnInit,AfterViewChecked{
  ngOnInit(): void {
    console.log("OnInit")
    this.adaEl = document.getElementsByClassName("ada")
    this.elementNo = 0;
    console.log(this.adaEl)
  }
  public adaEl:any;
  public elementNo:number = -1;
  ngAfterViewChecked(): void {
    this.adaEl[this.elementNo].focus();
  }
  
  @HostListener('document:keydown.ArrowRight', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.elementNo = this.elementNo==(this.adaEl.length-1)? 0:(this.elementNo+1);
  }
  @HostListener('document:keydown.ArrowLeft', ['$event'])
  onKeyUpHandler(event: KeyboardEvent) {
    this.elementNo = this.elementNo<=0? this.adaEl.length-1:(this.elementNo-1);
  }

}
