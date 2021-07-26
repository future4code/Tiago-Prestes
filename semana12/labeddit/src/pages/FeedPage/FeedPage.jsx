import React from "react"
import { MainContainer, PostContainer, WriterBox } from "./styled"
import PostCard from "../../components/PostCard"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useHistory } from "react-router"
import { goToPostPage } from "../../routes/coordinator"
import { createPost } from "../../services/users"
import useForm from "../../hooks/useForm"

const FeedPage = () => {
    useProtectedPage()
    const feedPosts = useRequestData([], `${BASE_URL}/posts`)
    const history = useHistory()
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onClickCard = (id) => {
        goToPostPage(history, id)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    }

    const feedCards = feedPosts.map((post) => {
        return (
            <PostCard
                key={post.id}
                title={post.title}
                username={post.username}
                body={post.body}
                createdAt={post.createdAt}
                onClick={() => onClickCard(post.id)}
            />
        )
    })
    
    return (
        <MainContainer>
            <WriterBox onSubmit={onSubmitForm}>
                <input
                    type="title"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    placeholder="Título:"
                    required
                />
                <input
                    type="body"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    placeholder="Escreve seu comentário"
                    required
                />
                <button type="submit">Postar</button>
            </WriterBox>
            <PostContainer>
                {feedCards}
            </PostContainer>
        </MainContainer>


    )
}

export default FeedPage