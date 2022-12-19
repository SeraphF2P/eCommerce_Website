import React from "react";
import styled from "styled-components";
import '@splidejs/react-splide/css/sea-green';
import Container from "./Container";
import Personal_img from "./Personal_img";

const Card = styled.div`
position: relative;
    background-color: #a4a0a0;
    width: calc(280px - 2rem);
    height: calc(340px - 2rem);
    margin-bottom: 2rem;
    border-radius: 10px;
    border: 5px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 3rem ;
    padding-inline: 1rem;
    &::before{
    content: '';
    background:  ${(props)=> props.bg};
    position: absolute;
    bottom : -2rem  ;
    left: calc(-1rem - 5px);
    z-index: -1;
    width: 280px;
    height:calc(340px - 2rem);
    border-radius: 10px;
    box-shadow:  0 0 .6rem 3px rgb(0, 0, 0, 0.2), 0 0 .6rem -3px rgb(0, 0, 0, 0.2);
    }
h2{
    font-size: 2rem;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
`
export default (props)=>{
   
    return(<>
    <Container>
        <Card bg={props.bg}>
        <Personal_img bg={props.bg} gender={props.gender} avatar={props.avatar} />
            <h2>{props.name}</h2>
            <div > date of birth : <span>{props.date_of_birth}</span></div>
            <div >gender : <span>{props.gender}</span></div>
            <div >job title :<br/><span>{props.employment.title}</span></div>
            <div >skill set :<br/><span>{props.employment.key_skill}</span></div>
        </Card>
    </Container>
    </>)
}
