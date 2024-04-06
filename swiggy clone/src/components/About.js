import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This website is purely built to learn REACT</h2>
            <UserClass name={"Punya Jain"} location={"New Delhi"} address={"shahdara"}/>
        </div>
    );
};

export default About;