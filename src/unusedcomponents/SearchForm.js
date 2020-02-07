import React, { useState, useEffect } from "react";
import StrainMiniCard from "../components/StrainMiniCard";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     const results = strains.filter(strain => {
    //     console.log(strain)
    //     return strain.name.toLowerCase().includes(searchTerm.toLowerCase())
    // });
    
    // setSearchResults(results);
    // }, [searchTerm]);

    const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
    };
    return (
        <section className="search-form">
        <form>
            <label htmlFor="name">Search: </label>
            <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            />
        </form>
        <div className="character-list">
            {searchResults.map(strain => (
                <StrainMiniCard
                strain = {strain}
                />
            ))}
        </div>
        </section>
    );
}

