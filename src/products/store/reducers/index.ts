import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

import * as fromPizzas from './pizzas.reducer'

export interface ProductState{
    pizzas:fromPizzas.PizzaState
}

export const reducers:ActionReducerMap<ProductState> = {
    pizzas:fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductState>('products');


// pizza state


