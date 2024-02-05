import React from "react";
import '../containers/App.css';


const Card = ({name, email, id}) => {
    return(
        
        <div className="cardlist">
            <img alt="robots" src={`https://robohash.org/${id}?set=set3`} />
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
        
    )
}
export default Card;