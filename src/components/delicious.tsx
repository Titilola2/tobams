
import time2 from "../assets/time2.svg";
import chicken2 from  "../assets/chicken2.svg";
import del1 from "../assets/del1.png";
import del2 from "../assets/del2.png";
import del3 from "../assets/del3.png";
import del4 from "../assets/del4.png";
import del5 from "../assets/del5.png";
import del6 from "../assets/del6.png";
import del7 from "../assets/del7.png";
import del8 from "../assets/del8.png";
import forkknife from  "../assets/forkknife.png";
import timer from "../assets/timer.png";


interface DeliciousProps {}

const Delicious: React.FC<DeliciousProps> = () => {
  return (
    <div className="flex flex-col  mx-16 my-24   ">
      <div className="flex flex-wrap gap-4 font-inter justify-between w-full my-8">
      <div className="w-2/5 font-[600] lg:text-[2.5rem] md:text-[2rem] text-[1rem]">Try this delicious recipe   to make your day</div>
      <div className="w-1/2 font-[400] md:text-[1rem] text-[0.5rem] opacity-[60%]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
      </div>
      <div className="flex flex-wrap  justify-between w-full items-center  gap-y-8 my-12 ">
      <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del1} />
         <div className="font-[700] text-[18px] font-inter ">Mixed Tropical Fruit Salad with Superfood Boosts </div>
         <div className=" flex flex-row  mb-12  my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Healthy</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del2} />
         <div className="font-[600] text-[18px] font-inter">Big and Juicy Wagyu Beef Cheeseburger</div>
         <div className=" flex flex-row  mb-12  my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Western</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del3} />
         <div className="font-[600] text-[18px] font-inter">Healthy Japanese Fried Rice with Asparagus</div>
         <div className=" flex flex-row  mb-12  my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Healthy</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del4} />
         <div className="font-[600] text-[18px] font-inter">Cauliflower Walnut Vegetarian Taco Meat</div>
         <div className=" flex flex-row  mb-12  my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">30 Minutes</div>
                </div>
            </div>
               
            </div>
                </div>
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Eastern</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del5} />
         <div className="font-[700] text-[18px] font-inter ">Rainbow Chicken Salad with Almond Honey Mustard Dressing</div>
         <div className=" flex flex-row  mb-12  my-2 ">
                <div className="">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-2 p-[12px]" >
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
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del6} />
         <div className="font-[600] text-[18px] font-inter ">Barbeque Spicy Sandwiches with Chips </div>
         <div className=" flex flex-row  mb-12  my-2 ">
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
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full rounded-[20px]" src={del7} />
         <div className="font-[600] text-[18px] font-inter ">Firecracker Vegan Lettuce Wraps - Spicy! </div>
         <div className=" flex flex-row  mb-12  my-2 ">
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
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Seafood</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
        <div className=" w-[17rem] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del8} />
         <div className="font-[600] text-[18px] font-inter ">Chicken Ramen Soup with Mushroom </div>
         <div className=" flex flex-row  mb-12  my-2 ">
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
                <div className="font-inter text-[14px] font-[500] opacity-[60%] ">Japanese</div>
                </div>
            </div>
               
            </div>
            </div>
        </div>
      </div>

      
      
  
    </div>
  );
};

export default Delicious;

