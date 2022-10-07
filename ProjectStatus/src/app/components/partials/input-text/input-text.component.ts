import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required:'Should not be empty',
  email:'Email is not valid',
  minlength: 'Field is too short', 

} 

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() className!: string;

  @Input() control!: AbstractControl; 
  @Input() showErrorWhen: boolean = true;
  @Input() type!: string;
  @Input() label: 'text' | 'password' | 'email' = 'text';


  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    })
  }

  checkValidation(){

    
    const errors = this.control.errors;
    console.log('errors',errors)
    console.log('showErrorWhen',this.showErrorWhen)

    if(!errors){
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);

    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
    console.log('errorMessages',this.errorMessages)
  }


  get formControls() {
    return this.control as FormControl;
  }

  

  constructor() {


   }

  

}
