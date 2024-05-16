import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState(RES_LIST);
  const filterTopRes = () => {
    setResList(RES_LIST.filter((res) => res.info.avgRating > 4));
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRes}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList?.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div> 
  );
};

export default Body;