import RestaurentCard from "./RestaurentCard";

import resList from "../utils/mockData";
 
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard
            key={restaurant.data.id}
            resdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;