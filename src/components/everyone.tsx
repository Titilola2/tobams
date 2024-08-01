
import chef from "../assets/chef.svg"

interface EveryoneProps {}

const Everyone: React.FC<EveryoneProps> = () => {
  return (
    <div className="flex flex-wrap  mx-12 md:my-20 my-4 font-inter ">
      <div className=" flex flex-col md:gap-12  gap-4 mt-24 w-1/2  ">
      <div className="font-[600] text-[1rem] lg:text-[3rem] lg:w-[536px] w-[50%]">Everyone can be a   chef in their own kitchen</div>
      <div className="font-[400] text-[0.5rem] lg:text-[1rem] opacity-[60%] w-[70%]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </div>
      <div className="">
      <div className="w-[10rem] h-[3rem] bg-[#000000] rounded-[16px]  flex flex-row  justify-between py-[14px] px-[36px]" >
                <button className="font-inter text-[14px] font-[600] text-white text-center">Learn More</button>
               
            </div>
      </div>
      </div>
      <div className="w-1/2">
      <img className="h-full w-full" src={chef} />
      </div>
    </div>
  );
};

export default Everyone;

