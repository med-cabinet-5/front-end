//Kennith
import React from 'react'

function StrainDetailCard(props) {
    console.log(props.data)
return(
<div>
<h2>{props.data.strain}</h2>
    <div>
        <h3>Strain Type:</h3>
        <p>{props.data.type}</p>
    </div>
    <div>
        <h3>Ailments:</h3>
        <p>{props.data.ailments}</p>
    </div>
    <div>
        <h3>Common Effects</h3>
        <p>{props.data.effects}</p>
    </div>
    <div>
        <h3>Taste and Flavors</h3>
        <p>{props.data.flavor}</p>
    </div>
    <div>
        <h3>Details</h3>
        <p>{props.data.description}</p>
    </div>
</div>
)
}

export default StrainDetailCard