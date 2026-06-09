import RestaurentCard from "./RestaurentCard";
import { useState , useEffect } from "react";
import Shimer from "./Shimer";
import resList from "../utils/mockData";
 
const Body = () => {
  // Local state variable
  const [Listofrest, setListofrest] = useState([]);
  const [filterRestaurent, setfilterRestaurent] = useState([]);
  const [serachtext, setserachtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://dummyjson.com/recipes"
    );

    const json = await data.json();

    setListofrest(json.recipes);
    setfilterRestaurent(json.recipes);
  };
  
  // conditional Rendring
  // if(Listofrest.length===0){
  //    return <h1> Loading.... </h1>
  //    return <Shimer></Shimer>
  // }

  // using terinary operator
  return Listofrest.length === 0 ? <Shimer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serachtext}
            onChange={(e) => {
              setserachtext(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filterRest = Listofrest.filter((rest) =>
                rest.name
                  .toLowerCase()
                  .includes(serachtext.toLowerCase())
              );

              setfilterRestaurent(filterRest);
            }}
          >
            Search
          </button>
        </div>

        {/* <button className="filter-btn" 
        onClick={()=>{
          const filterlist=Listofrest.filter(
            (restaurant)=>restaurant.data.avgRating > 4
          );
          seListofrest(filterlist);
        }}>
          Top Rated Restaurant</button> */}

        {/* nwe updated */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = Listofrest.filter(
              (restaurant) => restaurant.rating > 4.5
            );

            setfilterRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {/* <div className="res-container">
        {Listofrest.map((restaurant) => (
          <RestaurentCard
            key={restaurant.data.id}
            resdata={restaurant}
          />
        ))}
      </div> */}

      {/* new updated */}
      <div className="res-container">
        {filterRestaurent.map((restaurant) => (
          <RestaurentCard
            key={restaurant.id}
            resdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;