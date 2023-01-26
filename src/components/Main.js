import React from "react"
 
export default function Main() {
    return (
        <div className='container'>
            <div className='headings'>
                <h1 className="name-heading">Zoren Labrador</h1>
                <h2 className="name-heading">Training to become a Web Developer</h2>
                <h3 className="name-heading"><a href='https://github.com/ZorenDesigns' target='_blank' rel="noreferrer">github.com/ZorenDesigns</a></h3>
            </div>
                <button className="email-button" href="mailto: zorenzal@gmail.com">Email</button>
            <div className='about'>
                <h2>About</h2>
                <p>I am currently working to change my career to web development. I am studying front end languages such as CSS, HTML, and JavaScript. This is my first project using JavaScript React!</p>
                <p>I have started creating many projects and will use those to build my portfolio. I hope to get a job in web development sometime this year.</p>
            </div>
        </div>
    )
}