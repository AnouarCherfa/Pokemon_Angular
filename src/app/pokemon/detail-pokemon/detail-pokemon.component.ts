import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit, OnDestroy {
  pokemonliste: Pokemon[];
  pokemon: Pokemon|undefined;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private PokemonService: PokemonService 
    ) {}

  ngOnDestroy(): void {
    if(this.sub instanceof Subscription){
      this.sub.unsubscribe();
    }
  }

  ngOnInit(){
    const pokemonId :  string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {

      this.sub = this.PokemonService.getPokemonById(+pokemonId)
      .subscribe((response) => this.pokemon = response);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.PokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goToPokemonListe());

  }

  goToPokemonListe () {
    this.router.navigate(['/pokemons']);
  }

  goToEditePokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
