import React from 'react'
import styled from "styled-components"
import img from "../assets/DownLogo.png"
import img1 from "../assets/facebook.png"
import img2 from "../assets/instagram.png"
import img3 from "../assets/twitter.png"

const FooterDown = () => {
    return (
        <Container>
            <Wrapper>
              <Circle>
             
                  </Circle>  
               
            </Wrapper>
            <TheVeryLast>
            <SmallCircle>
                <LogoDown src={img}/>
            </SmallCircle>
            <LastContent>
                <TextLastContent>
                    <About>About</About>
                    <Menu>Menu</Menu>
                    <Contact>Contact</Contact>
                </TextLastContent>
                <LogoContent>
                    <Facebook src={img1}/>
                    <Twitter src={img3}/>
                    <Instagram src={img2}/>
                </LogoContent>
            </LastContent>
            </TheVeryLast>
        </Container>
    )
}

export default FooterDown 

const Contact = styled.div``
const About = styled.div``
const Menu = styled.div``
const LastContent = styled.div``
const TextLastContent = styled.div`
    display: flex;
    width: 270px;
    justify-content: space-between;
    font-weight: 600;
    color: white;
    font-size: 20px;
    margin-bottom: 25px;
`
const LogoContent = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
`
const Facebook = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`
const Twitter = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`
const Instagram = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`

const TheVeryLast = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LogoDown = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
`

const SmallCircle = styled.div`
    width: 230px;
    height: 230px;
    border-radius:50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
   
`

const Circle = styled.div`
    width: 1750px;
    height: 1400px;
    border-radius: 50%;
    background-color: rgb(57,117,70);
    position: absolute;
    
    bottom: -1100px;
    left: -150px;
    
`

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 70px;
    background-color: #fafafa;
    padding-top: 320px;
    overflow: hidden;
   position: relative;
   display: flex;
   justify-content: center;


`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
  
`