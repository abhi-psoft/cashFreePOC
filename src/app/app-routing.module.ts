import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentRequestComponent
  },
  {
    path: 'return',
    component: PaymentResponseComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true , scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
