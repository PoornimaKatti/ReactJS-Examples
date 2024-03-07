import React from 'react'
import './App.css';
import globalvariable from 'components/globalvariable';

let globalName="Poornima";
function globalvariable() {
    let localName = "Katti";
  return (
    <div>
      <h1>Global Name:{globalName}</h1>
    </div>
  )
}

export default globalvariable