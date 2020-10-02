import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any = [];

  constructor( private httpClient: HttpClient ) {
    this.httpClient.get("assets/data.json").subscribe(data => {
      this.heroes = data;
    })
  }

  getHeroes(){
    return this.httpClient.get("assets/data.json");
  }

  getHeroe(id: string){
    return this.heroes[id];
  }

  buscarHeroes(termino: string){
    let heroesArr:any = [];
    termino = termino.toLowerCase();

    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        heroesArr.push(heroe);
      }
    }
     return heroesArr;
  }

 

}
