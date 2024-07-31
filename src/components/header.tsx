import Foodieland from "../assets/foodie.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-row justify-between px-12 text-[#000000] py-6    ">
    <div className="">
        <img src={Foodieland}/>
    </div>
    <div className="font-inter  flex flex-row font-[500]">
    <Link to="/" className="px-4">
      Home
    </Link>
       <Link to="/recipes" className="px-4">
      Recipes
    </Link>
        <div className="px-4">Blog</div>
        <div className="px-4">Contact</div>
        <div className="px-4">About Us</div>
    </div>
    <div className="justify-between flex flex-row">
    <div className="h-[21.8px]"><FaFacebookF /></div>
    <div className="h-[17.8px] px-4"><FaTwitter /></div>
    <div className="h-[22px]"><FaInstagram /></div>
    </div>
    </header>
  );
};

export default Header;
