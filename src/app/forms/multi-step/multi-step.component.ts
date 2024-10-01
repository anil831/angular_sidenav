import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css']
})
export class MultiStepComponent implements OnInit {
  signupForm:FormGroup;
  step:number=1; // Track the current step
  


  constructor(private fb:FormBuilder) { 
    this.signupForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/)]]
    })
  }

  ngOnInit() {
    this.signupForm.get('email')?.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(() => {
      // Move to the next step if the email is valid
      // if (this.signupForm.get('email')?.valid) {
      //   this.step = 2;
      // }
    });
  }

  next() {
    if (this.step < 2) {
      this.step++;
    }
  }

  back() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted:', this.signupForm.value);
    }
  }

  // Check password criteria
  checkPasswordCriteria() {
    const password = this.signupForm.get('password')?.value || '';
    return {
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
      length: password.length >= 8 && password.length <= 128
    };
  }

}
