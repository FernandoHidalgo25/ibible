import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBook, clearBook } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { cleanup } from '@testing-library/react'
//import { checkPropTypes } from 'prop-types'

function BookShow({getBook, name, url, testament, author, group, description, imageUrl, clearBook, id}){
    const routeId = useParams().id
    
    useEffect(() => {
    getBook(routeId)
    //if a useEffect return a function will run that when the component is about to unmount
    return clearBook
    }, [getBook, routeId, clearBook])

    const spinner = () => <div className="loader"></div>
    
    const loadedPage = () => <div className="show">
            <h1> you are in the show page now</h1> 
            <a href={url}><h1>{name}</h1></a>
            <img src={imageUrl} alt={name}/>
            <h2>{testament}, {group}</h2>
            <Link to={`/books/${parseInt(routeId) + 1}`}>Go to next book!!</Link>
        </div>

    return id ? loadedPage() : spinner()
}
const mapStateToProps = (state) => {
    return {...state.selectedBook}
}

export default connect(mapStateToProps, {getBook, clearBook})(BookShow);
