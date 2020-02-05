//Kennith
import React from 'react'

function StrainDetailCard(){
return(
<div>
    <div>
<h3>Common Effects</h3>
{/* possibly mapping depends on information from api*/}
<p>{props.strain_name.common_effects}</p>
</div>
<div>
    <h3>Taste and Flavors</h3>
{/* possibly mapping depends on information from api*/}
<p>{props.strain_name.flavors}</p>
</div>
<div>
    <h3>Details</h3>
<p>{props,strain_name.details}</p>
</div>
</div>
)
}


export default StrainDetailCard