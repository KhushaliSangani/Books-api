import {
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";

const initialState = {
  books: [],
  loading: false,
  error: "",
};

export const BookReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case GET_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
        loading:false
      }
      default:
        return state;
  }
};
