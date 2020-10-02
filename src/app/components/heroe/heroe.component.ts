import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private actRoute: ActivatedRoute, private heroesService: HeroesService) { 
    this.actRoute.params.subscribe( parametro=>{
      this.heroe = this.heroesService.getHeroe(parametro['id']);

    } );

  }

}
