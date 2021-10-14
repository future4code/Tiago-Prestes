import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams, useHistory } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { goToSearchPage } from "../../routes/coordinator"
import { MainContainer } from "./styled"

const VideoPage = () => {
    const [currentVideo, setCurrentVideo] = useState([])
    const {name} = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = 'key=AIzaSyA96PiYCPFBBbbYjogiUKa6UqKbKQmC-Wg'

        axios
        .get(`${BASE_URL}videos?id=${name}&part=snippet,statistics&${token}`)
        .then((res) => {
            setCurrentVideo(res.data.items)
            console.log("Video atual", res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const linkYoutube = `https://www.youtube.com/watch?v=${name}`

    return (
        <MainContainer>
            <button onClick={() => goToSearchPage(history)}>Voltar</button>
           {currentVideo.map((data) => {
               return (
                   <div>
                   <ReactPlayer url={linkYoutube}/>
                   <p>{data.snippet.title}</p>
                   <p>{data.snippet.description}</p>
                   </div>
               )
           })}
        </MainContainer>
    )
}

export default VideoPage