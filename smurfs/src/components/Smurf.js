import React from "react";


function Smurf(props) {
    return (
        <div>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>Delete Smurf</button>
        </div>
    )
}

export default Smurf;