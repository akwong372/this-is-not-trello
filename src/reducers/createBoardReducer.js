import { CREATE_BOARD } from '../actions/actionType';

export default function (state = [], action) {

  switch (action.type) {

    case CREATE_BOARD:
      return [
        ...state,
        {
          name: action.name,
          board: []
        }
      ];

    default:
      return state;

  }
}