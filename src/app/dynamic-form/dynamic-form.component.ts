import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{

  clients!:FormGroup;
  checkDuplicate=false;
  errorPlace = -1;
  constructor(private fb:FormBuilder){}


  ngOnInit(): void {
    console.log("onInit started");
    this.generateForm();
    this.addClient();
  }

  generateForm(){
    console.log("form generated");
    this.clients=this.fb.group({
      clientsDetail:this.fb.array([])
    })
  }

  get ClientDetail(){
    return (<FormArray>this.clients.get("clientsDetail")).controls;
  }

  addClient(){
    console.log("add Client");
    let index = this.ClientDetail.length;
    let newClientAdd = new FormControl(null);
    (<FormArray>this.clients.controls['clientsDetail']).push(newClientAdd)
    // this.ClientDetail[index].addValidators([this.checkDuplicateClient(index)]);
  }

  removeClient(i:number){
    (<FormArray>this.clients.controls['clientsDetail']).removeAt(i);
  }

  createClient(){
    console.log(this.ClientDetail[0].value)
  }


  checkValidity():any{
    this.errorPlace=-1;
    if(this.ClientDetail.length>1){
      let validity = false;
      for(let i=this.ClientDetail.length-1;i>=0;i--){
        if(this.ClientDetail[i].value == null || this.ClientDetail[i].value == ''){
          return true;
        }
        for(let j=i-1;j>=0;j--){
          if(this.ClientDetail[i].value==this.ClientDetail[j].value){
            this.errorPlace = i;
            return true
          }
        }
      }
      return validity;
    }
    else if(this.ClientDetail.length == 1){
      if(this.ClientDetail[0].value == null){
        return true;
      }
    }
    else return false
  }
}
