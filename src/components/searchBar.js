import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, filterRestaurants } from '../actions/index';
import './searchBar.css';

const SearchBar = (props) => {
  const { filterRestaurants, restaurants } = props;
  const [zipCode, setZipCode] = useState('');
  const [isError, setError] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    filterRestaurants(name);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      props.fetchRestaurants(zipCode, true);
      setZipCode('');
    } else {
      setError(true);
    }
  };

  const handleChange = (value) => {
    setError(false);
    setZipCode(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setName(value);
  };

  const filter = () => {
    if (restaurants.restaurants.length > 0) {
      return (
        <>
          <label>Limit by Restaurant Name</label>
          <br />
          <input
            type="text"
            placeholder="Restaurant name"
            value={name}
            onChange={(e) => handleFilterChange(e)}
          />
        </>
      );
    }

    return null;
  };

  return (
    <section role="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter your chosen Zip Code</label>
        <br />
        <input
          type="number"
          placeholder="eg. 12345"
          value={zipCode}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="type">Submit</button>
      </form>
      {isError === true && <div>Please enter valid zip code</div>}
      {filter()}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(
  mapStateToProps,
  { fetchRestaurants, filterRestaurants },
  null
)(SearchBar);
