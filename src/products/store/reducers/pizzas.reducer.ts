import { Pizza } from './../../models/pizza.model';
import { PizzaAction } from './../actions/pizzas.actions';
import * as fromPizzas from '../actions/pizzas.actions'
import { defaultUrlMatcher } from '@angular/router/src/shared';


export interface PizzaState {
entities:{[id:number] : Pizza},
loaded:boolean,
loading:boolean
}


export const initialState:PizzaState = {
    entities:{},
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

        
        const pizzas = action.payload
        const entities = pizzas.reduce((entities:{[id:number]:Pizza},pizza:Pizza)=>{
            return {
                ...entities,
                [pizza.id]:pizza
            };
        },
            {
                ...state.entities
            }
        )
        return {...state ,
             loading:false,loaded:true,
             entities
            }
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
export const getPizzasEntities = (state:PizzaState):{[id:number] : Pizza} => state.entities