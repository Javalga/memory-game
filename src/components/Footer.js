import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return(
    <FooterContainer>
      <FooterSection>
        <p>Time</p>
        <span>0:00</span>
      </FooterSection>
      <FooterSection>
        <p>Moves</p>
        <span>0</span>
      </FooterSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 13% 13%;
  justify-content: center;
  align-items: flex-start;
  gap: 3%;
`
const FooterSection = styled.div`
  height: 80%;
  background-color: #DFE6EC;
  padding: 10%;
  display: flex;
  font-size: 3vh;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  border-radius: 1vh;
`