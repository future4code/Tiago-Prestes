import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_KEY, MOVIE_DETAILS, PATH_LINK_IMAGE } from "../../constants/url";
import { goToPopularMovies } from "../../routes/coordinator";
import { DescriptionContainer, ImagePoster, InfoContainer, MainContainer, TitleContainer } from "./styled";
import { MdOutlineKeyboardReturn } from "react-icons/md";

const MovieDetails = () => {
    const [currentMovie, setCurrentMovie] = useState([])
    const { path } = useParams()
    const history = useHistory()

    useEffect(() => {
        axios
            .get(`${MOVIE_DETAILS}${path}${API_KEY}`)
            .then((res) => {
                setCurrentMovie(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <MainContainer>
            <ImagePoster background={`${PATH_LINK_IMAGE}${currentMovie.backdrop_path}`}>
                <img src={`${PATH_LINK_IMAGE}${currentMovie.poster_path}`} alt={currentMovie.title} />
            </ImagePoster>
            <InfoContainer>
                <TitleContainer>
                   <h4>{currentMovie.title}</h4>
                   <p></p>
                </TitleContainer>
                <DescriptionContainer>
                    <p>{currentMovie.overview}</p>
                </DescriptionContainer>
            <button onClick={() => goToPopularMovies(history)}><MdOutlineKeyboardReturn /></button>
            </InfoContainer>

        </MainContainer>
    )
}

export default MovieDetails