import React from "react";
import { TbSearch } from "react-icons/tb";


function SearchComponent(){
    return(
        <div className="searchInput">
            <input type='text'  placeholder= "Search Smartwatches"   
             style={{padding:'5px 10px', width: '200px', marginRight: '8px', borderRadius: '20px'}}/>

            <TbSearch/>

        </div>
    )
}
export default SearchComponent;