import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
