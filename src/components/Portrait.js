import React from "react"
import scar from "../images/scar.jpg"

export default function Picture() {
    return (
        <div className="picture">
            <img src={scar} className='portrait' alt="Scar"></img>
        </div>
    )
}