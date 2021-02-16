import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';

import SearchBar from './searchBar';

import List from './list';

const App = ({ isLoading }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <BounceLoader loading={loading} />
      <h1>Restaurant Search</h1>
      <div>
        <SearchBar />
        <br />
        <List /*isLoading={loading}*/ />
      </div>
    </div>
  );
};

const mapStateToProps = ({ isLoading }) => {
  return { isLoading };
};
export default connect(mapStateToProps, {})(App);
