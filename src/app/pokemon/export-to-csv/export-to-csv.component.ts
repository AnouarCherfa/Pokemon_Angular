import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-export-to-csv',
  template: `

    <a (click)="exportToCsv()" class="btn-floating btn-large waves-light red"
            style="position: fixed; bottom: 25px; left: 25px;">
            <i class="material-icons"><i class="fa-solid fa-cloud-arrow-down"></i></i></a>
  `,
})
export class ExportToCsvComponent {
  data: any[];
  pokemonList: any;

  constructor(
    private http: HttpClient,
    private PokemonService: PokemonService ) {}

  exportToCsv(): void {
    this.PokemonService.getPokemonList() // je récupère l'observable depuis PokemonService
    .subscribe((data: { [x: string]: any; }) => { this.data = data['hydra:member'];
        const csvData = this.convertToCsv(this.data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'pokemonListe.csv');
      },
      (error) => {
        console.error(error);
      }
      );
  }

  convertToCsv(data: any): string {
    if (!data || !data.length) {
      return '';
    }
    const headerToExclude = ['@id', '@type']; // définir les noms des colonnes à exclure
    const csvHeader = Object.keys(data[0])
        .filter(key => !headerToExclude.includes(key))
        .join(';');
    const csvRows = data
      .map((row: { [s: string]: unknown; } | ArrayLike<unknown>) => Object.values(row)
        .filter((_, index) => index > 1) // ignorer les deux premières colonnes de chaque ligne
        .map(val => `"${val}"`)
        .join(';'))
      .join('\n');
    return `${csvHeader}\n${csvRows}`;
  }
}







