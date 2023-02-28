import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class='row'>
                <div class="col s12 m4 offset-m4">
                    <div class="card hoverable">
                        <div class="card-content center">
                            <span class="card-title">Welcome</span>
                            <p> I'm very happy to show you my first Angular application,
                                first of all if you visit this site for the first time you have to register,
                                otherwise you just have to login to access the list of pokemons cards,
                                see the details of each card, add, edit or delete a card. 
                            </p>
                            <div class="card-action center">
                                <a href="/inscription">Inscription</a>
                                <a href="/login">Connexion</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>`,

})
export class HomeComponent {

}
