//this is a function that takes book and dispatch them to the reducer
export const getBooks = () => {
    return dispatch => fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books => dispatch({type: "GET_BOOKS", payload: books})
    )
}
//asynchronious and return a promise