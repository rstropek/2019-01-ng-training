import { Component, OnInit } from '@angular/core';
import { IPokemonList, IPokemon, PokemonQueryService } from '../pokemon-query.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: IPokemonList;
  public filteredList: IPokemon[];
  public currentPage = 0;
  public numberOfPages: number;

  constructor(private dal: PokemonQueryService) { }

  async ngOnInit() {
    this.pokemonList = await this.dal.getPokemons();

    this.numberOfPages = Math.ceil(this.pokemonList.count / 10);

    this.refreshFilteredList();
  }

  private refreshFilteredList() {
    this.filteredList = this.pokemonList.results.slice(this.currentPage * 10, (this.currentPage + 1) * 10);
  }

  move(direction: number): void {
    this.currentPage += direction;
    this.refreshFilteredList();
  }

  last(): void {
    this.currentPage = this.numberOfPages - 1;
    this.refreshFilteredList();
  }
}
