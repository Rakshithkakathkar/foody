import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
      ?.itemCards;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {items?.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs
            {item.card?.info?.defaultPrice / 100 ||
              item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );

  return;
};

export default RestaurantMenu;
