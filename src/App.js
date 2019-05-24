import React from 'react';
import './App.css';
import {dataFetch} from './services/DataFetch';
import CharacterCard from './components/CharacterCard';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';



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
          return {...item, id: `id-${index}`};
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
        <Filters changeValue={this.handleChangeValue}/>
        <ul className="character_list">
          {data
          .filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
          .map(item => 
            <CharacterList item={item}/>
          )}
        </ul>
       
      </div>
    );
  }
}

export default App;
