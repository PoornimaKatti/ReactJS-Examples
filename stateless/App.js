//The functional component is also known 
//as a stateless component because
// they do not hold or manage state.
import './App.css';
import React, { Component } from 'react'; 

class App extends React.Component {  
   render() {  
      return (  
         <div>  
          
            <First/>  
            <Second/>  
         </div>  
      );  
   }  
}  
class First extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Welcome</h1>  
         </div>  
      );  
   }  
}  
class Second extends React.Component {  
   render() {  
      return (  
         <div>  
            <h2>www.welcome.com</h2>  
            <p>This websites contains the great CS tutorial.</p>  
         </div>  
      );  
   }  
}  
export default App;  
