import React from "react"
import fbicon from "../images/fbicon.png"
import ghicon from "../images/ghicon.png"
import igicon from "../images/igicon.png"
import liicon from "../images/liicon.png"

export default function Footer() {
    return (
        <div className="wrapper">
            <div className="footer">
                    <a href='' target='_blank'><img src={fbicon} alt='fb'/></a>
                    <a href='https://github.com/ZorenDesigns' target='_blank' rel="noreferrer"><img src={ghicon} alt='gh'/></a>
                    <a href='' target='_blank'><img src={igicon} alt='ig'/></a>
                    <a href='https://www.linkedin.com/in/zorenlabrador1999/' rel="noreferrer" target='_blank'><img src={liicon} alt='li'/></a>
            </div>
        </div>
    )
} 