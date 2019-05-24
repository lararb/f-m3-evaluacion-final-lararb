import React from 'react';
import PropTypes from 'prop-types';


class Filters extends React.Component {
    render() {
        const {changeValue} = this.props;
        return (
            <input type="text" className="character_search" onChange={changeValue}/>
        );
    }
}

Filters.propTypes = {
    changeValue: PropTypes.func
}

export default Filters;