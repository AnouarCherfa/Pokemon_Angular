import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { catchError, of, tap, Observable } from 'rxjs';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent {

  selectedFile: File;
  pokemon: Pokemon;
  post$: Observable<Blob>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

  // Ajouter une méthode pour traiter la sélection du fichier CSV
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }


  // Ajouter une méthode pour envoyer le fichier CSV au serveur
  onUpload() {
    const uploadData = new FormData();

    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://127.0.0.1:8000/upload/files', uploadData)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Upload réussi.');
        },
        error: (err) => {
          console.error(err);
          alert('Erreur lors de l\'upload.');
        }
      }        
      );
  }
}



