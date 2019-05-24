import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CharacterCard.css';


class CharacterCard extends React.Component {
    render() {
        const {data} = this.props;

        const matchId = this.props.idparam.match.params.id;
        const character = data[matchId];

        return (
            <React.Fragment>
                <div className="wrapper_card">
                {character ?
                    <div className="character_container">
                    <Link to="/"><i className="fas fa-times-circle"></i></Link>
                        <div className="item_img" style={{backgroundImage:`url(${character.image})`}}></div>
                        <div className="character_container--info">
                            <h2 className="item_name">{character.name}</h2>
                            <ul className="info_list">
                                <li className="info_item">
                                    <p className="item_house">{`Casa: ${character.house}`}</p>
                                </li>
                                <li className="info_item">
                                    <p className="item_birth">{`Año de nacimiento: ${character.yearOfBirth}`}</p>
                                </li>
                                <li className="info_item">
                                    <p className="item_patronus">{`Patronus: ${character.patronus}`}</p>
                                </li>
                                <li className="info_item">
                                    <p className="item_alive">{`Al final de la saga: ${character.alive === true ? '🥳 ¡ESTÁ VIVO! 🥳' : '☠️ D.E.P ☠️'}`}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                :
                'Loading...'
                }
                <Link to="/" className="card_link">Volver a investigar personajillos</Link>
                </div>
            
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    CharacterCard: PropTypes.object
}

export default CharacterCard;