import { Component } from '@angular/core';
import { InfopageService } from './services/infopage.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public infoPage:InfopageService, public productsService:ProductsService ){

  }
}
