import React from 'react';

class Filters extends React.Component {
    render() {
        const {changeValue} = this.props;
        return (
            <input type="text" className="character_search" onChange={changeValue}/>
        );
    }
}

export default Filters;