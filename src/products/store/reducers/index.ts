import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromPizzas from './pizzas.reducer'

export interface ProductState{
    pizzas:fromPizzas.PizzaState
}

export const reducers:ActionReducerMap<ProductState> = {
    pizzas:fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductState>('products');


// pizza state

export const getPizzaState = createSelector(getProductState,
    (state:ProductState) => state.pizzas )

export const getPizzasEntities = createSelector(getPizzaState,(fromPizzas.getPizzasEntities))




export const getAllPizzas = createSelector(getPizzasEntities,(entities)=>{ 
    return Object.keys(entities).map(id => entities[parseInt(id,10)])
})

export const getPizzasLoaded = createSelector(getPizzaState,(fromPizzas.getPizzaLoaded))
export const getAllPizzasLoading = createSelector(getPizzaState,(fromPizzas.getPizzaLoading))
