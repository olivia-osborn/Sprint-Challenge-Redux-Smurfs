import React from "react";
import Smurf from "./Smurf";

function SmurfList(props) {
    return (
        <div>
            {props.smurfList.map(smurf => {
                return <Smurf smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
}

export default SmurfList;