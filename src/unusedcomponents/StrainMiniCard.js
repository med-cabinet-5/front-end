// //Danika
// import React, { useState } from "react";
// import styled from "styled-components";

// //Styled components
// const CardsContainer = styled.div`
// margin-top: 5%; 
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// color: white;
// justify-content: center;
// `

// const CardBody = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: #918383;
// min-height: 500px;
// max-width: 400px;
// min-width: 400px;
// `
// const CardHeader = styled.div`
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// `;

// const FavouritesButton = styled.i`
// color: white;
// `;


// export default function StrainMiniCard(props) {
//     console.log("mini", props)

    //SET STATE FOR CARDS 
    //const [cards, setCards] = useState([]);

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


    //FAVOURITES BUTTON FUNCTIONALITY
    //ADD ONCLICK EVENT FOR FAV ICON SO THAT COLOR CHANGES
    //ADD STATE AND CREATE A NEW ARRAY OF USER'S FAVOURITES.

    /*
    function setColor(icon, color){
        let count=1;
        let favsButton = document.getElementbyClaassName("far fa-heart")
        if (count == 0){
            favsButton.style.backgroundColor = "white"
            count=1;        
        }
        else{
            favsButton.style.backgroundColor = "red"
            count=0;
        }
    }
    */

    //const [saved, setSaved] = useState([]);

    //I am confused about how to do this.


    
// return (
    
//         <CardsContainer>
//             <CardBody>
//                 <CardHeader>
//                 <p>{props.data.strain}</p>  
//                 <i /*onClick(setColor())*/class="far fa-heart"></i>
//                 </CardHeader>
//                 <div className="card-main">
//                 <h1>{props.name_abbreviated}</h1>  
//                 </div>
//                 <div className="card-footer">
//                 <h2>{props.name}</h2>
//                 </div>
//         </CardBody> 
//         </CardsContainer>
//     )
//     }