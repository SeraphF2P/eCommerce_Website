import React, { useEffect, useState } from  "react"
import  {createRoot} from "react-dom/client"
import Global_reset from "./Global_reset";
import Card from "./Card";
import {SplideSlide } from '@splidejs/react-splide';
import {StyledSplide,change_theme_color}  from "./StyledSplide";
import { BallTriangle } from 'react-loader-spinner'

function App(){
    const [users, setusers] = useState([]);
    const [loding, setloding] = useState(true);
    const loding_page_styles = {
background : 'white',
position : 'absolute',
width : '100%',
height : '100vh',
display : 'flex',
justifyContent : 'center',
alignItems : 'center',
zIndex : '100',
    }
 useEffect(()=>{
  let user_info = [];
  const data_length = 10;
  let fetch_counter = 0;
  for (let i = 0; i < data_length; i++) {
    fetch('https://random-data-api.com/api/v2/users/')
    .then(res=>res.json())
    .then(data => {
        user_info.push({
            name : `${data.first_name}`,
            avatar : `${data.avatar}`,
            gender : `${data.gender}`,
            phone_number : `${data.phone_number}`,
            date_of_birth : `${data.date_of_birth}`,
            employment : {
                title:`${data.employment.title}`,
                key_skill:`${data.employment.key_skill}`,
            },
        });
        setusers([...user_info]);
        fetch_counter++
        if( fetch_counter == data_length){setloding(false)}
       
    })
    

}

},[])

    return(<>
    <Global_reset/>
   { loding && <BallTriangle wrapperStyle={loding_page_styles}/>}
<StyledSplide  bg={change_theme_color()}  options={ {rewind: true,width :'80vw',gap :'0rem', type   : 'loop'}} >
  {
 users && users.map(user => {
        return( 
        <SplideSlide>
        <Card name={user.name} date_of_birth={user.date_of_birth} employment={user.employment} 
        bg={change_theme_color()} gender={user.gender} avatar={user.avatar} />
        </SplideSlide>
     )
  }
    )
}
</StyledSplide>

          
    </>);
}

createRoot(document.getElementById("root")).render(<App/>)
