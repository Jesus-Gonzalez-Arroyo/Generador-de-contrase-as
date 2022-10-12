import React from "react";
import { Container, ContainerGenerator, InputRange, Button, InputGenerator, Title, Anuncio, ContainerFlex, Num, ContainerButtons} from "./styledGenerator";

export default function Generador(){

    const GenerarPassword = () =>{
        const range = document.querySelector('#range')
        console.log(range.value)
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
                    <Button id="range" type="button" onClick={()=>GenerarPassword()}>Trigger</Button>
                    <Button>Copy</Button>
                </ContainerButtons>
            </ContainerGenerator>
        </Container>
    )
}


