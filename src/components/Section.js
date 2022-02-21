import React from 'react'
import styled from 'styled-components'

const Section = ({title, description, rightBtnText, leftBtnText, backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>

        <Button>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && <RightButton>
                    {rightBtnText}
                </RightButton>}
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    text-align:center;
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 756px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
background-color: #fff;
color: #000;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Button = styled.div``