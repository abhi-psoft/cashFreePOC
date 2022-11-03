import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrls: ['./payment-response.component.scss']
})
export class PaymentResponseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  cf_id: string = "";
  cf_token: string = "";
  isPaymentSucess = false;
  API_URL = "http://38.242.254.224:8070/paymentStatus"
  statusMessage = "";
  ngOnInit(): void {

    this.route.queryParams
      .subscribe((params : any) => {
        console.log(params);    
        this.cf_id = params.cf_id;
        this.cf_token = params.cf_token;   
        this.getPaymentStatus(); 
      }
    );

  }

  private getPaymentStatus(){
    this.http.get(this.API_URL, {
      params: {
        cf_id: this.cf_id,
        cf_token: this.cf_token
      },
      observe: 'response'
    }).subscribe({
      next: (response: any) => {
        console.log(response);
        this.statusMessage = response;
      },
      error: (error) => console.log("Error at getPaymentStatus API: ", error),
    });
  }

}
