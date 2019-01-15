import actionTypes from './actionTypes';

const initialState = {
  profileList: [],
  editList:[]
}

const reducer = (state=initialState, action) => {

  switch(action.type) {
    case actionTypes.GET_LIST_SUCCESS:
      return({
        ...state,
        profileList: action.data
      })
    case actionTypes.EDIT_LIST_SUCCESS:
    return({
      ...state,
      editList:action.data

    })
    default: 
      return state;
  }
}
export default reducer;