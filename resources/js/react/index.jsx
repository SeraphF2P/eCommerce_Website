import React from  "react"
import  {createRoot} from "react-dom/client"
import Global_reset from "./Global_reset";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from "./Card";



function App(){
    const students = [
        {name :"sam",age: 24,edu:"eng",gender: "male",bg:"#1acbe9"},
    {name :"yara", age: 20, edu:"eng",gender: "female",bg:"#EE3190"},
    {name :"mahmod", age: 23, edu:"eng",gender: "male",bg:"#75fd92"}
];
    return(<>
    <Global_reset/>
<Splide  options={ {rewind: true,width : '100%',gap :'1rem',} } aria-label="My Favorite Images">
  {
    students.map(student => {
        return( 
        <SplideSlide>
        <Card name={student.name} age={student.age} edu={student.edu} bg={student.bg} gender={student.gender} />
        </SplideSlide>
     )
  }
    )
}
</Splide>

          
    </>);
}

createRoot(document.getElementById("root")).render(<App/>)
