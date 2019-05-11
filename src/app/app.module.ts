import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module';


import { AppComponent } from './app.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingInfoComponent,
    BillingAddressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
