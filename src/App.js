import './App.css';
import Dog from './dog.gif';
import Logo from './VetVerse-Logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <img src={Dog} alt="dog.gif" />


       <h1> Building something great.</h1>
       <h5> Check back with us soon! </h5>

       <p>Brought to you by: </p>
       <img src={Logo} alt="VetVerse" />
     
      </header>
    </div>
  );
}

export default App;
