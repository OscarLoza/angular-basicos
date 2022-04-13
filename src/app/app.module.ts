import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './Herores/heroe/heroe.component';
import { ListadoComponent } from './herores/listado/listado.component';
import { HeroesModule } from './herores/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
