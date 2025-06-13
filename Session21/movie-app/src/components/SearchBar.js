import React, {useState} from "react";

function SearchBar({onSearch})
{
    const [input,setInput]=useState("");

    const handleSearch=()=>{
        if(input.trim())
            onSearch(input);
    };
    return (
        <div className="search-bar">
            <input placeholder="Search..." value={input} onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && handleSearch()}/>
            <button onClick={handleSearch}>🔍</button>
        </div>
    );
}
export default SearchBar;