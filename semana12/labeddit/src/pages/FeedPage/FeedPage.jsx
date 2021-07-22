import React from "react"
import { MainContainer, PostContainer, WriterBox } from "./styled"
import PostCard from "../../components/PostCard"

const FeedPage = () => {
    return (
        <MainContainer>
            <WriterBox>
                <input type="text" placeholder="Escreve seu comentário" />
                <button>Postar</button>
            </WriterBox>
            <PostContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PostContainer>
        </MainContainer>


    )
}

export default FeedPage