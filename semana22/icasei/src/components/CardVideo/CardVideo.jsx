import React from "react"
import { useHistory } from "react-router"
import { goToVideoPage } from "../../routes/coordinator"
import { TextContainer, VideoContainer } from "./styled"

const CardVideo = ({ video }) => {
    const history = useHistory()

    return (
        <VideoContainer>
            <img src={video.snippet.thumbnails.medium.url} alt={"imagem"} />
            <TextContainer>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.channelTitle}</p>
            </TextContainer>
            <button onClick={() => goToVideoPage(history, video.id.videoId)}>Ir para video</button>
        </VideoContainer>
    )
}

export default CardVideo