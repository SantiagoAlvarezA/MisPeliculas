import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes:Routes = [
  
  {path: 'movies/:id_categoria', component: MoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuSearchComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
