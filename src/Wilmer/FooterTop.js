import React from 'react'
import styled from "styled-components"
import img from "../assets/time.png"
import img1 from "../assets/location.png"
import img2 from "../assets/phnoe.png"
const FooterTop = () => {
    return (
        <Container>
            <Wrapper>
                <CardHolder>
                    <Card>
                        <Icon src={img}/>
                        <Time>Today 6:45pm - 8pm</Time>
                        <WorkingHours>Working Hours</WorkingHours>
                    </Card>
                    <Card>
                        <Icon src={img1}/>
                        <Time>Piastowska 4, Cracow</Time>
                        <WorkingHours>Find Us</WorkingHours>
                    </Card>
                    <Card>
                        <Icon src={img2}/>
                        <Time>503204176</Time>
                        <WorkingHours>Call to Us</WorkingHours>
                    </Card>
                </CardHolder>
            </Wrapper>
        </Container>
    )
}

export default FooterTop

const WorkingHours = styled.div`
    font-size: 13px;
    font-weight:200px;

`
const Time = styled.div`
margin-bottom: 5px;
font-weight: bold;
font-size: 15px;
`
const CardHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 84%;
    //background-color: red;
    justify-content: space-between;
    
`
const Card = styled.div`
    width: 300px;
    height: 130px;
    background-color: white;
    border-radius: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 26px 30px -10px,
    rgb(0 0 0 / 38%) 0px 16px 10px -10px;
    transform: scale(1);
    transition: all 350ms;
    :hover{
        transform: scale(1.03);
        cursor: pointer;

    }
`
const Icon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 20px;
`
const Container = styled.div`
    width: 100%;
    margin-bottom: 120px;

`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

