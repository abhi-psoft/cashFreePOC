import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss']
})
export class PaymentRequestComponent implements OnInit {

  form!: FormGroup;
  API_URL = "http://38.242.254.224:8070/book"
  constructor(private formBuilder: FormBuilder, private http: HttpClient){
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
			amount: [""], 
		})
  }

  submitForm(){
    console.log(this.form.controls['amount'].value);
    // var formData: any = new FormData();
    // formData.append('amount', this.form.controls['amount'].value);
    let request = {
      amount : this.form.controls['amount'].value
    };
    this.http
      .post(this.API_URL, request)
      .subscribe({
        next: (response: any) => {
          console.log(response.paymentURL);
          window.document.location.href = response.paymentURL;
        },
        error: (error) => console.log("Error at book API: ", error),
      });

  }
}
