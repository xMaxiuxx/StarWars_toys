import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL ='https://swapi.dev/api/people/';
  private filmsApiURL = 'https://swapi.dev/api/films/';
  private speciesApiURL= 'https://swapi.dev/api/species/';
  constructor(private http: HttpClient) { }

  getStarWarsCharacters(){
    return this.http.get<any>(this.apiURL);

  }
  
  getStarWarsMovies(){
    return this.http.get<any>(this.filmsApiURL);
  }
  getSpeciessForCharacter(){
    return this.http.get <any>(this.speciesApiURL);
  }
}

