import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/index';

import './searchBar.css';

const SearchBar = (props) => {
  const [zipCode, setZipCode] = useState('');
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  console.log('isError ', isError);

  const validate = () => {
    if (zipCode.length !== 5) {
      setError(true);
    }
    if (zipCode.length === 5) {
      setError(false);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      props.fetchRestaurants(zipCode);
      setZipCode('');
    }
  };

  const handleChange = (value) => {
    setZipCode(value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Find a Restaurant in your Area</label>
        <br />
        <input
          type="number"
          placeholder="Enter zip code"
          value={zipCode}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="type">Submit</button>
      </form>
      {isError === true && <div>Please enter valid zip code</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps, { fetchRestaurants }, null)(SearchBar);
