import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ClothingComponent } from '../clothing/clothing.component';
import { BagsComponent } from '../bags/bags.component';
import { ShoesComponent } from '../shoes/shoes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { loadComponent:() => import('../category/category.component').then(m => m.CategoryComponent), path: 'category/:type' },
    // { path: 'clothing', component: ClothingComponent },
    // { path: 'bags', component: BagsComponent },
    // { path: 'shoes', component: ShoesComponent },
];
