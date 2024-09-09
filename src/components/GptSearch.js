import { useRef } from "react";
import { BG_Image } from "../utils/constants";
import getGptData from "../hooks/getGptData";
import { useDispatch } from "react-redux";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptBtnClick = async () => {
    await getGptData(searchText.current.value, dispatch);
  };

  return (
    <div className="">
      <div>
        <img
          className="absolute w-full object-cover -z-20"
          src={BG_Image}
          alt="Background"
        />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form
          className=" bg-black w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="p-4 m-4 col-span-9 text-black rounded-lg"
            type="text"
            placeholder="What do you want to watch today?"
          />
          <button
            className="bg-red-600 font-bold text-lg text-white py-2 px-4 mx-4 my-4 rounded-lg col-span-3"
            onClick={handleGptBtnClick}
          >
            Search
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default GptSearch;
