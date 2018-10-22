import { Component, OnInit } from '@angular/core';
import { TypeCategoria } from '../type-categoria';
import { CATEGORIA } from '../model-categoria';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit {
  categoria = CATEGORIA;
  selectedCategoria: TypeCategoria;
  title:string = "Categorias";
  constructor() { }

  ngOnInit() {
  }
  // onSelect(categoria: TypeCategoria): void {
  //   this.selectedCategoria = categoria;
  // }

}
