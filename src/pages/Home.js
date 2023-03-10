import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Wrapper>
        <Title>
            ListApp
        </Title>
        <Description>
            Crea la lista de compras desde tu celular, <i>sin necesidad de tener acceso a internet.</i> 
        </Description>
        <Description>
            Fácil, rápido y de forma intuitiva.
        </Description>
        <ButtonBox>
            <Link to={'nueva'}>Empezá</Link>
            <Link to={'tutorial'}>¿Cómo se usa?</Link>
        </ButtonBox>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 0 5px;
`

const Title = styled.h1`
    color: #6C94E6;
`

const Description = styled.p`
    font-weight: bold;
    margin: 0 auto;
    letter-spacing: 2px;
    line-height: 25px;
`

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    a{
        color: var(--c-white);
        text-decoration: none;
    };
`