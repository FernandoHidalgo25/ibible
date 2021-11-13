export default function BookCard({name, imageUrl, testament}){
    
    return <div className="card">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name}/>
        <p>{testament}</p>
    </div>
}