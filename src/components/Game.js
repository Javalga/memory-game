import React from "react";
import styled from "styled-components";


export const Game = (props) => {
  return(
    <GameContainer>
      <IconContainer>{props.numberList[0]}</IconContainer>
      <IconContainer>{props.numberList[1]}</IconContainer>
      <IconContainer>{props.numberList[2]}</IconContainer>
      <IconContainer>{props.numberList[3]}</IconContainer>
      <IconContainer>{props.numberList[4]}</IconContainer>
      <IconContainer>{props.numberList[5]}</IconContainer>
      <IconContainer>{props.numberList[6]}</IconContainer>
      <IconContainer>{props.numberList[7]}</IconContainer>
      <IconContainer>{props.numberList[8]}</IconContainer>
      <IconContainer>{props.numberList[9]}</IconContainer>
      <IconContainer>{props.numberList[10]}</IconContainer>
      <IconContainer>{props.numberList[11]}</IconContainer>
      <IconContainer>{props.numberList[12]}</IconContainer>
      <IconContainer>{props.numberList[13]}</IconContainer>
      <IconContainer>{props.numberList[14]}</IconContainer>
      <IconContainer>{props.numberList[15]}</IconContainer>
    </GameContainer>
  );
}

const GameContainer = styled.div`
  display: grid;
  height: 55vh;
  width: 55vh;
  grid-template-rows: repeat(4,1fr);
  grid-template-columns: repeat(4,1fr);
  gap: 5%;
`
const IconContainer = styled.div`
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5vh;
  font-weight: 700;
`