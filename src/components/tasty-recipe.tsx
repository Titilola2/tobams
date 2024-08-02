

import tasty1 from "../assets/tasty1.png";
import tasty2 from "../assets/tasty2.png";
import tasty3 from "../assets/tasty3.png";
import tasty4 from "../assets/tasty4.png";
import tasty5 from "../assets/tasty5.png";
import tasty6 from "../assets/tasty6.png";
import tasty7 from "../assets/tasty7.png";
import tasty8 from "../assets/tasty8.png";
import tasty9 from "../assets/tasty9.png";
import time from "../assets/time.svg";
import chicken from  "../assets/chicken.svg";
import forkknife from  "../assets/forkknife.png";
import timer from "../assets/timer.png";

interface TastyProps {}

const Tasty: React.FC<TastyProps> = () => {
  return (
    <div className="flex flex-col  mx-12 my-8 gap-4  ">
      <div className="lg:text-center text-center lg:text-[3rem] text-[2.5rem] ml-8 font-[700]">Simple and tasty recipes</div>
      <div className="text-center text-[1rem] font-[400] w-1/2 lg:mx-96 md:mx-56 my-2 flex justify-center items-center opacity-[60%]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
      <div className="flex flex-wrap gap-x-4 gap-y-8 w-full justify-center items-center">
      <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={tasty1} />
         <div className="font-[600] text-[1.5rem] font-inter mx-4">Big and Juicy Wagyu Beef Cheeseburger</div>
         <div className=" flex flex-row  mb-12 mx-4 my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Snack</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty2} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">Fresh Lime Roasted Salmon with Ginger Sauce</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Fish</div>
                </div>
            </div>
               
            </div>
            </div>
           
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty3} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">Strawberry Oatmeal Pancake with Honey Syrup</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Breakfast</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty4} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">Fresh and Healthy Mixed Mayonnaise Salad</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Healthy</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty5} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">Chicken Meatballs with Cream Cheese</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Meat</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] ">
           <img src={tasty6}  className="h-full w-full"/>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty7} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">Fruity Pancake with Orange & Blueberry</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Sweet</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty8} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">The Best Easy One Pot Chicken and Rice</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Snack</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[25rem] h-[434px] bg-gradient-to-b from-[#ffffff] to-[#E7F9FD] rounded-[30px] flex flex-col gap-y-2 ">
           <img className="h-3/5 w-full" src={tasty9} />
           <div className="font-[600] text-[1.5rem] font-inter mx-4">The Creamiest Creamy Chicken and Bacon Pasta</div>
           <div className=" flex flex-row  mb-12 mx-4 my-2">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Noodle</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
      </div>
  
    </div>
  );
};

export default Tasty;

