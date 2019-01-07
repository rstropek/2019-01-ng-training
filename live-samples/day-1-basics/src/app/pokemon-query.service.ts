import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonList {
  count: number;
  results: IPokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonQueryService {

  constructor(private http: HttpClient) { }

  public getPokemons(): Promise<IPokemonList> {
    return this.http.get<IPokemonList>('https://pokeapi.co/api/v2/pokemon/').toPromise();
  }
}
