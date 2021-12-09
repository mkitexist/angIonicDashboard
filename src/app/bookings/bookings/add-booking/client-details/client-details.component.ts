import { SelectorContext, SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  form!: FormGroup;
  dropValue: string = "choose";
  constructor(private rootForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootForm.control.get('clientdetails') as FormGroup;
    // this.form = new FormGroup({
    //   title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(3)] }),
    //   email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.email] }),
    //   phone: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] }),
    //   notes: new FormControl(null, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(180)] }),
    //   company: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   address: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   city: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   state: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   zip: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
    //   country: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),


    // })
  }
  // onSaveClientDetails() {
  //   if (!this.form.valid && this.dropValue === "choose") {
  //     return;
  //   } else {
  //     console.log(this.form.value);
  //   }
  // }
}
