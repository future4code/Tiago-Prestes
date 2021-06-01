 import style from 'style-components'
 
 const BigcardContainer = style.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

 const Imagem = style.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Nome = style.h4 `
    margin-bottom: 15px;
`

const BigcardContainer > div = style.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
export { BigcardContainer, Imagem, Nome }
