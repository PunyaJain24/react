import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h3>name: {props.name}</h3>
            <h3>location: {props.location}</h3>
            <h3>address: {props.address}</h3>
        </div>
    )
}

export default User;