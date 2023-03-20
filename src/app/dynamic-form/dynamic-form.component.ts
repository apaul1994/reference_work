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
    this.ClientDetail[index].addValidators([this.checkDuplicateClient(index)]);
  }

  removeClient(i:number){
    (<FormArray>this.clients.controls['clientsDetail']).removeAt(i);
  }

  createClient(){
    console.log(this.ClientDetail[0].value)
    // this.checkDuplicates();
    console.log('form submitted');
    console.log("Check Form status", this.clients.invalid);
  }

  checkDuplicateClient(index:number):any{
    return((control:FormControl)=>{
      const formArray = control.parent? control.parent as FormArray: null;
      if(formArray && formArray.controls.length>1){
        for (let i = 0; i < formArray.controls.length-1; i++) {
          if ((formArray.at(i) as FormControl).value == control.value)
            return { errorRepeat: true };
        }
        return null;
        }
      return null;
      }
      )
  }
}
