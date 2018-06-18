import { LoadPizzas, LoadPizzasFail, PizzaAction } from './../actions/pizzas.actions';
import { Injectable } from '@angular/core';

import * as pizzaActions from '../actions/pizzas.actions'



import {Effect , Actions} from '@ngrx/effects'
import * as fromServices from '../../services'
import {of} from 'rxjs/observable/of'
import { map , switchMap , catchError} from 'rxjs/operators';

@Injectable()

export class PizzasEffects{

constructor(private actions$ : Actions, 
    private pizzasService:fromServices.PizzasService  ){

}

@Effect()
loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
.pipe(
    switchMap(()=>{
        return this.pizzasService.getPizzas()
        .pipe(
            map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas) ),
            catchError(error => of(new pizzaActions.LoadPizzasFail(error))
        )
    })
)
}