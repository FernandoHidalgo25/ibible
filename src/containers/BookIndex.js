import { useEffect } from "react"
import {getBooks} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { BookCard } from "../components"

function BookIndex({getBooks, books}){
    useEffect(getBooks, [getBooks])

    return<div className="cards">
        {books.map(book => <BookCard {...book} key={book.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {books: state.books}
}

export default connect(mapStateToProps, { getBooks })(BookIndex)