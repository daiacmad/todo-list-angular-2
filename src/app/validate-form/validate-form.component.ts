import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  constructor() { }

  model= {
    email: "",
  }
  
  ngOnInit() {

  }

  submitform(value){
    console.log(value);
  }

  changeEmail(value){
    console.log(value);
  }
}
