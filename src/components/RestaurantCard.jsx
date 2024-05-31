import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="w-56 h-56 rounded-lg text-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2">{avgRating} stars</h4>
      <h4 className="py-2">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
