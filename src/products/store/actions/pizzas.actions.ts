import { LoadPizzas, LoadPizzasFail } from './pizzas.actions';
import { Pizza } from './../../models/pizza.model';
import { Action } from '@ngrx/store'


// load pizzas

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail ';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success ';


export class LoadPizzas implements Action{
    readonly type = LOAD_PIZZAS
}

export class LoadPizzasFail implements Action{
    readonly type = LOAD_PIZZAS_FAIL
    constructor(public payload:Pizza[]){}
}

export class LoadPizzasSuccess implements Action{
    readonly type = LOAD_PIZZAS_SUCCESS
    constructor(public payload:Pizza[]){}
}

// action types

export type PizzaAction = LoadPizzas
                        | LoadPizzasFail
                        | LoadPizzasSuccess