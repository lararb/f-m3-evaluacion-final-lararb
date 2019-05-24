import React from 'react';
import './App.css';
import {dataFetch} from './services/DataFetch';



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
        <input type="text" className="character_search" onChange={this.handleChangeValue}/>
        <ul className="character_list">
          {data
          .filter(item => item.name.includes(value))
          .map(item => 
            <li className="character_item" key={item.id}>
              <div className="character_container">
                <img src={item.image} alt={item.name} className="character_img"/>
                <h2 className="character_name">{item.name}</h2>
                <h3 className="character_house">{item.house}</h3>
              </div>
            </li>
          )}
        </ul>
       
      </div>
    );
  }
}

export default App;
