const ItemList = ({itemCard}) => {
    
    const {name,price,ratings,description,imageId} = (itemCard?.card?.info);

    return (
        <div>
            <div className="flex justify-between">
                <div className="m-8 w-8/12">
                    <h3 className="px-3 font-semibold text-lg">{name}</h3>
                    <h4 className="px-3 text-green-900 font-bold">₹{price/100}</h4>
                    <h5 className="px-3 my-1 text-green-950 text-sm">⭐{ratings.aggregatedRating.rating} stars</h5>
                    <p className="px-3 my-3 text-sm">{description}</p>
                </div>
                <div>
                    <div className="absolute">
                        <button className="bg-white rounded-lg w-[85px] my-36 mx-9 p-0">
                            <h4 className="text-green-500 font-bold py-2 px-4 text-center">ADD</h4>
                        </button>
                    </div>
                    <img className="w-[4/12] h-[150px] my-8 rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} />
                </div>
            </div>
            <div>
            <hr className="m-3 border-b-4" />
            </div>
        </div>
    );
};

export default ItemList;