import React, { useState } from 'react'

import { Progress, Modal } from 'antd';

import { StrainCardContainer, CardHeader, CardContent, CardButton, ModalHeader, ModalContent } from '../styles'

import hybrid from '../images/Hybrid.png';
import sativa from '../images/Sativa.png';
import indica from '../images/Indica.png';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

// toggle favorites - onclick to submit to favorites endpoint
//     {
//         axios
//             .post(`https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${id}`)
//             .then(response => {

//             })
//             .catch(err => {

//             })
//     }


// logic/function to toggle favorites icon to filled when in favorites list
const favicon  = <FavoriteBorderIcon />





function StrainCard(props){

    function icon() {
        if(props.type === 'Sativa'){
            return sativa
        }
        else if(props.type === 'Indica'){
            return indica
        } else {
            return hybrid
        }
    };

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };


    
    return(

        <StrainCardContainer>
            <CardHeader>
                <div>
                    <img src={icon()} />
                </div>

                <h3>{props.name}</h3>

                <div>
                <button 
                // onclick to submit favorite to saved strains
                >
                    {favicon}
                </button>
                </div>
            </CardHeader>

            <CardContent>
                <div className="content">
                    <div>
                        <h4>Type: </h4>
                        <p>
                            {props.type}
                        </p>
                    </div>
                    
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

                <div className="percent">
                        <p>% Match: </p>
                        <div className="bar">
                            <Progress
                                type="line"
                                strokeColor={{
                                    from: '#3d6a25',
                                    to: '#87d068',
                                }}
                                style={{
                                    height: '7px' 
                                }}
                                status="normal"
                                trailColor='#F4F4E1'
                                strokeWidth={7}
                                percent={80}
                                size="small"
                            />
                        </div>
                    </div>

                <div className="button">
                    <CardButton
                        onClick={showModal}
                    >

                        More Details
                    </CardButton>                
                </div>

            <Modal
                visible={visible}
                onCancel={handleCancel}
                footer={[
                <CardButton key="back" onClick={handleCancel}>
                    Close
                </CardButton>]}
                bodyStyle={{
                    padding: '0',
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                style={{
                    fontFamily: 'Roboto Condensed',
                }}
            >   
            <div
                style = {{
                    width: '100%'
                }}>
                <ModalHeader>
                    <div>
                        <span></span>
                        <h1>{props.name}</h1>
                        <button 
                        // onclick to submit favorite to saved strains
                        >
                            {favicon}
                        </button>
                        
                    </div>
                </ModalHeader>
                <ModalContent>
                    <p>{props.description}</p>

                    <h3>Strain Type:</h3>
                    <p>{props.type}</p>
                    
                    <h3>Ailments:</h3>
                    <p>{props.ailments}</p>
                    
                    <h3>Common Effects:</h3>
                    <p>{props.effects}</p>
                    
                    <h3>Taste and Flavors:</h3>
                    <p>{props.flavor}</p>
                    
                    
                </ModalContent>
            </div>
        </Modal>

        </CardContent>


        </StrainCardContainer>
    )
}

export default StrainCard