import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"

export const TripDetailsPage = () => {
    const history = useHistory()
    const [ tripDetail, setTripDetail ] = useState([])
    
    useEffect(() => {
        renderList()
        const token = localStorage.getItem('token')

        if(token === null) {
            history.push('/login')
        }
    }, [])

    const renderList = () => {
        const token = localStorage.getItem('token')
        const headers = {
            headers:{
                auth: token
            }
        }

        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-prestes-molina/trip/NoIFVcOiSgTKTIPVZwXS', headers)
            .then((res) => {
                setTripDetail(res.data.trip)
                console.log(res.data.trip.candidates)
            })
            .catch((err) => {
                console.log('Ha ha ha! You didnt say the magic word!',err)
            })
    }

    const goBackPage = () => {
        history.goBack()
    }

    return (
        <div>
            Trip Details Page
            <button onClick={goBackPage}>Voltar</button>
        </div>
    )
}