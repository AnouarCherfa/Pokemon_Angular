import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',

})
export class SearchPokemonComponent {
  searchTerms = new Subject<string>();
  pokemons$: Observable<any>;
  pokemonService: any;

  constructor(private router: Router){}

  ngOnInit(){
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    )
    console.log(this.pokemons$);
  }
  

  search(term: string){
    this.searchTerms.next(term);
  }

  // Quand l'utilisateur click sur un résultat
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }


}
