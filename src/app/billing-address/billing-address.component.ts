import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {

  @Output() initialize = new EventEmitter<FormGroup>();
  public billingAddressForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.billingAddressForm = this._fb.group({
      streetAddress: [''],
      apartmentNumber: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: ['']
    });
    this.initialize.emit(this.billingAddressForm)
  }

}
