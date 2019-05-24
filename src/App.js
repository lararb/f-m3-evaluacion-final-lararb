import React from 'react';
import './App.css';
import {dataFetch} from './services/DataFetch';
import {Switch, Route} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: ''
    }

    this.handleChangeValue = this.handleChangeValue.bind(this);
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

  render() {
    const {data, value} = this.state;
    return (
      <div className="App">
        <h1 className="app_title">Harry Potter Characters</h1>
        
        <Switch>
          <Route exact path="/" render= { () =>
            <React.Fragment>
              <Filters changeValue={this.handleChangeValue}/>
              <CharacterList data={data} value={value}/>
            </React.Fragment>
          }/>

          <Route path="/character/:id" render= {routerProps =>
            <CharacterCard idparam={routerProps} data={data}/>
          }/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
