import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const List = ({ restaurants, isLoading }) => {
  // console.log('is loading: ', isLoading);

  // const [restaurantList, setRestaurantList] = useState('null');
  // const [loading, setLoading] = useState(false);

  useEffect(() => {});

  if (restaurants && restaurants.length === 0) {
    return <div>no restaurants in that zip code</div>;
  }

  if (isLoading === true) {
    // console.log('here!');
    return <div></div>;
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

  return <div>{!isLoading ? restaurantList : null}</div>;
};

const mapStateToProps = ({ restaurants, isLoading }) => {
  return { restaurants, isLoading };
};

export default connect(mapStateToProps)(List);
