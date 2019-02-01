import React from "react";
import "./SmurfForm.css";

function SmurfForm(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="name..."
                    name="name"
                    onChange={props.handleChanges}
                />
                <input
                    type="text"
                    placeholder="age..."
                    name="age"
                    onChange={props.handleChanges}
                />
                <input
                    type="text"
                    placeholder="height..."
                    name="height"
                    onChange={props.handleChanges}
                />
                <button className="add-smurf" onClick={props.addSmurf}>Submit Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;