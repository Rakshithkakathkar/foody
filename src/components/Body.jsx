import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [masterResList, setMasterResList] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { setUserName, loggedInUser } = useContext(UserContext);
  const filterTopRes = () => {
    setResList(masterResList.filter((res) => res.info.avgRating > 4.2));
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

  if (onlineStatus === false) {
    return <h1>You are offline, check internet connection</h1>;
  }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-48">
      <div className="flex justify-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black w-96 rounded-md"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 m-4 bg-yellow-50 rounded-lg"
            onClick={searchRestarant}
          >
            Search
          </button>
          <button
            className="px-4 py-2 m-4 bg-yellow-50 rounded-lg"
            onClick={filterTopRes}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>Username: </label>
          <input
            type="text"
            className="border border-solid border-black w-96 rounded-md p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {resList?.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
