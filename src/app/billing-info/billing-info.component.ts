import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent implements OnInit {


  @Output() initialize = new EventEmitter<FormGroup>();
  
  billingForm: FormGroup;

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
    this.billingForm = this._fb.group({
      cardNumber: [''],
      cvv: [''],
      expirationData: ['']
    })
    this.initialize.emit(this.billingForm)
  }  
}
