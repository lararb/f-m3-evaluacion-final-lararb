import React from 'react';
import PropTypes from 'prop-types';
import './Filters.css';


class Filters extends React.Component {
    render() {
        const {changeValue} = this.props;
        return (
            <React.Fragment>
                <div className="filters_container">
                        <label htmlFor="character_search" className="character_search--label">¡Busca a los personajes más molones!</label>
                        <input type="text" id="character_search" className="character_search" onChange={changeValue}/>
                </div>
           </React.Fragment>
        );
    }
}

Filters.propTypes = {
    changeValue: PropTypes.func
}

export default Filters;