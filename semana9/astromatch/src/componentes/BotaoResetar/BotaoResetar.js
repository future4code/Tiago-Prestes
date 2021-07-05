import axios from "axios"
import React from "react"

export const BotaoResetar = (props) => {



    return (
        <div>
            <button onClick={props.resetaMatches}>Reseta Matches</button>
        </div>
    )
}