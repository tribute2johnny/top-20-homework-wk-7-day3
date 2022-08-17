import './App.css';
import MusicContainer from './containers/MusicContainer';

function App() {
  return (
    <div className="App">
      <h1 className="appH1">Top 20 Charts Bonanza!!!</h1>
      <div className="listContainer">
      <MusicContainer />
      </div>
    </div>
  );
}

export default App;
