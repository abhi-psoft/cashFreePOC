import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentResponseComponent,
    PaymentRequestComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
