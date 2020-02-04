//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";

function MarketingLanding () {
    return(
        <div>
    <Link to="/login"> Log-in</Link>
    <Link to="/signup"> Sign-Up</Link>
    </div>
    )
};

export default MarketingLanding