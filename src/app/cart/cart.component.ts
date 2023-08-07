import { Component,OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Product } from '../product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart$ = this.storeService.myCart$
  constructor(private storeService: StoreService){ }

  ngOnInit(): void {
    
  } 

  totalProducts(mass:number, units:number){
    return mass*units;
  }

  deleteProduct(name: string ){
    this.storeService.deleteProduct(name)
  }
  updateUnits(operation: string, name: string){
    const product = this.storeService.findProductByName(name)
    if(product){
      if(operation === 'minus' && product.cantidad >0){
        product.cantidad = product.cantidad -1;
      }
      if (operation === 'add' ){
        product.cantidad = product.cantidad +1;
      }
      if(product.cantidad === 0){
        this.deleteProduct(name);
      }
    }
  }
  totalCart(){
    const result = this.storeService.totalCart();
    return result ;
  }
}
