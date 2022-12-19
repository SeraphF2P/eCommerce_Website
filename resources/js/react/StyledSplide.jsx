import React from 'react';
import {Splide } from '@splidejs/react-splide';
import styled from 'styled-components';


let count = 0;
const bg_theme_color = ["#f2d204","#e9668d","#73a607",'#ffb757','#fe722f'];
 function change_theme_color() {
    count < bg_theme_color.length - 1 ? count++ :count = 0;
     return bg_theme_color[count];
}

const St_Splide = styled(Splide)`
    .splide__arrow svg{
        fill : #73a607;
    }
    .splide__pagination__page{
  height: 8px;
   bottom: 4.5rem;
    &.is-active{
    background:  #73a607;
}
    } 
`
function StyledSplide (props){
  return(<>
    <St_Splide  bg={props.bg} options={props.options}>
     {props.children}
     
    </St_Splide>
    </>)
}
export {StyledSplide,change_theme_color};