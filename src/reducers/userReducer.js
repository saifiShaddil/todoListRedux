import { SET__USER } from "../actiontype";

const userReducer = (state, action) => {
    console.log(action.user);
    switch (action.type) {
      case SET__USER:
          // logic to add user 
        return {
          ...state,
          user: action.user,
        }  
      default:
        return state;
    }
  };
  export default userReducer;