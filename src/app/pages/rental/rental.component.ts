import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [NavComponent,FormsModule,HttpClientModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  public rentalObj = {
    rentalId:"",
    rentalDate:"",
    returnDate:"",
    dueDate:"",
    totalCost:""
  }

  constructor(private http: HttpClient){}

  clearFields(){
    this.rentalObj.rentalId="",
    this.rentalObj.dueDate="",
    this.rentalObj.rentalDate="",
    this.rentalObj.rentalId="",
    this.rentalObj.totalCost=""
  }

  addRental(){
    this.http.post("http://localhost:8080/rental",this.rentalObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Rental added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )

    // console.log(this.itemObj);
  }

  deleteRental(){
    this.http.delete("http://localhost:8080/rental/delete-by-id/"+this.rentalObj.rentalId).subscribe(
      (data) => {
        Swal.fire({
          title: "Rental deleteed!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  updateRental(){
    this.http.post("http://localhost:8080/rental/update-by-id",this.rentalObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Rental updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  searchRental(){
    this.http.get("http://localhost:8080/rental/"+this.rentalObj.rentalId).subscribe(
      (data) => {
        if(data == null){
          Swal.fire({
            title: "Rental not found!",
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
