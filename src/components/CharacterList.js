import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterList.scss';


class CharacterList extends React.Component {
    render() {
        const {data, value, colorLink} = this.props;

        return (
            <ul className="character_list">
                {data
                .filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
                .map(item => 
                    <li className="character_item" key={item.id}>
                        <div className="character_item--container">
                            <img src={item.image} alt={item.name} className="character_img"/>
                            <h2 className="character_name">{item.name}</h2>
                            <p className="character_house">{item.house}</p>
                        </div>
                        <Link to={`/character/${item.id}`} className={`character_link ${colorLink(item.house)}`}>{`Salseo sobre ${item.name}`}</Link>
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