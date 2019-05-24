import React from 'react';
import PropTypes from 'prop-types';


class CharacterCard extends React.Component {
    render() {
        const {data} = this.props;

        const matchId = this.props.idparam.match.params.id;
        const character = data[matchId];

        return (
            <React.Fragment>
                {character ?
                <div className="character_container">
                <img src={character.image} alt={character.name} className="character_img"/>
                <h2 className="character_name">{character.name}</h2>
                <ul className="info_list">
                    <li className="info_item house">{`Casa: ${character.house}`}</li>
                    <li className="info_item birth">{`Año de nacimiento: ${character.yearOfBirth}`}</li>
                    <li className="info_item patronus">{`Patronus: ${character.patronus}`}</li>
                    <li className="info_item alive">{`Al final de la saga: ${character.alive === true ? '¡ESTÁ VIVO!' : 'D.E.P'}`}</li>
                </ul>
            </div>
            :
            'Loading...'
            }
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    CharacterCard: PropTypes.object
}

export default CharacterCard;