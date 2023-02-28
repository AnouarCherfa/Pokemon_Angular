import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { ListePokemonComponent } from './liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuard } from '../auth.guard';
import { ExportToCsvComponent } from './export-to-csv/export-to-csv.component';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/add', component: AddPokemonComponent },
  { path: 'pokemons', component: ListePokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},

];

@NgModule({
  declarations: [
    BorderCardDirective,
    ListePokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    ExportToCsvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],

  providers: [PokemonService] 
})
export class PokemonModule { }
