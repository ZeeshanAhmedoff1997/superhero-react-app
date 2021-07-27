import * as types from "../types/actionTypes";

export function addSearchedItem(hero) {
  return {
    type: types.ADD_NEW_SEARCHED_ITEM,
    payload: hero
  };
}

export function addComparedItem(hero) {
  return {
    type: types.ADD_NEW_COMPARED_ITEM,
    payload: hero
  };
}

export function removeComparedItem(id) {
  return {
    type: types.REMOVE_COMPARED_ITEM,
    payload: id
  };
}