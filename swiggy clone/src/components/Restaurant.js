import { Card } from "@mui/material";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurant(resId);

    if(resInfo === null) return <Shimmer /> 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {name,city,areaName,sla,avgRating,costForTwoMessage,cuisines,totalRatingsString,feeDetails} = resInfo?.cards[2].card.card.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
    console.log(categories)

    return (
        <div className="m-auto w-8/12">
            <p className="text-sm my-6 font-light"><Link to={"/"}>Home</Link> / {city} / {name}</p>
            <h1 className="font-bold my-3 text-lg">{name}</h1>
            <Card variant="outlined" className="ring-offset-4 shadow-2xl rounded-lg border-black">
                <p className="px-3 py-1 font-sans">⭐<b>{avgRating === null ? "NEW" : avgRating} ({totalRatingsString}) . {costForTwoMessage}</b></p>
                <p className="px-3 py-1 text-orange-400 text-sm underline"><b>{cuisines.join(', ')}</b></p>
                <ul className="px-3 py-1">
                    <li className="px-3 py-1 text-sm"><b className="text-lg">Outlet</b> {areaName}</li>
                    <li className="px-3 py-1"><b>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</b></li>
                </ul>
                <hr />
                <p className="px-3 py-2">{feeDetails.message.split("|")[1]}</p>
            </Card>

            <div className="m-6">
                {categories.map((category) => (
                    <RestaurantCategory data={category} />
                ))}
            </div>
        </div>
    );
};

export default Restaurant;