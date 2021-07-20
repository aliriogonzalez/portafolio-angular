import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loaded_data = true;
  producto:ProductInterface[]=[];
  poductosFiltrado:ProductInterface[]=[];

  constructor( private http: HttpClient ) { 
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise( (resolve, reject) =>{
      this.http.get("https://angular-html-697df-default-rtdb.firebaseio.com/productos_idx.json")
        .subscribe( (resp:any=[]) => {
          this.producto=resp;
          this.loaded_data=false;
          resolve("Todo bien");
        });        
    });

    
  }
  getProduct(id:String){
    return this.http.get(`https://angular-html-697df-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    this.poductosFiltrado=[];
    if(this.producto.length===0){
      this.loadProducts().then( ()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }
  private filtrarProductos(termino:string){
    console.log(this.producto);
    const terminoLower = termino.toLocaleLowerCase();
    this.producto.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf( termino )>=0 || tituloLower.indexOf(terminoLower)>=0){
        this.poductosFiltrado.push(prod);
      }
    });
  }
}
