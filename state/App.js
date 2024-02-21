import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import React,{Component} from 'react'

class App extends Component {
  render(){
  return (
    <div className="App">
    <Welcome />
    </div>
  );
}
}

export default App;
