import './App.css';
import DataSharing from './Function-Components/DataSharing'
import DisplayList from './Function-Components/DisplayItems';
import BulkUseCase from './Function-Components/Bulb-on-off'
import FavoriteMovies from './Function-Components/AddMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BulkUseCase />
        <DataSharing />
        <DisplayList />
        <FavoriteMovies />
      </header>
    </div>
  );
}

export default App;
