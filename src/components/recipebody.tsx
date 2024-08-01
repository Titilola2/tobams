
import time2 from "../assets/time2.svg";
import chicken2 from  "../assets/chicken2.svg";
import del1 from "../assets/del1.png";
import del2 from "../assets/del2.png";
import del3 from "../assets/del3.png";
import del4 from "../assets/del4.png";

interface RecipebodyProps {}

const Recipebody: React.FC<RecipebodyProps> = () => {
  return (
    <div className="flex flex-col  mx-12 my-4 gap-y-8 ">
    

    {/* delicious recipes*/}
     <div className="flex flex-col gap-y-[5rem]">
       <div className="font-inter text-center font-[600] text-[2.25rem]">You may like these recipe too
        </div>  
        <div className="">
        <div className="flex flex-wrap gap-x-12 ">
      <div className=" w-[290px] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del1} />
         <div className="font-[700] text-[18px] font-inter mx-4 mt-4">Mixed Tropical Fruit Salad with Superfood Boosts </div>
         <div className=" flex flex-row gap-x-2 mb-12 mx-4 ">
                <div className=""><img src={time2} /></div>
                <div className=""><img src={chicken2} /></div>
            </div>
        </div>
        <div className=" w-[290px] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del2} />
         <div className="font-[600] text-[18px] font-inter mx-4">Big and Juicy Wagyu Beef Cheeseburger</div>
         <div className=" flex flex-row gap-x-2 mb-12 mx-4 ">
                <div className=""><img src={time2} /></div>
                <div className=""><img src={chicken2} /></div>
            </div>
        </div>
        <div className=" w-[290px] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del3} />
         <div className="font-[600] text-[18px] font-inter mx-4">Healthy Japanese Fried Rice with Asparagus</div>
         <div className=" flex flex-row gap-x-2 mb-12 mx-4 ">
                <div className=""><img src={time2} /></div>
                <div className=""><img src={chicken2} /></div>
            </div>
        </div>
        <div className=" w-[290px] h-[291.2px] bg-[#ffffff] rounded-[30px] flex flex-col gap-y-2">
        <img className="h-3/5 w-full" src={del4} />
         <div className="font-[600] text-[18px] font-inter mx-4">Cauliflower Walnut Vegetarian Taco Meat</div>
         <div className=" flex flex-row gap-x-2 mb-12 mx-4 ">
                <div className=""><img src={time2} /></div>
                <div className=""><img src={chicken2} /></div>
            </div>
        </div>
      </div>
            </div> 
     </div>
  


    </div>
  );
};

export default Recipebody;

