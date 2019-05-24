import React from 'react';
import PropTypes from 'prop-types';


class Filters extends React.Component {
    render() {
        const {changeValue} = this.props;
        return (
            <React.Fragment>
                <label htmlFor="character_search"></label>
                <input type="text" name="character_search" className="character_search" onChange={changeValue}/>
            </React.Fragment>
        );
    }
}

Filters.propTypes = {
    changeValue: PropTypes.func
}

export default Filters;