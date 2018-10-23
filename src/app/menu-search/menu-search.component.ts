import { Component, OnInit,Input } from '@angular/core';
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
  @Input() cat_filter:string = "";
  
  
  constructor() { 
    console.log(this.cat_filter);
  }

  ngOnInit() {
  }
  // onSelect(categoria: TypeCategoria): void {
  //   this.selectedCategoria = categoria;
  // }

}
