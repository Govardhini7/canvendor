import React from "react";

function ChildComponent(props){
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet button</button> */}
            <button onClick={() => props.greetHandler('child')} >Greet button</button>
        </div>
    )
}
export default ChildComponent