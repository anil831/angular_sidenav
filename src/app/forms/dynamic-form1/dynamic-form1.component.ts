import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormArray, Validators} from "@angular/forms";
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-dynamic-form1',
  templateUrl: './dynamic-form1.component.html',
  styleUrls: ['./dynamic-form1.component.css'],
  animations: [
    trigger('formAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class DynamicForm1Component implements OnInit {

  personalDetailsForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.personalDetailsForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      employmentDetails: this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  get employmentDetails(): FormArray{
    return this.personalDetailsForm.get('employmentDetails') as FormArray;
  }

  addEmployment():void{
    const employmentForm = this.fb.group({
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.employmentDetails.push(employmentForm)
  }

  removeEmployment(index:number):void{
    this.employmentDetails.removeAt(index);
    
  }

  onSubmit():void{
    if(this.personalDetailsForm.valid){
      console.log("Personal Details:", this.personalDetailsForm.value);
    }else{
      console.log("Form is invalid");
      
    }
  }
  
}
