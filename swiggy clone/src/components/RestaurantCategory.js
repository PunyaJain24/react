import ItemList from "./ItemList";
import { useState } from "react"

const RestaurantCategory = (props) => {
    const [showItems,setShowItems] = useState(false);

    const data = props.data;
    const itemCards = (props.data?.card?.card?.itemCards)
    return (
        <div className="cursor-pointer m-4">
            <div className="flex justify-between shadow-lg p-4" onClick={() => {setShowItems(!showItems);}}>
                <span className="font-bold text-lg">{data?.card?.card?.title} ({itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
            <div>
                {showItems && itemCards.map((item) => (
                    <ItemList key={item.card.info.id} itemCard={item} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantCategory;