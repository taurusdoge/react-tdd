import { useEffect } from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../store/restaurants/actions";

export const RestaurantList = ({ 
  loadRestaurants,
  restaurants
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurants.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = {loadRestaurants};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
