import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function MyLists() {
    const sessionLists = Object.keys(sessionStorage);
  return (
    <Wrapper>
        <h1>Mis listas:</h1>
        <List>
            <ul>
                {
                    sessionStorage?.length > 0 ?
                        sessionLists.map((item, key)=>(
                            <li key={key} className="CTA">
                                <Link to={`/lista/${item}`}>{item}</Link>
                            </li>
                        )) : <li>No tienes ninguna lista creada.</li>
                }
            </ul>
        </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
`

const List = styled.div`
    width: 100%;
    ul{
        padding-top: 35px;
        text-align: center;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        a{
            color: var(--c-white);
            text-decoration: none;
        }
    }
`