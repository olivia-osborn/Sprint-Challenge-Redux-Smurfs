import React from "react";
import "./Smurf.css"

function Smurf(props) {
    return (
        <div className="smurf">
            <p className="name">{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button className="delete" onClick={e => props.deleteSmurf(e, props.smurf.id)}>Delete Smurf</button>
        </div> 
    )
}

export default Smurf;