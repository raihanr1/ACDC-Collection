let store = {
  isLoading: false,
  user: [],
};

export default function actionReducer(state = store, action) {
  switch (action.type) {
    case action.type:
      return {
        ...store,
        isLoading: action.payload,
      };
    default:
      return store;
  }
}
