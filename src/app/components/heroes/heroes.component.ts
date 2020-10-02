import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes:any=[];
  constructor( private heroesService: HeroesService, private httpClient: HttpClient, private router: Router) { 
  }

  ngOnInit(){
    this.heroesService.getHeroes().subscribe(
      result =>  {
        this.heroes = result;
      },
   );
  }


}
