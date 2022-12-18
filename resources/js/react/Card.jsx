import React from "react";
import styled from "styled-components";
import '@splidejs/react-splide/css/sea-green';
import Container from "./Container";
import Personal_img from "./Personal_img";
const List = styled.li`
   list-style :none ;
   text-align: center;
`
const Card = styled.div`
position: relative;
    background-color:gray;
    width: calc(300px - 2rem);
    height: calc(320px - 2rem);
    margin-bottom: 2rem;
    border-radius: 10px;
    border: 5px solid white;
    box-shadow:  0 0 1rem 3px rgb(0, 0, 0, 0.1), 0 0 1rem -3px rgb(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    &::before{
    content: '';
    background:  ${(props)=> props.bg};
    position: absolute;
    bottom : -2rem  ;
    left: calc(-1rem - 5px);
    z-index: -1;
    width: 300px;
    height:calc(320px - 2rem);
    border-radius: 10px;
    box-shadow:  0 0 1rem 3px rgb(0, 0, 0, 0.1), 0 0 1rem -3px rgb(0, 0, 0, 0.1);
    }

`
export default (props)=>{
   
    return(<>
    <Container>
        <Card bg={props.bg}>
        <Personal_img bg={props.bg} gender={props.gender}/>
            <ul className="list-group ">
                <List className="list username">user name : <span>{props.name}</span></List>
                <List className="list user_age"> age : <span>{props.age}</span></List>
                <List className="list user_gender">gender : <span>{props.gender}</span></List>
                <List className="list user_address">address <span>{props.edu}</span></List>
            </ul>
        </Card>
    </Container>
    </>)
}
