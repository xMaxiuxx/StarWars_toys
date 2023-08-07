import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { ProductComponent } from './product/product.component';
@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private apiURL='https://swapi.dev/api/people/';
  private filmsApiURL='https://swapi.dev/api/films/';
  private speciesApiURL='https://swapi.dev/api/species/';
  //Lista del Carrito 
  private myList: Product[]=[];
  // Carrito observable
  private myCart = new BehaviorSubject <Product[]>([]);
  myCart$ = this.myCart.asObservable();


  constructor(private http: HttpClient) { }


  getStarWarsCharacters(){
    return this.http.get<any>(this.apiURL);
  }
  getStarWarsMovies(){
    return this.http.get<any>(this.filmsApiURL);
  }

  getSpeciesForCharacter(){
    return this.http.get<any>(this.speciesApiURL);
  }

  addProduct(product: Product){
    // Si mi lista esta vacia agrego el producto
    if (this.myList.length === 0){
      product.cantidad = 1;
      this.myList.push(product)
      this.myCart.next(this.myList);
      console.log(product)
    }else{
      const productMod = this.myList.find((element)=> {
        return element.name === product.name 
      })
    //si no esta vacia veo si existe el producto

      if(productMod){
        productMod.cantidad = productMod.cantidad +1 ;
        this.myCart.next(this.myList);
     // si no existe , agrego el producto

      }else{
        product.cantidad = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);

      }
    }
    
  }
  deleteProduct(name: string){
    this.myList = this.myList.filter((product)=> {
      return product.name !== name
    })
     this.myCart.next(this.myList);
  }
  findProductByName(name: string ){
    return this.myList.find((element)=>{
      return element.name === name ;
    })
  }
  totalCart(){
    const total = this.myList.reduce(function(acc,product){return acc +(product.cantidad * product.mass) },0)
    return total;
  }
}
