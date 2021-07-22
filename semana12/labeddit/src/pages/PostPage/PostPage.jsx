import React from "react"
import {
    MainContainer,
    WriteBox,
    PostContainer,
    PageContainer,
    TextContainer,
    CommentSection
} from "./styled"

const PostPage = () => {
    return (
        <MainContainer>
            <PageContainer>
                <h2>Title</h2>
                <PostContainer>
                    <h3>Nome de usuário</h3>
                    <TextContainer>
                        <p>Texto do post:
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam harum suscipit iusto eius similique aperiam, nobis, ab perferendis natus rem eligendi, inventore voluptates ad repudiandae quos magni ratione dolorem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi nemo, amet porro corporis assumenda illo esse
                        </p>
                    </TextContainer>
                    <p>Votos: 1</p>
                </PostContainer>
                <WriteBox>
                    <input type="text" placeholder="Escreve seu comentário" />
                    <button>Enviar</button>
                </WriteBox>
                <CommentSection>
                    <h4>Nome de usuário</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam harum suscipit iusto eius similique aperiam, nobis, ab perferendis natus rem eligendi, inventore voluptates ad repudiandae quos magni ratione dolorem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </CommentSection>
            </PageContainer>
        </MainContainer>
    )
}

export default PostPage