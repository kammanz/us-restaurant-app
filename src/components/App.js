import SearchBar from './searchBar';
import List from './list';

const App = () => {
  return (
    <div className="App">
      <h1>Restaurant Search</h1>
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
