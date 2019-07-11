import { CREATE_BOARD } from './actionType';

export default function createBoard (name){
  return {
    type: CREATE_BOARD,
    name
  }
};