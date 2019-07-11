import { CREATE_TODO } from './actionType';

export default function createTodo(text){
  return {
    type: CREATE_TODO,
    text
  }
};