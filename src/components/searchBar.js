import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/index';

const SearchBar = (props) => {
  const [zipCode, setzipCode] = useState('');

  const handleSubmit = (e) => {
    console.log('zip code', zipCode);
    props.fetchRestaurants(zipCode);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Enter Your Zip Code</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setzipCode(e.target.value)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps, { fetchRestaurants }, null)(SearchBar);
