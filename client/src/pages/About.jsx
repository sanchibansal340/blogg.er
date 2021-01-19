import React from "react";

function About() {
    return(
        <div className="About container" style={{ marginTop: '8rem' }}>
            <h1>About Us</h1>
            <p>
                This project was created as part of a class project and to enhance my skills in Backend web development.
                <br/><br/>
                I used MERN stack to build this project and Passport JS with JWT strategy for authentication.
                <br/>
                I also used Redux for easy access &amp; modification of common states from a state tree structure.
            </p>
        </div>
    )
}

export default About;