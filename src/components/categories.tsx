import cat1 from "../assets/cat1.svg";
import cat2 from "../assets/cat2.svg";
import cat3 from "../assets/cat3.svg";
import cat4 from "../assets/cat4.svg";
import cat5 from "../assets/cat5.svg";
import cat6 from "../assets/cat6.svg";



interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="flex flex-col  mx-12 my-24   ">
        <div className=" flex flex-row justify-between mb-12">
        <div className=" text-[3rem] font-[600]">Categories</div>
        <div className="w-[13rem] h-[3rem] rounded-[16px]  flex flex-row bg-[#E7FAFE] justify-between py-[12px] px-[20px]" >
                <div className="font-inter text-[1rem] font-[600] text-black text-center">View All Categories</div>
                </div>
        </div>
        <div className="flex flex-row justify-between mt-8 text-[18px] font-[600] text center mt-8">
            <div className="w-[180px] h-[152px] flex flex-col px-12 rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#708246]/10"> 
            <img className="w-[100px] h-[100px] -mt-12" src={cat1} />
            <div className="mt-4"></div> Breakfast</div>
            <div className="w-[180px] h-[152px] flex flex-col px-[40px] rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#6CC63F]/10"> 
            <img className="w-[100px] h-[100px] -mt-8" src={cat2} />
            <div className="mt-2">Vegan </div></div>
            <div className="w-[180px] h-[152px] flex flex-col px-12 rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#CC261B]/10"> 
            <img className="w-[100px] h-[100px] -mt-12" src={cat3} />
            <div className="mt-8"> Meat</div></div>
            <div className="w-[180px] h-[152px] flex flex-col px-12 rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#F09E00]/10"> 
            <img className="w-[100px] h-[100px] -mt-12" src={cat4} />
            <div className="mt-8">Dessert </div></div>
            <div className="w-[180px] h-[152px] flex flex-col px-12 rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#F2F2F2]"> 
                <img className="w-[100px] h-[100px] -mt-12 " src={cat5} />
                <div className="mt-8"> Lunch</div></div>
            <div className="w-[180px] h-[152px] flex flex-col px-12 rounded-[30px] bg-gradient-to-b from-[#ffffff] to-[#F2F2F2]"> 
                <img className="w-[100px] h-[100px] -mt-12" src={cat6} />
                <div className="mt-8">Chocolate </div></div>
        </div>
  
    </div>
  );
};

export default Categories;

