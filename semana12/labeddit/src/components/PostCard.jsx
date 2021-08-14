import React from "react"
import { TextContainer, PostContainer, ButtonContainer } from "./styled"

const PostCard = (props) => {
    
    return (
        <div>
            <PostContainer onClick={props.onClick}>
                <p>Usuário: {props.username} </p>
                <h3>{props.title}</h3>
                <TextContainer>
                    <p>{props.body}</p>
                </TextContainer>
                <p>Enviado: {props.createdAt}</p>
            </PostContainer>
            <ButtonContainer>
                <button>UpVote ^</button>
                <p></p>
                <button>DownVote v</button>
            </ButtonContainer>  
        </div>

    )
}

export default PostCard