import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('buscarTexto') el:ElementRef;
  constructor( private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  buscarHeroe(nombre: string){
    this.router.navigate(['/buscador', nombre]);
    this.renderer.setProperty(this.el.nativeElement, 'value', '');
    
  }

}
