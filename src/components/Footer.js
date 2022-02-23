import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    
  return (
    <Container>
        <Links>
            <li><a href='#'>Tesla &#169; 2022</a></li>
            <li><a href='#'>Privacy & Legal</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Career</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Engage</a></li>
            <li><a href='#'>Location</a></li>
        </Links>
    </Container>
  )
}

export default Footer


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        list-style-type: none;
        padding-bottom: 25px;
    }
    a {
        padding: 8px;
        text-decoration: none;
        font-size: 13px;
    }

    @media (max-width: 756px) {
        display: block;
    }
`