import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { PATH_LINK, POPULAR_MOVIES } from "../../constants/url";
import { ImageContainer, MainContainer, PosterContainer } from "./styled";


const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])
    // const history = useHistory()

    useEffect(() => {
        axios
            .get(`${POPULAR_MOVIES}`)
            .then((res) => {
                setPopularMovies(res.data.results)
                console.log("Popular Movies", res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <MainContainer>
            {popularMovies.map((item) => {
                return (
                <PosterContainer>
                    <ImageContainer>
                        <img src={`${PATH_LINK}${item.poster_path}`} />
                    </ImageContainer>
                    <p>{item.title}</p>
                </PosterContainer>
                )
            })}
        </MainContainer>
    )
}

export default PopularMovies