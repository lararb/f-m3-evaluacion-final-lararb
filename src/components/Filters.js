import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';


class Filters extends React.Component {
    render() {
        const {changeValue, changeSelect} = this.props;
        return (
            <React.Fragment>
                <div className="filters_container">
                    <label htmlFor="character_search" className="character_search--label">¡Busca a los personajes más molones!</label>
                    <input type="text" id="character_search" className="character_search" onChange={changeValue} placeholder="Personajes"/>
                    <label htmlFor="character_select" className="character_select--label">¡Elige tu casa favorita!</label>
                    <select name="character_select" id="character_select" className="character_select" onChange={changeSelect}>
                        <option value="Casas">Casas</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                    </select>
                </div>
           </React.Fragment>
        );
    }
}

Filters.propTypes = {
    changeValue: PropTypes.func
}

export default Filters;