import { CREATE_TODO } from './actionType';

export default function createTodo(todoId, todoText){
  return {
    type: CREATE_TODO,
    completed: false,
    todoId,
    todoText
  }
};