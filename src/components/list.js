import React from 'react';
import { connect } from 'react-redux';

const List = ({ restaurants }) => {
  if (!restaurants) {
    return null;
  }

  const restaurantList =
    restaurants &&
    restaurants.map((restaurant, i) => {
      return (
        <div key={i}>
          <div>{restaurant.restaurant_name}</div>
          <div>address: {restaurant.address.formatted}</div>
          <div>
            cuisine:{' '}
            {restaurant.cuisines.map((cuisine) =>
              cuisine ? cuisine : 'not listed'
            )}
          </div>
          <br />
        </div>
      );
    });

  return <div>{restaurantList}</div>;
};

const mapStateToProps = ({ restaurants }) => {
  return { restaurants };
};

export default connect(mapStateToProps)(List);
