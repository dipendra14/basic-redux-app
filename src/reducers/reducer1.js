// reducers/reducer1.js
const initialState = {
    value: 0,
  };
  
  const reducer1 = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      default:
        return state;
    }
  };
  
  export default reducer1;
  