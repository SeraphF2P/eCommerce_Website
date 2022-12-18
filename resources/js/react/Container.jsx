import React from "react";
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
padding-block: 3.8rem;
display: flex;
justify-content: center;
align-items: center;
`
export default props =>{
    return(<>
    <Container >
    {props.children}
    </Container>
    </>
    )
}