import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"item",
        component: ItemComponent
    },
];
