import styled from "styled-components";

export const Title = styled.h1`
    margin: 20px;
`
export const Anuncio = styled.p`
    margin: 0;
`

export const Container = styled.div`
    width: 410px;
    margin: 55px auto;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #000;
    background: #34626C;

    @media screen and (max-width: 900px){
        width: 50%;
        margin: 25% auto;
    }

    @media screen and (max-width: 600px){
        width: 90%;
        margin: 25% auto;
    }
`

export const ContainerGenerator = styled.div`
    width: 97%;
    height: 500px;
    min-width: 310px;
    max-width: 100%;
    margin: auto;
    border-radius: 10px;
    font-family: "Segoe UI";

    @media screen and (max-width: 500px){
        width: 90%;
    }
`

export const H1 = styled.h1`
    margin: 0;
`

export const InputGenerator = styled.input`
    width: 70%;
    margin: 80px auto;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    outline: none;
    text-align: center;
    font-family: "Segoe UI";
    font-size: 20px;
    display: block;

    &::selection{
        background: #fff;
    }
    
    @media screen and (max-width: 500px){
        width: 80%;
    }
`

export const ContainerFlex = styled.div`
    width: 100%;
    display: flex;

    
    @media screen and (max-width: 500px){
        width: 90%;
        margin: auto;
    }
`

export const Num = styled.span`
    width: 15%;
    display: block;
`

export const InputRange = styled.input`
    width: 60%;
    margin: auto;
    padding: 15px;
    display: block;

    @media screen and (max-width: 500px){
        width: 55%;
    }
`

export const Button = styled.button`
    width: 150px;
    margin : 50px auto;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    font-family: "Segoe UI";
    font-size: 15px;
    display: block;
    background: #839B97;

    
    @media screen and (max-width: 500px){
        width: 40%;
    }
`
export const ContainerButtons = styled.div`
    width: 80%;
    margin: auto;
    display: flex;

    @media screen and (max-width: 500px){
        width: 90%;
        margin: auto;
    }
`