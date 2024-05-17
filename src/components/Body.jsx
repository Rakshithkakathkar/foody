import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [masterResList, setMasterResList] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filterTopRes = () => {
    setResList(masterResList.filter((res) => res.info.avgRating > 4));
  };

  const searchRestarant = () => {
    setResList(
      masterResList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMasterResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button onClick={searchRestarant}>Search</button>
        </div>
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
