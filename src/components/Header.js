import React from "react";
import styled from "styled-components";
import logo from '../images/memory-logo.png'

export const Header = (props) => {
  return(
    <HeaderContainer>
      <LogoContainer>
        <img src={logo}></img>
      </LogoContainer>
      <NewGame>
        <button onClick={props.sortArr}>New Game</button>
      </NewGame>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25%;
  justify-content: space-between;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  img{
    max-width: 180px;
  }
`
const NewGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    padding: 3%;
    width: 20vh;
    border-radius: 5vh;
    border: 0;
    background: #DFE6EC;
    color: #4B5A66;
    font-size: 2vh;
    font-weight: 700;
    cursor: pointer;
  }
`