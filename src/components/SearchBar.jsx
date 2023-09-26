import PropTypes from "prop-types";

function SearchBar(props) {
    return ( <>
        <label htmlFor="search">
            Search
        </label>
        <input type="text" value={props.search} onChange={props.handleChange} />
    </> );
}

SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
}

export default SearchBar;