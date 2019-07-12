import {
  CREATE_TODO,
  REMOVE_TODO
} from '../actions/actionType';

export default function (state = [], action) {

  switch (action) {

    case CREATE_TODO:
      const newTodo = { text: action.text }
      return [
        ...state,
        newTodo
      ];

    case REMOVE_TODO:
      let todoFilter = state.filter((todo) => todo.todoId !== action.todoId);

      return [
        todoFilter
      ];

    default:
      return state;

  }
}