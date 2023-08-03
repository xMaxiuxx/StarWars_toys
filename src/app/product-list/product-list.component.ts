import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cartItems: any [] = [];
  products: any [] = [];
  movies: any [] = [];
  species: any[] = [];
constructor( private productService : ProductService) { };
  ngOnInit(): void {
    forkJoin([
      this.productService.getStarWarsCharacters(),
      this.productService.getStarWarsMovies(),
      this.productService.getSpeciessForCharacter(),

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

  addToCart(item: any) : void{
    this.cartItems.push(item);
  }

  // getSpecieName(specieURL: string): string {
  //   const specie = this.species.find((specie) => specie.url === specieURL);
  //   return specie ? specie.name : 'Especie Desconocida';
  // }


  getSpeciesNames(speciesUrls: string[]): string {
    const speciesNames: string[] = [];
  
    for (let i = 0; i < speciesUrls.length; i++) {
      const speciesUrl = speciesUrls[i];
      const specie = this.species.find((specie) => specie.url === speciesUrl);
      speciesNames.push(specie ? specie.name : 'Especie Desconocida');
    }
  
    return speciesNames.join(', ');
  }
}


