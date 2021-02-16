import SearchBar from './searchBar';
import List from './list';

const App = () => {
  return (
    <div className="App">
      <h1>Find a Restaurant</h1>
      <div>
        <SearchBar />
        <br />
        <br />
        <List />
      </div>
    </div>
  );
};

export default App;
