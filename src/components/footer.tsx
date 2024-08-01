import Foodieland from "../assets/foodie.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-col px-12 text-[#000000] py-6">
      <div className="flex flex-row border-b border-1 border-black/10 justify-between py-4">
        <div className="flex flex-col">
          <img className='h-[16px] w-full -ml-32' src={Foodieland} />
          <div className="font-inter font-[400] text-[#000000] opacity-[60%] text-wrap">Lorem ipsum dolor sit amet, consectetuipisicing elit,</div>
        </div>
        <div className="font-inter flex flex-wrap font-[500]">
          <div className="px-4">Recipes</div>
          <div className="px-4">Blog</div>
          <div className="px-4">Contact</div>
          <div className="px-4">About Us</div>
        </div>
      </div>
      <div className="flex flex-row py-4">
        <div className="w-[90%] text-center">
          © 2020 Flowbase. Powered by <span className="text-orange-500"> Webflow</span>
        </div>
        <div className="justify-between flex flex-row">
          <div className="h-[21.8px]"><FaFacebookF /></div>
          <div className="h-[17.8px] px-4"><FaTwitter /></div>
          <div className="h-[22px]"><FaInstagram /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
