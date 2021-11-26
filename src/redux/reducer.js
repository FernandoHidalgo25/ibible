const initialBook= {
        name: "",
        testament: "",
        author: "",
        group: "",
        description: "",
        imageUrl:"",
        id: null
}

const initialState = {
    books: [],
    selectedBook: initialBook,
    user: {
        username: ""
    }
}
//store information from fetch to state make it easier to use and dispatch actions
export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BOOKS":
            return {...state, books: action.payload};
        case "GET_BOOK":
            return {...state, selectedBook: action.payload};
        case "CLEAR_BOOK":
            return {...state, selectedBook: initialBook};
        case "SET_USER":
            return {...state, user: action.payload};
        default:
            return {...state}
    }
}
