import { useState } from "react";

const Contact = () =>{
    const [show,setShow] = useState(true);
    const [text,setText] = useState("")
    return (
        <div>
            <h1>
                My Contact details
            </h1>
            <div className="w-10 flex ">
                <input 
                    type={show ? "text" : "password"} 
                    placeholder="Enter your password"
                    value={text}   
                    onChange={(t) => setText(t.target.value)}
                />
                <button onClick={() => {
                    setShow(!show)
                }}>Hide</button>
            </div>
        </div>
    );
};

export default Contact;