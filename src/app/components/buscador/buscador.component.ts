import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent{
  heroes: any[] = [];
  nombre: string;

  constructor(private router:Router, private actRoute: ActivatedRoute, private heroesService: HeroesService) { 
    this.actRoute.params.subscribe( parametro=>{
      this.nombre = parametro['nombre'];
      this.heroes = this.heroesService.buscarHeroes(parametro['nombre']);

    } );

  }


}
