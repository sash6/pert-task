import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personalForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public userService: UserService) { }

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],      
      gender: ['', [Validators.required]],    
      addresses: this.formBuilder.array([ this.addSkillFormGroup()])
    });    
  }

  onSubmit(): void {
    console.log(this.personalForm.value);
    if (this.personalForm.valid) {           
      this.userService.formSubmit(this.personalForm.value)
        .subscribe(
          data => {      
            console.log('succes..')  
            this.personalForm.reset();    
          },
          error => {           
            this.personalForm.reset();   
            // console.log('error:::', error);            
          }
        )
    }

  }

  addSkillButtonClick(): void {  
    (<FormArray>this.personalForm.get('addresses')).push(this.addSkillFormGroup());
  }

  addSkillFormGroup(): FormGroup {
    return this.formBuilder.group({
      village: ['', Validators.required],
      street:  ['', Validators.required],    
    });
  } 
}
