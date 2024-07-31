import Foodieland from "../assets/foodie.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import rectangle from "../assets/Rectangle.svg";
import foodie1 from "../assets/foodie1.png";
import foodie2 from "../assets/foodie2.png";
import foodie3 from "../assets/foodie3.png";
import foodie4 from "../assets/foodie4.png";


interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <div className="flex flex-col px-12 py-12 my-6  bg-gradient-to-b from-[#ffffff] to-[#E7F9FD]  ">
      <div className="text-center font-inter font-[600] text-[3rem]">Check out @foodieland on Instagram</div>
      <div className="text-center fonte-inter font-[400] text-[1rem] opacity-[60%]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
      <div className="my-8 gap-8 flex flex-row">
        <div className="w-1/4 flex flex-col">
      
        <img src={foodie1} />
        </div>
        <div className="w-1/4 flex flex-col">
        <img src={foodie2} />
        </div>
        <div className="w-1/4 flex flex-col">
        <img src={foodie3} />
        </div>
        <div className="w-1/4 flex flex-col">
        <img src={foodie4} />
        </div>
      </div>
      <div className=" flex justify-center items-center">
      <button className="w-[12rem] h-[3rem] bg-[#000000] rounded-[16px]  flex flex-row  gap-2 py-[14px] px-[20px]" >
                <div className="font-inter text-[14px] font-[600] text-white text-center">Visit our instagram</div>
                <div className="text-white mt-1"> <FaInstagram /></div>
            </button>
      </div>
  
    </div>
  );
};

export default Checkout;

