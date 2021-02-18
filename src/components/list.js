import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const List = ({ restaurantList, filteredRestaurantList, isLoading }) => {
  useEffect(() => {}, [filteredRestaurantList]);
  if (!restaurantList) {
    return null;
  }

  if (filteredRestaurantList) {
    return (
      filteredRestaurantList &&
      filteredRestaurantList.map((restaurant, i) => {
        return (
          <li key={i}>
            <h5>{restaurant.restaurant_name}</h5>
            <p>address: {restaurant.address.formatted}</p>
            <p>
              cuisine:{' '}
              {restaurant.cuisines.map((cuisine) =>
                cuisine ? cuisine : 'not listed'
              )}
            </p>
            <br />
          </li>
        );
      })
    );
  }

  const renderRestaurantList =
    restaurantList &&
    restaurantList.map((restaurant, i) => {
      return (
        <li key={i}>
          <h5>{restaurant.restaurant_name}</h5>
          <p>address: {restaurant.address.formatted}</p>
          <p>
            cuisine:{' '}
            {restaurant.cuisines.map((cuisine) =>
              cuisine ? cuisine : 'not listed'
            )}
          </p>
          <br />
        </li>
      );
    });

  return <ul>{!isLoading ? renderRestaurantList : null}</ul>;
};

const mapStateToProps = ({
  restaurants: { restaurants, isLoading, filteredRestaurants },
}) => {
  return {
    restaurantList: restaurants,
    isLoading: isLoading,
    filteredRestaurantList: filteredRestaurants,
  };
};

export default connect(mapStateToProps, null)(List);
