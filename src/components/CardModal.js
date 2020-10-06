import React, { useState, useContext } from "react"

// //card components
// import StrainMiniCard from "../unusedcomponents/StrainMiniCard";
// import StrainDetailCard from "../unusedcomponents/StrainDetailCard";

//context
import { StrainResultsContext } from "../contexts/StrainResultsContext"

//styles
import { Modal } from 'antd';
import styled from "styled-components";

const StrainButton = styled.button`
margin: 5%;
width: 35%;
background-color: #1497AB;
color: white;
padding: 1%;
border-radius: 8px;
`

function CardModal() {
    const [ strainData ] = useContext(StrainResultsContext) 
    console.log(strainData)

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    return (
        
    <div>
        {strainData.map(data => {
            return(
            <div>
                {/* mini card */}
                <div>
                    <h2>{data.strain}</h2>
                    <div>
                        <h3>Strain Type:</h3>
                        <p>{data.type}</p>
                    </div>
                </div>
                <StrainButton onClick={showModal}>
                    More Info
                </StrainButton>

                
                <Modal
                    title="Details"
                    visible={visible}
                    onCancel={handleCancel}
                    // destroyOnClose={true}
                    footer={[
                    <StrainButton key="back" onClick={handleCancel}>
                        Close
                    </StrainButton>]}
                >   
                    <div>
                    <h2>{data.strain}</h2>
                        <div>
                            <h4>{data.type}</h4>
                            <h3>Ailments:</h3>
                            <p>{data.ailments}</p>
                            <h3>Common Effects</h3>
                            <p>{data.effects}</p>
                            <h3>Taste and Flavors</h3>
                            <p>{data.flavor}</p>
                            <h3>Details</h3>
                            <p>{data.description}</p>
                        </div>
                    </div>
                
                </Modal>
            </div>
            )
        } 
        )}
    </div>
    );

    
}

export default CardModal
