import Foodieland from "../assets/foodie.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import saladsubcribe1 from "../assets/saladsubscribe1.svg"
import saladsubscribe2 from "../assets/saladsubscribe2.svg"

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = () => {
  return (
    <div className="flex flex-row justify-between mx-12 text-[#000000] bg-[#E7F9FD] rounded-3xl  h-auto   ">
        <div className="w-1/4 mt-12">
        <img src={saladsubcribe1} />
        </div>
        <div className="w-1/2 flex flex-col my-8 gap-8">
        <div className="font-inter font-[600] text-[2.5rem] text-center">
  Deliciousness to your inbox
        </div>
        <div className="opacity-[60%] text-[1rem] font-[400] text-center">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
        </div>
        <div className="mx-8 bg-white rounded-[1.5rem]  flex flex-row">
  <input type="email" placeholder="Your email address" className="flex-1 border-none outline-none m-4 font-[500]" />
  <button className="bg-black text-white px-4 py-2 rounded-[1rem] m-2 font-[600] text-[14px] w-1/4">Subscribe</button>
</div>

        </div>
        <div className="w-1/4">
        <img className="mt-36" src={saladsubscribe2} />
        </div>
  
    </div>
  );
};

export default Subscribe;
