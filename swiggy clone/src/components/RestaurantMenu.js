import Card from '@mui/material/Card';
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantMenu = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
      } = resData?.info;

      return (
        <Card variant="contained" className="w-60 m-5">
          <Link to={"/restaurants/" + resData?.info?.id}><img className="w-64 h-36 rounded-3xl shadow-lg" src={CDN_URL+ cloudinaryImageId} alt={name}/></Link>
          <h3 className="font-bold px-2 text-lg">{name}</h3>
          <h4 className="px-2 font-bold">{avgRating} stars . {sla.deliveryTime} minutes</h4>
          <p className="px-2 text-lg">{cuisines.join(', ')}</p>
          <h4 className="px-2 text-lg">{costForTwo}</h4>
        </Card>
      );
}

export const withPromotedLabel = (RestaurantMenu) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        {console.log("promoted")}
        <RestaurantMenu resData={props} />
      </div>
    )
  }
}

export default RestaurantMenu;