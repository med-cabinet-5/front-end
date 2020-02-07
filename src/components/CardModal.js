import React, { useState, useContext } from "react"

//card components
import StrainMiniCard from "./StrainMiniCard";
import StrainDetailCard from "./StrainDetailCard";

//context
import { ResultsContext } from "../contexts/ResultsContext"

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
    const [ strainData ] = useContext(ResultsContext) 
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
                <StrainMiniCard data={data}/>
                <StrainButton onClick={showModal}>
                    More Info
                </StrainButton>
            
                <Modal
                    title="Details"
                    visible={visible}
                    onCancel={handleCancel}
                    footer={[
                    <StrainButton key="back" onClick={handleCancel}>
                        Close
                    </StrainButton>]}
                    >   
                    <div>
                    <StrainDetailCard data={data} />
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
