import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NavComponent,FormsModule,HttpClientModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  public itemObj = {
    itemId:"",
    name:"",
    rentalPerDate:"",
    finePerDate:"",
    availability:""
  }

  constructor(private http: HttpClient){}

  clearFields(){
    this.itemObj.name="";
    this.itemObj.itemId="";
    this.itemObj.rentalPerDate="";
    this.itemObj.availability="";
    this.itemObj.finePerDate="";
  }

  addItem(){
    this.http.post("http://localhost:8080/item",this.itemObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Item added!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )

    // console.log(this.itemObj);
  }

  deleteItem(){
    this.http.delete("http://localhost:8080/item/delete-by-id/"+this.itemObj.itemId).subscribe(
      (data) => {
        Swal.fire({
          title: "Item updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  updateItem(){
    this.http.post("http://localhost:8080/item/update-by-id",this.itemObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Item updated!",
          text: "You clicked the button!",
          icon: "success"
        });

        this.clearFields();
      }
    )
  }

  searchItem(){
    this.http.get("http://localhost:8080/item/"+this.itemObj.itemId).subscribe(
      (data) => {
        if(data == null){
          Swal.fire({
            title: "Item not found!",
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
