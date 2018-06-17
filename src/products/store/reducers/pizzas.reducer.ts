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
    data: [],
    loaded:false,
    loading:false

}


export function reducer ( 
    state = initialState , 
    action:fromPizzas.PizzaAction):PizzaState{

    switch(action.type){
        case fromPizzas.LOAD_PIZZAS:
        state = {...state,loading:true}
        break;
        case fromPizzas.LOAD_PIZZAS_SUCCESS:
        state = {...state , data:action.payload , loading:false,loaded:true}
        break;        
        case fromPizzas.LOAD_PIZZAS_FAIL:
        state = {...state , loading:false , loaded:false}
        break;
        default:
        break;
    }
    return state  ;
}