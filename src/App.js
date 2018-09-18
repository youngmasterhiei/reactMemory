import React from "react";
import Header from "./app/components/Header/Header";
import Game from "./app/components/Game/Game";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Game />
        </div>
      </div>
    )
  }
}

export default App;
