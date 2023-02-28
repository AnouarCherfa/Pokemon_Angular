export class Pokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];
    createdAt : Date;

  constructor(
    name: string = 'Entrer un nom...',
    hp: number = 100,
    cp: number = 10,
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
    types: string[] = ['Normal'],
    createdAt : Date = new Date()
  ) {
    this.name    = name;
    this.hp      = hp;
    this.cp      = cp;
    this.picture = picture;
    this.types   = types;
    this.createdAt = createdAt;
  }
  
  /* id: number | null = null;
  hp: number | null = null;
  cp: number | null = null;
  name: string | null = null;
  picture: string | null = null;
  types: Array<string>;
  created: Date | null = null;
  
  constructor(values: object = {}) {
      Object.assign(this, values);
    } */
} 