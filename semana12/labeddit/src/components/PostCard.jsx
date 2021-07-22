import React from "react"
import { TextContainer, PostContainer} from "./styled"

const PostCard = () => {
    return (
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
    )
}

export default PostCard