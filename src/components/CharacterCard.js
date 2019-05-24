import React from 'react';

class CharacterCard extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <React.Fragment>
                <div className="character_container">
                    <img src={item.image} alt={item.name} className="character_img"/>
                    <h2 className="character_name">{item.name}</h2>
                    <h3 className="character_house">{item.house}</h3>
              </div>
            </React.Fragment>
        );
    }
}

export default CharacterCard;