import React from 'react';
import './App.scss';
import {dataFetch} from './services/DataFetch';
import {Switch, Route, Link} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import escudos from './images/escudos.png';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
      select: ''
    }

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSelectHouse = this.handleSelectHouse.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }


  getCharacters(){
      dataFetch()
      .then(data => {
        const newData = data.map((item, index) => {
          return {...item, id: index};
        })

        this.setState({
          data: newData
        })
      })
  }

  handleChangeValue(event) {
    const currentValue = event.currentTarget.value;

    this.setState({
      value: currentValue
    })
  }

  handleChangeLinkColor(arr) {

    if(arr === 'Gryffindor') {
      return 'link_red'
    } else if (arr === 'Slytherin') {
        return 'link_green'
    } else if (arr === 'Hufflepuff') {
        return 'link_yellow'
    } else if (arr === 'Ravenclaw') {
        return 'link_blue'
    }
  }

  handleSelectHouse(event) {
    const currentSelect = event.currentTarget.value;

    this.setState({
      select: currentSelect
    })
  }

  
  render() {
    const {data, value, select} = this.state;
    return (
      <div className="app">
        <header className="app_header">
          <Link to="/" className="app_title--link">
            <h1 className="app_title">Harry Potter Characters</h1>
            <img src={escudos} alt="Escudos de las casas de Hogwarts" className="app_img--escudos"></img>
          </Link>
          
        </header>
        <main className="app_main">
          <Switch>
            <Route exact path="/" render= { () =>
              <React.Fragment>
                <Filters changeValue={this.handleChangeValue} changeSelect={this.handleSelectHouse}/>
                <CharacterList data={data} value={value} colorLink={this.handleChangeLinkColor} select={select}/>
              </React.Fragment>
            }/>

            <Route path="/character/:id" render= {routerProps =>
              <CharacterCard idparam={routerProps} data={data}/>
            }/>
          </Switch>
        </main>        
      </div>
    );
  }
}

export default App;
