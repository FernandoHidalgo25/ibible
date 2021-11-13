const initialState = {
    books: []
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BOOKS":
            return {...state, books: action.payload};
        default:
            return {...state}
    }
}
