import React, { useState, useContext } from "react"

//card components
import StrainMiniCard from "./StrainMiniCard";
import StrainDetailCard from "./StrainDetailCard";

// import {results context}

//styles
import { Modal, Button } from 'antd';
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

    // useEffect(() => {
    //     useContext(resultsContext)
    // }, []);

    const [visible, setVisible] = useState(false);
    // const [editVisible, setEditVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    return (
        
    <div>
        {/* map */}
        <div>
            {/* <StrainMiniCard /> */}
        <Button onClick={showModal}>
            More Info
        </Button>
        </div>

        <Modal
            title="Basic Modal"
            visible={visible}
            onCancel={handleCancel}
            footer={[
            <Button key="back" onClick={handleCancel}>
                Close
            </Button>]}
        >   
            <div>
            <StrainDetailCard />
            </div>
        </Modal>
        </div>
    );

    
}

export default CardModal
