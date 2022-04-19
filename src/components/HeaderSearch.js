import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HeaderSearch = ({ onSearch, onClearSearch }) => {
    const [input, setInput] = useState('')
    const [searchBox, setSearchBox] = useState(false)

    const handleChangeInput = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (input) {
            onSearch(input)
            setInput('')
            setSearchBox(false)
        }
    }

    const handleClear = () => {
        onClearSearch()
    }
    return (
        <div className='header'>
            <div className="header-logo" onClick={handleClear}>
                <i className="header-icon fa-solid fa-film"></i>
                <h2 className="header-name">MovieOn</h2>
            </div>
            <div className="search-container">
                {searchBox &&
                    (<form onSubmit={handleSubmit} className="header-search">
                        <input
                            type="text"
                            className="input"
                            placeholder='Search...'
                            value={input}
                            onChange={handleChangeInput}
                        />
                    </form>)}
                <span className={searchBox ? "clear-icon" : "search-icon"}>
                    {
                        searchBox ? <i onClick={() => { setSearchBox(!searchBox) }} className="fa-solid fa-xmark"></i> : <i onClick={() => { setSearchBox(!searchBox) }} className="fa-solid fa-magnifying-glass"></i>
                    }
                </span>
            </div>
        </div >
    );
};

HeaderSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClearSearch: PropTypes.func.isRequired,
};

export default HeaderSearch;