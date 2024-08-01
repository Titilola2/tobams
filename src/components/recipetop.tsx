
import direction from "../assets/direction.svg";
import React, { useState } from 'react';
import tasty5 from "../assets/tasty5.png";
import tasty6 from "../assets/tasty6.png";
import tasty8 from "../assets/tasty8.png";
import tasty9 from "../assets/tasty9.png";
import pic from "../assets/pic.svg";
import forkknife from  "../assets/forkknife.png";
import timer from "../assets/timer.png";
import ellipse from "../assets/ellipse.svg";
import polygon from "../assets/polygon.svg";
import print from "../assets/print.svg";
import share from "../assets/share.svg";
import del2 from "../assets/del2.png";
import del3 from "../assets/del3.png";
import del4 from "../assets/del4.png";


 

interface RecipetopProps {}



const Recipetop: React.FC<RecipetopProps> = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col  mx-12 my-4 gap-y-8 ">
    

    {/* Japanese recipes*/}
    <div className="flex flex-col gap-y-12 w-ful">
    <div className="flex flex-row w-full justify-between ">
      <div className="w-3/5  flex- flex-col gap-y-4">
      <div className="font-inter font-[600] text-[3rem]">Health Japanese Fried Rice</div>
      <div className="flex flex-row w-[80%] my-8">
    <div className="border-r-[1px] border-opacity-[10%] w-1/4 h-full">
                <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={pic}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[14px] font-[600] ">Hot Recipes</div>
                <div className="font-inter text-[12px] font-[500] opacity-[60%] ">15 March 2022</div>
                </div>
            </div>
               
            </div>
    </div>
    <div className="border-r-[1px] border-opacity-[10%] h-full w-1/4">
    <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[12px] font-[600] "> PREP TIME</div>
                <div className="font-inter text-[12px] font-[500] opacity-[60%] ">15 Minutes</div>
                </div>
            </div>
               
            </div>
    </div>
    <div className="border-r-[1px] border-opacity-[10%] h-full w-1/4">
    <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={timer}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[12px] font-[600] "> COOK TIME</div>
                <div className="font-inter text-[12px] font-[500] opacity-[60%] ">15 Minutes</div>
                </div>
            </div>
               
            </div>
    </div>
    <div className="w-1/4">
    <div className="">
                <div className="w-[10rem] h-[3rem] rounded-2xl  flex flex-row gap-4 p-[12px]" >
                <img src={forkknife}/>
                <div className=" flex flex-col ">
                <div className="font-inter text-[12px] font-[500] opacity-[60%] ">Chicken</div>
                </div>
            </div>
               
            </div>
    </div>
      </div>
      <div className="bg-background2 w-[840px] h-[600px] flex justify-center items-center">
  <img src={ellipse} alt="Ellipse" className="max-h-full max-w-full" />
  <img src={polygon} className="w-[32px] h-[32px] top-[573px]  absolute"/>
</div>

      </div>
      <div className="w-[30%] flex flex-col gap- ">
        <div className="flex flex-row  gap-4 justify-end px-4">
        <div className=" flex flex-col gap-2">
          <img src={print} className="w-[80px] h-[80px] "/>
          <div className="font-inter w-[60px] font-[500] text-[12px] text-center"></div>
             PRINT
        </div>
        <div className=" flex flex-col gap-2">
          <img src={share} className="w-[80px] h-[80px]"/>
          <div className="font-inter w-[80px] font-[500] text-[12px] text-center"></div>
      SHARE
        </div>
        </div>
       <div className="flex flex-col h-auto px-4 py-4 bg-[#E7FAFE] rounded-[30px] mt-16">
        <div className="font-[600] text-[24px] font-inter pt-2">Nutritional Information</div>
        <div className="font-[600] text-[24px] font-inter justify-between py-4 px-2 border-b-[1px] border-opacity-[10%] flex flex-row ">
          <div className="font-[500] text-[18px] opacity-[60%]"> Calories</div>
          <div className="font-[500] text-[18px]">219.9 kcal</div>
        </div>
        <div className="font-[600] text-[24px] font-inter justify-between py-4 px-2 border-b-[1px] border-opacity-[10%] flex flex-row ">
          <div className="font-[500] text-[18px] opacity-[60%]"> Total Fat</div>
          <div className="font-[500] text-[18px]">10.7g</div>
        </div>
        <div className="font-[600] text-[24px] font-inter justify-between py-4 px-2 border-b-[1px] border-opacity-[10%] flex flex-row ">
          <div className="font-[500] text-[18px] opacity-[60%]"> Protein</div>
          <div className="font-[500] text-[18px]">7.9g</div>
        </div>
        <div className="font-[600] text-[24px] font-inter justify-between py-4 px-2 border-b-[1px] border-opacity-[10%] flex flex-row ">
          <div className="font-[500] text-[18px] opacity-[60%]"> Carbohydrate</div>
          <div className="font-[500] text-[18px]">22.3g</div>
        </div>
        <div className="font-[600] text-[24px] font-inter justify-between py-4 px-2 border-b-[1px] border-opacity-[10%] flex flex-row ">
          <div className="font-[500] text-[18px] opacity-[60%]"> Cholesterol</div>
          <div className="font-[500] text-[18px]">34.7g</div>
        </div>
        <div className=" font-inter font-[500] text-[18px] opacity-[60%] text-center mt-36">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
       </div>

      </div>
      </div>
      <div className="font-inter text-[16px] opacity-[60%] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      

    </div>
    

      {/* Ingredients recipes*/}
