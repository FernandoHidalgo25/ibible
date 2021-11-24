import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};


 //this is a function that takes book and dispatch them to the reducer
export const getBooks = () => {
  return dispatch => fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(books => dispatch({type: "GET_BOOKS", payload: books})
  )
}
//asynchronious and return a promise

export const getBook = (id) => {
  return dispatch => fetch(`http://localhost:3000/books/${id}`)
  .then(res => res.json())
  .then(book => dispatch({type: "GET_BOOK", payload: book})
  )
}

export default apiSettings;
