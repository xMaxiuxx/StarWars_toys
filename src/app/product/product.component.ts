import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { forkJoin } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  species: any[] = [];
  movies: any[]= [];
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    forkJoin([
      this.storeService.getStarWarsCharacters(),
      this.storeService.getStarWarsMovies(),
      this.storeService.getSpeciesForCharacter(),
    

    ]).subscribe(
      ([productsData, moviesData,speciesData]: [any, any, any]) => {
        this.products = productsData.results.slice(0 , 6);
        this.movies = moviesData.results;
        this.species = speciesData.results;

        this.products.forEach((product: any)=>{
          product.movies = this.getMoviesForCharacter(product.films);
          product.species = this.getSpeciesNames(product.species)

        }

        )
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
    
  }
    getMoviesForCharacter(films: string[]): string{
    return films.map((film) => this.getMovieName(film)).join(', ');
 
  }

  getMovieName(filmURL: string): string {
    const movie = this.movies.find((movie) => movie.url === filmURL);
    return movie ? movie.title : 'Pelicula Desconocida';
  }


  getSpeciesNames(speciesUrls: string[]): string {
    const speciesNames: string[] = [];
  
    for (let i = 0; i < speciesUrls.length; i++) {
      const speciesUrl = speciesUrls[i];
      const specie = this.species.find((specie) => specie.url === speciesUrl);
      speciesNames.push(specie ? specie.name : 'Especie Desconocida');
    }
  
    return speciesNames.join(', ');
  }

  addToCart(product: Product){

     return this.storeService.addProduct(product);
  }
  
}


  



