import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonResponse } from '../model/pokemon';

@Component({
  selector: 'app-rocketdex',
  templateUrl: './rocketdex.component.html',
  styleUrls: ['./rocketdex.component.scss']
})
export class RocketdexComponent implements OnInit {
  pokemon: Pokemon[];
  id: number;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPokemon().then((value) => this.pokemon = value);
  }

  ngOnInit() {
  }

  private async getPokemon(): Promise<Pokemon[]> {
    const {results} =  await this.http
      .get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .toPromise();
    return results;
  }

}
