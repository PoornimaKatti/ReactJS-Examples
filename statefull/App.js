//To set the state, 
//it is required to call the super() method in the constructor.
// It is because this.state is uninitialized before the super() method has been called.

import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: true };  
      }  
      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>You're braver than you believe, and stronger than you seem, and smarter than you think. ... </h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome !! </h1>  
                      { bio }   
                  </div>  
              );  
     }  
}  
export default App;  