import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/index';

const SearchBar = (props) => {
  const [zipCode, setZipCode] = useState('');
  const [isError, setError] = useState(false);
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
        <label>Enter Your Zip Code</label>
        <br />
        <input
          type="number"
          placeholder="12345"
          value={zipCode}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      {isError === true && <div>must be 5 numbers</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps, { fetchRestaurants }, null)(SearchBar);
