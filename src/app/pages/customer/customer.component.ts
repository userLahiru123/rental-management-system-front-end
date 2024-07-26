import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule, NgModel } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NavComponent,HttpClientModule,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  public customerObj = {
    customerId:"",
    name:"",
    city:"",
    contactNumber:""
  }

  constructor(private http: HttpClient){}

  clearFields(){
    this.customerObj.name="";
    this.customerObj.customerId="";
    this.customerObj.city="";
    this.customerObj.contactNumber="";
  }

  addCustomer(){
    this.http.post("http://localhost:8080/customer",this.customerObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Customer added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  deleteCustomer(){
    this.http.delete("http://localhost:8080/customer/delete-by-id/"+this.customerObj.customerId).subscribe(
      (data) => {
        Swal.fire({
          title: "Customer updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  updateCustomer(){
    this.http.post("http://localhost:8080/customer/update-by-id",this.customerObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Customer added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  searchCustomer(){
    this.http.get("http://localhost:8080/customer/"+this.customerObj.customerId).subscribe(
      (data) => {
        if(data == null){
          Swal.fire({
            title: "Customer not found!",
            text: "You clicked the button!",
            icon: "question"
          });
        }else{
          console.log(data);
        }
      }
    )
  }


}
