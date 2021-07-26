import React from "react"
import { useHistory, useParams } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { goToFeedPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/urls"
import {
    MainContainer,
    WriteBox,
    PostContainer,
    PageContainer,
    TextContainer,
    CommentSection
} from "./styled"

const PostPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const feedPosts = useRequestData([], `${BASE_URL}/posts`)


    const listComments = comments.map((comment) => {
        return <CommentSection>
            <h4>Comentario de: {comment.username}</h4>
            <p>{comment.body}</p>
        </CommentSection>
    })

    const feedCards = feedPosts.filter((post) => {
        return post.id === params.id
    }).map((post) => {
        return (
            <PostContainer>
                <h2>Título: {post.title}</h2>
                <TextContainer>
                    <p>{post.body}</p>
                </TextContainer>
                <h4>Usuário: {post.username} </h4>
                <p>Votos: {post.voteSum}</p>
            </PostContainer>
        )
    })


    return (
        <MainContainer>
            <PageContainer>
                <button onClick={() => goToFeedPage(history)}>Voltar para o Feed</button>
                {feedCards}
                <WriteBox>
                    <input type="text" placeholder="Escreve seu comentário" />
                    <button>Enviar</button>
                </WriteBox>
                {listComments}
            </PageContainer>

        </MainContainer>
    )
}

export default PostPage