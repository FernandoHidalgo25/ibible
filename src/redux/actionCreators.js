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

export const clearBook = () => ({type: "CLEAR_BOOK"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3001/users", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(console.log)
    //.then(user => dispatch({type: "SET_USER", payload: user}))
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3001/sessions", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(console.log)
    //.then(user => dispatch({type: "SET_USER", payload: user}))}
}