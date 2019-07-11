import { REMOVE_TODO } from './actionType';

export default function removeTodo() {
  return {
    type: REMOVE_TODO,
    payload: true
  }
};