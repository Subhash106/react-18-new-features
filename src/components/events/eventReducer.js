const eventReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.title };
    case "UPDATE_DATE":
      return { ...state, date: action.date };
    case "UPDATE_DESC":
      return { ...state, description: action.description };
    case "UPDATE_IMAGE":
      return { ...state, image: action.image };
    case "RESET":
      return { ...state, id: "", title: "", description: "", image: "" };
    default:
      return state;
  }
};

export default eventReducer;
