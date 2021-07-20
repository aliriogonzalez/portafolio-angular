import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto:ProductoDescripcion={};
  idProducto:String='';

  constructor( private route: ActivatedRoute,public productService:ProductsService ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params=>{
      this.productService.getProduct(params['id'])
        .subscribe( (producto:ProductoDescripcion) =>{          
          this.producto = producto;
          this.idProducto = params['id'];
        });
    });
  }
}