import { Pokemon } from './pokemon';

export interface PokemonList {
    "@context":         string;
    "@id":              string;
    "@type":            string;
    "hydra:member":     Pokemon[];
    "hydra:totalItems": number;
}
