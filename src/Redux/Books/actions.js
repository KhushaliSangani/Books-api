import {
  ADD_BOOKS,
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const makeRequest = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};
const fetchBooksSuccess = (books) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: books,
  };
};

const failRequest = (err) => {
  return {
    type: GET_BOOKS_FAILURE,
    payload: err,
  };
};
const addBooksSuccess = () => {
  return {
    type: ADD_BOOKS,
  };
};

const editBookSuccess = () => {
  return {
    type: EDIT_BOOK_SUCCESS,
  };
};

const BOOKS_API_BASE_URL ='http://68.178.162.203:8080/application-test-v1.1/books';

export const fetchBooks = (param={}) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios.get(`${BOOKS_API_BASE_URL}`,param).then((res) => {
      console.log(res);
      const books = res.data.data;
      // console.log(books);
      dispatch(fetchBooksSuccess(books));
    })
    .catch((err) => {
      dispatch(failRequest(err.message));
    });      
  };
};

export const addNewBooks =(newBookData)=>{
  return (dispatch)=>{
    dispatch(makeRequest());
    axios.post(`${BOOKS_API_BASE_URL}`,newBookData).then((res)=>{
      console.log(res);
      dispatch(addBooksSuccess());
    }).catch(err=>{
      console.log(err);
      dispatch(failRequest(err.message));
    })
  }
}
export const editBook = (id,bookData) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios.put(`${BOOKS_API_BASE_URL}/${id}`,bookData)
    .then((res) => {
      console.log(res);
      dispatch(editBookSuccess());
    }).catch((err)=>{
      dispatch(failRequest(err.message));
    })
  };
};
