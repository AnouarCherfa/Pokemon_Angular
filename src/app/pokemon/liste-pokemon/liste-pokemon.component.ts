import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
})
export class ListePokemonComponent {
  pokemonList: Pokemon[];
  sub: Subscription;

  constructor( 
    private route: Router,
    private PokemonService: PokemonService ) {}

  ngOnDestroy(): void {
    if(this.sub instanceof Subscription){
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
    this.sub = this.PokemonService.getPokemonList() // je récupère l'observable depuis PokemonService
    .subscribe((response) => this.pokemonList = response['hydra:member']  ); // je m'abonne et je récupère la propriété pokemonList
  }

  

  goToPokemon(pokemon: Pokemon) {
    this.route.navigate(['/pokemon', pokemon.id]);
  }
}
