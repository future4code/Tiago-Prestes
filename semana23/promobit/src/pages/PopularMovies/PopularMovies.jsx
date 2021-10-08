import { Pagination, Stack } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {  PATH_LINK_IMAGE, POPULAR_MOVIES } from "../../constants/url";
import { goToMovieDetails } from "../../routes/coordinator";
import { ImageContainer, MainContainer, PosterContainer, TitleContainer, VoteContainer } from "./styled";



const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [page, setPage] = useState(1)
    const history = useHistory()

    const handleChange = (event, value) => {
        setPage(value)
    }
    
    useEffect(() => {
        axios
            .get(`${POPULAR_MOVIES}${page}`)
            .then((res) => {
                setPopularMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[page])

    const {results} = popularMovies

    return (
        <MainContainer>
            {results && results.map((item) => {
                return (
                    <PosterContainer key={item.id}>
                            <TitleContainer>
                                <p>{item.title}</p>
                            </TitleContainer>
                        <ImageContainer>
                            <img 
                            onClick={() => goToMovieDetails(history, item.id)} 
                            src={`${PATH_LINK_IMAGE}${item.poster_path}`}
                            alt={item.title}
                        />
                        </ImageContainer>
                        <VoteContainer>
                            <p>{item.vote_average}</p>
                        </VoteContainer>
                    </PosterContainer>
                )
            })}
        <Stack spacing={2}>
            <Pagination count={500} page={page} onChange={handleChange} />
        </Stack>
        </MainContainer>
    )
}

export default PopularMovies