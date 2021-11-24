import { Link } from 'react-router-dom'

export default function BookCard({id, name, imageUrl, testament, group}){
    
    return <div className="card">
        <Link to={`/books/${id}`}><h3>{name}</h3></Link>
        <Link to={`/books/${id}`}><img src={imageUrl} alt={name}/></Link>
        <p>{testament} , {group}</p>
    </div>
}