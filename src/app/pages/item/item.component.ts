import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

}
