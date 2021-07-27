import * as types from "../types/actionTypes";

const initialState = {
  heroes:[],
  comparedHeroes:[]
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_SEARCHED_ITEM:
      return { 
        ...state,
        heroes: action.payload.concat(state.heroes)
      };
    case types.ADD_NEW_COMPARED_ITEM:
      return { 
        ...state,
        comparedHeroes: [...state.comparedHeroes, action.payload]
      };
    case types.REMOVE_COMPARED_ITEM:
      let filtered = state.comparedHeroes.filter(function(hero) { return hero.id !== action.payload }); 
      return { 
        ...state,
        comparedHeroes: filtered
      };
    default:
      return state;
  }
}
