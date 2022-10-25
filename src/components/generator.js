import React from "react";
import { Container, ContainerGenerator, InputRange, Button, InputGenerator, Title, Anuncio, ContainerFlex, Num, ContainerButtons} from "./styledGenerator";

export default function Generador(){

    const GenerarPassword = () => {
        const range = document.querySelector('#range').value
        const mostrarContraseña = document.querySelector('#generator')
        //Creamos un string como diferentes letras y signos para tomarlos
        const Caracteres = "A%!DFGH¨I12345;678?`910JK}NÑ!¡&%OPQR:.-{VWXYZ$#()?!¡&%^+*-'abcd^{fghi,jklm=-:nño12678;910pqrsvwxyz"
        let password = ''

        //Recorremos el segun la cantidad de carcateres que elija el usuario
        for (let i = 0; i < range; i++) {
            //Se escoje al azar con ramdon las letras
            const random = Math.floor(Math.random() * Caracteres.length)
            //le pasamos la nueva contraseña a la variable
            password += Caracteres.substring(random, random + 1)
        }

        //se añade el resultado al valor del input para mostrarlo
        mostrarContraseña.value = password
    }

    const copiarAlPortapapeles = () => {
        //Selecciona el elemento
        const mostrarContraseña = document.querySelector('#generator')
        //Se selecciona el campo por medio de select
        mostrarContraseña.select();
        //Con este comando copiamos el valor al portapapeles
        document.execCommand("copy")
        try {
            alert('Copiado')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <Container>
            <ContainerGenerator>
                <Title>Generator of Password</Title>
                <InputGenerator id="generator" value=''/>
                <Anuncio>Number of characters</Anuncio>
                <ContainerFlex>
                    <Num>Min 8</Num>
                    <InputRange max='12' min='8' id="range" type='range'/>
                    <Num>Max 12</Num>
                </ContainerFlex>
                <ContainerButtons>
                    <Button id="range" type="button" onClick={() => GenerarPassword()}>Create</Button>
                    <Button onClick={() => copiarAlPortapapeles('generator')}>Copy</Button>
                </ContainerButtons>
            </ContainerGenerator>
        </Container>
    )
}


