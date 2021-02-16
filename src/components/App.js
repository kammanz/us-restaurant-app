import { useState } from 'react';
import { connect } from 'react-redux';

import SearchBar from './searchBar';

import List from './list';

const App = ({ isLoading }) => {
  // const [loading, setLoading] = useState(isLoading);

  console.log('isloading', isLoading);
  return (
    <div className="App">
      <h1>Restaurant Search</h1>
      {isLoading && <div>loading...</div>}
      <div>
        <SearchBar />
        <br />
        <List />
      </div>
    </div>
  );
};

const mapStateToProps = ({ isLoading }) => {
  return { isLoading: isLoading };
};
export default connect(mapStateToProps, {})(App);
