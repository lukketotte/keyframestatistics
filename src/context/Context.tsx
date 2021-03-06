import React, { createContext, useReducer } from 'react';
import { UIReducer } from './Reducer';

export type UIinterface = {
  width: number | any;
};

const initialState: UIinterface = {
  width: null,
};

export const UIContext = createContext<UIinterface | any>(initialState);

export const Provider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(UIReducer, initialState);
  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UIContext.Provider>
  );
};
