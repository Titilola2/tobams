import Foodieland from "../assets/foodie.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import saladsubcribe1 from "../assets/saladsubscribe1.svg"
import saladsubscribe2 from "../assets/saladsubscribe2.svg"
import sheet from "../assets/sheet.svg";
import time from "../assets/time.svg";
import chicken from  "../assets/chicken.svg";
import pic from "../assets/pic.svg";
import play from "../assets/PlayCircle.svg";
import mask from "../assets/mask.svg";
import badge from "../assets/Badge.svg";

interface HomebodyProps {}

const Homebody: React.FC<HomebodyProps> = () => {
  return (
    <div className="flex flex-col  mx-12 my-12 ">
        <div className="flex flex-row ">
            <div className="w-1/2 bg-[#E7FAFE] rounded-l-3xl flex  flex-col  p-8">
            <div className=" flex flex-row">
                
            </div>
            <div className="w-[10rem] h-[3rem] bg-[#FFFFFF] rounded-2xl  flex flex-row justify-between p-[12px]" >
                <img src={sheet}/>
                <div className="font-inter text-[14px] font-[600] ">Hot Recipes</div>
            </div>
            <div className="font-[600] text-[64px]"> Spicy delicious Chicken wings</div>
            <div className=" text-[16px] font-[400] my-4">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</div>
            <div className=" flex flex-row gap-x-2 mb-12">
                <div className=""><img src={time} /></div>
                <div className=""><img src={chicken} /></div>
            </div>
            <div className="flex flex-row justify-between  ">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={pic}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[600] ">Hot Recipes</div>
                <div className="font-inter text-[12px] font-[500] opacity-[60%] ">15 March 2022</div>
                </div>
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] bg-[#000000] rounded-[16px]  flex flex-row  justify-between p-[14px]" >
                <div className="font-inter text-[14px] font-[600] text-white text-center">View Recipes</div>
                <div className=""> <img src={play} /></div>
            </div>
                </div>
            </div>
            </div>

            <div className="w-1/2 bg-background bg-cover rounded-r-3xl">
            <img src={badge}  className="-ml-12 mt-8"/>
       
            </div>
        </div>
     
  
    </div>
  );
};

export default Homebody;

