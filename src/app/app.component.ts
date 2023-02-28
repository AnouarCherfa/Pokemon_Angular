import { Component } from '@angular/core';
 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  {

  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;

  // ngOnInit() {
  //   console.table(this.pokemonList);
  // }

  // selectPokemon( pokemonid: number | null) {
  //   if (!pokemonid){
  //     return;
  //   }
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonid)
    
  //   if(pokemon) {
  //     console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log("Vous avez demandé un pokemon qui n'existe pas.");
  //     this.pokemonSelected = pokemon;
  //   }

  // }
 


}
