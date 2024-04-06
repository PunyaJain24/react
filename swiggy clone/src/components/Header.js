import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setbtnName] = useState('LogIn');
    const status = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-md">
            <div className="logo-container">
                <Link to={"/"}><img className="w-[150px] h-[100px]" alt="logo-image" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul className="flex p-2 m-6">
                    <li className="m-4">Online Status: {status ?  '✅' : '⛔'} </li>
                    <li className="m-4">Home</li>
                    <li className="m-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="m-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="m-4"><ShoppingCartIcon /></li>
                    <button 
                        className="bg-blue-300 w-20 h-15 p-4 mx-3 rounded-lg font-bold cursor-pointer hover:bg-blue-400"
                        onClick={() => {
                            btnName === 'LogIn' ? setbtnName('Logout') : setbtnName('LogIn');
                        }}
                        >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;