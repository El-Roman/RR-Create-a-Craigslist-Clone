// Import data

// Import components
import './App.css';
import Gallery from './gallery'
import Searchbar from './searchbar'

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {<Searchbar />}
      </div>
      <div className="App">
        {<Gallery />}
      </div>
      <div className="App">
        { }
      </div>
    </div>
  );
}

export default App;
