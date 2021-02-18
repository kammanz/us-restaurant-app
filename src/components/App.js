import React from 'react';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import SearchBar from './searchBar';
import List from './list';
import './App.css';

const App = ({ loading, dispatch }) => {
  return (
    <div className="App">
      <BounceLoader loading={loading} />
      <header>
        <h1>Let's Eat Out</h1>
        <h3>Search for restaurants in the United States.</h3>
        <p>
          Search restaurants by zip code, then filter by address or cuisine.
          We'll see what we can find!
        </p>
      </header>
      <main>
        <SearchBar dispatch={dispatch} />
        <br />
        <List />
      </main>
    </div>
  );
};

const mapStateToProps = ({ restaurants: { isLoading } }) => {
  return { loading: isLoading };
};
export default connect(mapStateToProps, {})(App);
