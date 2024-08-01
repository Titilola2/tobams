
import direction from "../assets/direction.svg";
import chicken2 from  "../assets/chicken2.svg";
import del1 from "../assets/del1.png";
import del2 from "../assets/del2.png";
import del3 from "../assets/del3.png";
import del4 from "../assets/del4.png";

interface RecipetopProps {}

const Recipetop: React.FC<RecipetopProps> = () => {
  return (
    <div className="flex flex-col  mx-12 my-4 gap-y-8 ">
    

    {/* Japanese recipes*/}
    

      {/* Ingredients recipes*/}

        {/* Directions recipes*/}
        <div className="flex flex-col w-3/5">
        <div className="font-inter font-[600] text-[2.25rem]">Directions</div>
        <ul className="list-none">
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col">1. Lorem ipsum dolor sit amet 
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
       <img src={direction}/>
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
      </li>
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col">1. Lorem ipsum dolor sit amet 
       <div className="my-8 text-[1rem] font-[400] opacity-[60%]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
       </div>
      </li>
      <li className="text-[1.5rem] my-8 border-b border-black border-opacity-10 flex flex-col">1. Lorem ipsum dolor sit amet 
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

