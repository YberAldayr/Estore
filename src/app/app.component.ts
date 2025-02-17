import { Component } from '@angular/core';
// import { HeaderComponent } from './home/components/header/header.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CatnavigationComponent } from "./home/components/catnavigation/catnavigation.component";
import { HomeModule } from './home/home.module';
import { RouterOutlet } from '@angular/router'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, HomeModule, HomeModule, RouterOutlet], 
  template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'estore';
}