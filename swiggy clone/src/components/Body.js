import RestaurantMenu, {withPromotedLabel} from "./RestaurantMenu";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {
    const [restaurants,setRestaurants] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(apiUrl);

      const json = await response.json();


      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
      const RestaurantwithPromotion = withPromotedLabel(RestaurantMenu);

      const onlineStatus = useOnlineStatus();
      if(onlineStatus === false) return <h1>You're offline, Please check your internet connection!!!</h1>

      return filteredList.length === 0 ? (<Shimmer />) : ( 
      (
        <div className="body">

          <div className="flex mx-4 my-3 justify-between">
            <div className="flex">
                <div className="border-black shadow-lg">
                  <input
                    type="text" 
                    placeholder="Search Food or Restaurant" 
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <button className="mx-4 bg-green-200 border-black w-20 h-6 rounded-md font-semibold text-center hover:bg-green-300" onClick={() => {
                    const filterList = restaurants.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );

                    setFilteredList(filterList);
                  }}>Search</button>
                </div>
            </div>

            <div className="mx-4 font-serif bg-yellow-200 w-30 px-2 shadow-lg rounded-lg hover:bg-yellow-400">
              <button 
                className="filter-btn"
                onClick={() => {
                  const filtered = filteredList.filter((res) => res?.info?.avgRating > 4);
                  setFilteredList(filtered);
                }}
                >Top Rated restaurants</button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
          {filteredList.map((restaurant) => (
            restaurant.info.promoted ? (<RestaurantwithPromotion key={restaurant.info.id} resData={restaurant} />) : (<RestaurantMenu key={restaurant.info.id} resData={restaurant} />)
          ))}
                {/* <RestaurantMenu resData={resList} /> */}
          </div>            
        </div>
      )
    );
}

export default Body;