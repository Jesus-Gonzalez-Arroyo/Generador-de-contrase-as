import React from "react";
import { Container, ContainerGenerator, InputRange, Button, InputGenerator, Title, Anuncio, ContainerFlex, Num, ContainerButtons} from "./styledGenerator";

export default function Generador(){

    const GenerarPassword = () => {
        const range = document.querySelector('#range').value
        const Caracteres = "ABCDFGHIJKLMNÑOPQRSTUVWXYZabcdfghijklmnñopqrstuvwxyz12345678910$#()?!¡&%^+*-'"
        let password = ''

        for (let i = 0; i < range; i++) {
            const random = Math.floor(Math.random() * Caracteres.length)
            password += Caracteres.substring(random, random + 1)
        }

        console.log(password)
    }

    return(
        <Container>
            <ContainerGenerator>
                <Title>Generator of Password</Title>
                <InputGenerator/>
                <Anuncio>Number of characters</Anuncio>
                <ContainerFlex>
                    <Num>Min 8</Num>
                    <InputRange max='12' min='8' id="range" type='range'/>
                    <Num>Max 12</Num>
                </ContainerFlex>
                <ContainerButtons>
                    <Button id="range" type="button" onClick={() => GenerarPassword()}>Trigger</Button>
                    <Button>Copy</Button>
                </ContainerButtons>
            </ContainerGenerator>
        </Container>
    )
}


