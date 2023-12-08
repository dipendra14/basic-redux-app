// reducers/reducer2.js
const initialState = {
    status: 'idle',
  };
  
  const reducer2 = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { status: 'loadingg' };
      default:
        return state;
    }
  };
  
  export default reducer2;
  