import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <li className="character_item" key={item.id}>
              <CharacterCard item={item}/>
            </li>
        );
    }
}

export default CharacterList;