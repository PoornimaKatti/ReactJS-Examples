import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Poornima";
  const age = 30;
  var isStudent = true

  return (
    <div> 
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
  
}

export default App;
