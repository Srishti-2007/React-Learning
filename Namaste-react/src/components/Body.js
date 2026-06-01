import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";
 
const Body = () => {
  const [Listofrest,seListofrest]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          const filterlist=Listofrest.filter(
            (restaurant)=>restaurant.data.avgRating > 4
          );
          seListofrest(filterlist);
        }}>
          Top Rated Restaurant</button>
      </div>
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