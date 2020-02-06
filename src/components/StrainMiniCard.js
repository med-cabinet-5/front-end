//Danika
import React from "react";
import styled from "styled-components";
//import axios from "axios";
//import useState

//Styled components
const CardsContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
`

const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

export default function StrainMiniCard(props) {

    //SET STATE FOR CARDS & LIKED/SAVED STRAINS
    //const [cards, setCards] = useState([]);
    //const [savedStrains, setSavedStrains] = useState();

    //CALL DATA
    /*{useEffect(() => {
    axios.get()
    .then(response => {
       setCards(response.data.results);
      console.log(response.data);
    })

  .catch(error => {
    console.log("Uh ohhh! Where's my data??!!", error);
});

}, []);}*/
    
return (
    
        <CardsContainer>
             <CardBody>
                 <div clasName="card-header">
                 <p>{props.strain}</p>  <button>kjgk</button>
                 </div>
                 <div className="card-main">
                 <h1>{props.name_abbreviated}</h1>  
                 </div>
                 <div className="card-footer">
                 <h2>{props.name}</h2>
                 </div>
        </CardBody> 
        </CardsContainer>
       
       )
     }
