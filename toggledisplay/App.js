//bind this keyword to the toggleDisplayBio() method 
//otherwise we can't access this inside toggleDisplayBio() method.
import React, { Component } from 'react'; 

class App extends React.Component {  

 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  


      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome !!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>Life is short , buy those shoes, have a sense of humor & take a break when you want!.</h4></p>  
                              <button onClick={this.toggleDisplayBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                 <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;  