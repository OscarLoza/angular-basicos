import {NgModule} from '@angular/core';
import { HeroeComponent } from '../Herores/heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({

declarations: [
     HeroeComponent,
     ListadoComponent
  

   ],
    exports: [ 
        ListadoComponent
    ],

    imports:[

        
    ]
})
export class HeroesModule{


}