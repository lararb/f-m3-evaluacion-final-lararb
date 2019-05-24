import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


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
                    <li className="info_item">
                        <h3 className="character_house">{`Casa: ${character.house}`}</h3>
                    </li>
                    <li className="info_item birth">
                        <h3 className="character_birth">{`Año de nacimiento: ${character.yearOfBirth}`}</h3>
                    </li>
                    <li className="info_item">
                        <h3 className="character_patronus">{`Patronus: ${character.patronus}`}</h3>
                    </li>
                    <li className="info_item">
                        <h3 className="character_alive">{`Al final de la saga: ${character.alive === true ? '🥳 ¡ESTÁ VIVO! 🥳' : '☠️ D.E.P ☠️'}`}</h3>
                    </li>
                </ul>
            </div>
            :
            'Loading...'
            }
            <Link to="/">Volver a investigar personajillos</Link>
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    CharacterCard: PropTypes.object
}

export default CharacterCard;