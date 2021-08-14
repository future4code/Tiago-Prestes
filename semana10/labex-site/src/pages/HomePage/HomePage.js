import React from 'react';
import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const history = useHistory()


    const goToPrivateArea = () => {
        history.push("/login")
    }

    const goToTrips = () => {
        history.push("/trips/list")
    }


    return (
        <div>
            <p>LabeX</p>
            <button onClick={goToPrivateArea}>Área de Admin</button>
            <button onClick={goToTrips}>Ver Viagens</button>
        </div>
    )
}