import { CollectionsState } from './collections/types';
import { PaintingsState } from './paintings/types';
import { YearsState } from './years/types';

export interface RootState {
  collections: CollectionsState;
  paintings: PaintingsState;
  years: YearsState;
}

export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type FunctionType = (...args: any[]) => any;
export interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType;
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export type Dispatch<A> = (action: A) => void;

export type BasicAction<T> = ActionWithPayload<string, T>;
