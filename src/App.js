import React from 'react';
import './App.css';
import {dataFetch} from './services/DataFetch';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
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

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
