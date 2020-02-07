import React, { useState } from "react"

//card components
import StrainMiniCard from "./StrainMiniCard";
import StrainDetailCard from "./StrainDetailCard";

import { Modal, Button } from 'antd';

// import {results context}

function CardModal() {

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
        <Button type="primary" onClick={showModal}>
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
