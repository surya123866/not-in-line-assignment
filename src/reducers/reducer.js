const initialState = {
  userData: [],
  currentUserData: {},
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_DATA":
      // Update state
      const newUserData = {
        ...state,
        userData: [...state.userData, action.payload],
        currentUserData: action.payload,
      };
      // Update local storage with the new state
      localStorage.setItem("userData", JSON.stringify(newUserData));
      return newUserData;

    default:
      return state;
  }
};

export default DataReducer;
