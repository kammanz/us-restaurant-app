import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SearchBar from './searchBar';

import List from './list';

const App = ({ isLoading }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  console.log('app.js isLoading: ', isLoading);
  return (
    <div className="App">
      <h1>Restaurant Search</h1>
      {loading === true && <div>loading...</div>}
      <div>
        <SearchBar />
        <br />
        <List isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ isLoading }) => {
  return { isLoading };
};
export default connect(mapStateToProps, {})(App);
