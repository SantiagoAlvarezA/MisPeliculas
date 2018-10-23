import { Component, OnInit } from '@angular/core';

import { TypePelicula } from '../type-peliculas';
import { PELICULAS } from '../model-pelicula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  id_categoria:number = 0;
  
  pelicula = PELICULAS;
  selectedPelicula = TypePelicula;

  constructor(private route:ActivatedRoute) { 
    this.id_categoria =  this.route.snapshot.params.id_categoria;
    console.log(this.route.snapshot.params.id_categoria);
  }

  ngOnInit() {
  }

}
