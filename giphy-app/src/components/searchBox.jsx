import React, {useState} from "react";


const SearchField = (props) => {
    const [searchStr, setSearchStr] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setSearchStr(event.target.value);
    };
    //onSearch event handler when the user press enter or click button in an input ele with type = search
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchStr);
        setSearchStr('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value = {searchStr}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
};
export default SearchField;