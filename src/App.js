import './css/App.css';
import './css/Grid.css';
import React from 'react';
import Game from './Components/game';
import MyParticels from './Components/MyParticels';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div id="App">
          <MyParticels className="particelsAsBackground"></ MyParticels>
          <div id="App2">
            <Game className="Game"/>
          </div>
    </div>
  );
  }
}

export default App;