<div className="flex flew-wrap w-full justify-between">
  <div className="  flex flex-col left w-3/5">
  <div className="font-inter font-[600] text-[2.25rem]">Ingredients</div>
  <div className="text-[1.5rem] mt-4 font-[600]">For main dish</div>
  <div className="flex flex-col">   

<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
      
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
      
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
            
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
            
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>

    </div>

    <div className="text-[1.5rem] mt-8 font-[600]">For the sauce</div>
  <div className="flex flex-col">   

<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
      
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>
      
<div className="border-b-[1px] border-opacity-[10%] w-full">
  <div className="my-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="appearance-none rounded-full w-6 h-6 border-2 border-gray-300 checked:bg-black checked:border-transparent "
      />
      {/* Optional label */}
      <label className={`ml-4  text-[1rem]  font-[400] ${isChecked ? 'line-through  opacity-60' : ''}`}>Lorem ipsum dolor sit amet</label>
      </div>
      </div>

    </div>
  </div>


  <div className="  flex flex-col right w-[30%] gap-y-4">
  <div className="font-inter font-[600] text-[2rem] ">Other Recipe</div>
  <div className="flex flex-col mb-8 gap-4">
    <div className="flex flex-row  ">
      <div className="w-full">
      <img className="h-[120px] w-[180px]" src={tasty5}/>
      </div>
      <div className="py-2 flex flex-col gap-2 -ml-12">
        <div className="font-inter text-[17px] font-[600]">Chicken Meatball with Creamy Chees...</div>
        <div className="opacity-[60%] font-[500] text-[14px]">By Andreas Paula</div>
      </div>
    </div>
    <div className="flex flex-row  ">
      <div className="w-full">
      <img className="h-[120px] w-[180px]" src={tasty9}/>
      </div>
      <div className="py-2 flex flex-col gap-2 -ml-12">
        <div className="font-inter text-[17px] font-[600]">The Creamiest Creamy Chicken an....</div>
        <div className="opacity-[60%] font-[500] text-[14px]">By Andreas Paula</div>
      </div>
    </div>
    <div className="flex flex-row  ">
      <div className="w-full">
      <img className="h-[120px] w-[180px]" src={tasty8}/>
      </div>
      <div className="py-2 flex flex-col gap-2 -ml-12">
        <div className="font-inter text-[17px] font-[600]">The Best Easy One Pot Chicken and Rice</div>
        <div className="opacity-[60%] font-[500] text-[14px]">By Andreas Paula</div>
      </div>
    </div>
  </div>
  <img src={tasty6} className="h-[336px]"/>
  </div>
</div>




        {/* Directions recipes*/}
        <div className="flex flex-col w-3/5">
        <div className="font-inter font-[600] text-[2.25rem]">Directions</div>
        <ul className="list-none">
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col font-[600]">1. Lorem ipsum dolor sit amet 
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
       <img src={direction}/>
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
      </li>
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col font-[600]">2. Lorem ipsum dolor sit amet 
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
      </li>
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col font-[600]">3. Lorem ipsum dolor sit amet 
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
      </li>
    </ul>
        </div>
  


    </div>
  );
};

export default Recipetop;

