import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	public title = 'Payment System';
	public btnText = 'submit';
	public paymentForm: FormGroup;

	constructor(private _fb: FormBuilder) { }

	ngOnInit() {
		this.paymentForm = this._fb.group({
			name: [''],
			email: [''],
			phone: [''],

			cardNumber: [''],
			cvv: [''],
			expirationData: [''],

			streetAddress: [''],
			apartmentNumber: [''],
			city: [''],
			state: [''],
			zipCode: [''],
			country: [''],
		})
	}

	initializeForm(name: string, form: FormGroup) {
		this.paymentForm.setControl(name, form)
	}

	onSubmit(event) {
		console.log(`xxxx`, this.paymentForm.value);
	}

}
