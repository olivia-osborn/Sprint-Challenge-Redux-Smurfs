import React from "react";
import Smurf from "./Smurf";

function SmurfList(props) {
    return (
        <div>
            {props.smurfList.map((smurf, index) => {
                return <Smurf smurf={smurf} key={index} />
            })}
        </div>
    )
}

export default SmurfList;