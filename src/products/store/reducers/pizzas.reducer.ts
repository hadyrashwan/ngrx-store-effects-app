import { Pizza } from './../../models/pizza.model';
import { PizzaAction } from './../actions/pizzas.actions';
import * as fromPizzas from '../actions/pizzas.actions'
import { defaultUrlMatcher } from '@angular/router/src/shared';


export interface PizzaState {
data:Pizza[],
loaded:boolean,
loading:boolean
}


export const initialState:PizzaState = {
    data: [    {
        "name": "Blazin' Inferno",
        "toppings": [
          {
            "id": 9,
            "name": "pepper"
          },
          {
            "id": 3,
            "name": "basil"
          },
          {
            "id": 4,
            "name": "chili"
          },
          {
            "id": 7,
            "name": "olive"
          },
          {
            "id": 2,
            "name": "bacon"
          },
          {
            "id": 1,
            "name": "anchovy"
          },
          {
            "id": 5,
            "name": "mozzarella"
          }
        ],
        "id": 1
      }],
    loaded:false,
    loading:false

}


export function reducer ( 
    state = initialState , 
    action:fromPizzas.PizzaAction):PizzaState{

    switch(action.type){
        case fromPizzas.LOAD_PIZZAS:{
        return{...state,loading:true}
        }
        // break;
        case fromPizzas.LOAD_PIZZAS_SUCCESS:{
        return {...state ,
            //  data:action.payload 
             loading:false,loaded:true}
        }
        // break;        
        case fromPizzas.LOAD_PIZZAS_FAIL:{
            return {...state , loading:false , loaded:false}
        }
        // break;
        // default:{
        //     return state
        // }
        // // break;
    }
    return state  ;
}

export const getPizzaLoading = (state:PizzaState):boolean => state.loading
export const getPizzaLoaded = (state:PizzaState):boolean => state.loaded
export const getPizzas = (state:PizzaState):Pizza[] => state.data