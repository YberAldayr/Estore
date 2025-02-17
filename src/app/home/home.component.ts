import { Component } from '@angular/core';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatnavigationComponent, HeaderComponent, SidenavigationComponent, ProductsComponent, SharedModule], 
  template: `<app-header></app-header>, <app-catnavigation></app-catnavigation>, <app-sidenavigation></app-sidenavigation>, <app-products></app-products>`,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }