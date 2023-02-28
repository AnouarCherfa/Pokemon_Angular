import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"> </app-pokemon-form> 
  `,
  styles: [
  ]
})
export class EditPokemonComponent {

  pokemon: Pokemon| undefined;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokemonService
  ) {}

  ngOnDestroy(): void {
    if(this.sub instanceof Subscription){
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.sub = this.PokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon)
    } else {
      this.pokemon = undefined;
    }
  }
}
