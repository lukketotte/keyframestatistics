import { UIinterface } from './Context';

interface IAction {
  type: string;
  payload: UIinterface;
}

export const UIReducer = (state: UIinterface, action: IAction): UIinterface => {
  switch (action.type) {
    case 'SET_WIDTH':
      return { ...state, width: action.payload };
    case 'SET_OPEN':
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
