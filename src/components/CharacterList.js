import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class CharacterList extends React.Component {
    render() {
        const {data, value} = this.props;

        return (
            <ul className="character_list">
                {data
                .filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
                .map(item => 
                    <li className="character_item" key={item.id}>
                    
                        <img src={item.image} alt={item.name} className="character_img"/>
                        <h2 className="character_name">{item.name}</h2>
                        <h3 className="character_house">{item.house}</h3>
                    <Link to={`/character/${item.id}`}>{`Saber más cositas sobre ${item.name}`}</Link>
                    </li>
                )}
            </ul>
            
        );
    }
}

CharacterList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string
}

export default CharacterList;