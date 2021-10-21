import React from "react";
import styled from "styled-components";
import FooterDown from "./FooterDown";
import FooterTop from "./FooterTop";

export const FooterWil = () => {
  return (
    <Container>
      <Wrapper>
        <FooterTop/>
        <FooterDown/>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
