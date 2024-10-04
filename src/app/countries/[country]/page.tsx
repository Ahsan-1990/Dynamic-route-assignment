

export default function Country({params}:{params:{country:string}}) {
    
    return(
        <div>
        
        
        <h1>{params.country}</h1>
        <h1>Population</h1>
        <h2>Capital</h2>

        </div>
    )
}