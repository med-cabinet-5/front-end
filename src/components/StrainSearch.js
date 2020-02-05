import React from "react";
import StrainDetailCard from "./StrainDetailCard";
import SearchForm from "./SearchForm";

function StrainSearch() {
    return (
        <div>
        <div>
        <SearchForm />
        </div>
        <div>
        <StrainDetailCard />
        </div>
        </div>
    )
}

export default StrainSearch