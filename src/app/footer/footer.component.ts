import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor:string = "Santiago Alvarez";
  fecha:Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
