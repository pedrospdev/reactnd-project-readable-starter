import { TOGGLE_MENU_VISIBILITY } from '../actions/app';

const defaultState = {
  mainMenuCollapsed: true
}

export default function app (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        mainMenuCollapsed: !state.mainMenuCollapsed
      }
    default:
      return state
  }
}
