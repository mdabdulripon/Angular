import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {

  @Input() parentForm = FormGroup;
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }
}
