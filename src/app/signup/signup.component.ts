import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,  FormGroup,  Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hobbiesList: any = [
    { id: 1, name: 'playing' },
    { id: 2, name: 'singing' },
    { id: 3, name: 'travelling' }
    ];



  fileData !: any;
  signupForm:any = FormGroup;
  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute, private router: Router) {

    this.signupForm = fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      pswd: ['', Validators.required],
      pswd1: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      dropdown: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: this.formBuilder.array([], [Validators.required]),
      


    });
  }
  onCheckboxChange(e: any) {
    const hobbies: FormArray = this.signupForm.get('hobbies') as FormArray;


    if (e.target.checked) {
      hobbies.push(new FormControl(e.target.value));

    } else {
      const index = hobbies.controls.findIndex(x => x.value === e.target.value);
      hobbies.removeAt(index);

    }
  }

    postDataValues() {

      this.api.postData(this.signupForm.value)
        .subscribe((res: any) => {
          console.log(res);
          alert("record added succesfully")
           this.signupForm.reset();
         
          // this.router.navigate(['view'])
        },
          err => {
            alert("something went wrong")
          })
  

    
    

   }

  ngOnInit(): void {

    
  }

}
