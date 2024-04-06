import React from "react";
import ReactDOM from "react-dom";

// react.createElement -> React element - Js object -> HTML element (render)
const heading = React.createElement("h1", {id : "heading"}, "Hello world from React!");

// JSX -> react.createElement -> React element - Js object -> HTML element (render)
const jsxheading = (<h1 tabIndex="5" id="heading">Namaste react using JSX</h1>);

const HeaderComponent1 = () => {
    return <div>
        {title}
        <h1>Hello from react function component1</h1>
        <HeaderComponent2 />
    </div>
};
const HeaderComponent2 = () => (
    <h1>hello</h1>
);

const elem = <h3>react h3 element</h3>

const title = (
    <div>
        {elem}
        {HeaderComponent2()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent1 />); 
