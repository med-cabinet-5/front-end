import React from 'react'

import { StrainCardContainer, CardHeader, CardContent, CardButton } from '../styles'

import hybrid from '../images/Hybrid.png';
import sativa from '../images/Sativa.png';
import indica from '../images/Indica.png';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// toggle favorites... 
// //function to set as onclick to .post to backend to save strains
//     {
//         axios
//             .post(`https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${id}`)
//             .then(response => {

//             })
//             .catch(err => {

//             })
//     }



function StrainCard(props){
    return(

        <StrainCardContainer>
            <CardHeader>
                {/* logic for strain type logo/header color */}
                <button>
                    <img src={hybrid} />
                </button>

                {/* logic for favorite */}
                <h3>{props.name}</h3>

                <button 
                // onclick to submit favorite to saved strains
                >
                    <FavoriteBorderIcon />
                </button>

                {/* favorite icon */}
            </CardHeader>

            <CardContent>
                <div className="content">
                    <div>
                        <h4>Ailments Treated: </h4>
                        <p>
                            {props.ailments}
                        </p>
                    </div>

                    <div>
                        <h4>Flavor: </h4>
                        <p>
                            {props.flavor}
                        </p>
                    </div>

                    <div>
                        <h4>Common Effects: </h4>
                        <p>
                            {props.effects}
                        </p>
                    </div>
                </div>

                <div className="button">
                    <CardButton
                    // onclick to trigger modal
                    >
                        More Details
                    </CardButton>                
                </div>

            </CardContent>


        </StrainCardContainer>
    )
}

export default StrainCard