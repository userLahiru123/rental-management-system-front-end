import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { RentalComponent } from './pages/rental/rental.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"item",
        component: ItemComponent
    },
    {
        path:"rental",
        component: RentalComponent
    },
];
