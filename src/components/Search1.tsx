import { FunctionComponent } from "react";

type Search1Type = {
  onClose?: () => void;
};

const Search1: FunctionComponent<Search1Type> = ({ onClose }) => {
  return (
    <div className="relative w-[1919px] h-[200px] max-w-full max-h-full overflow-auto text-left text-5xl text-black font-roboto-light">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.14)] w-[1919px] h-[200px]" />
      <div className="absolute h-[0.5%] w-[60.03%] top-[63.5%] right-[36.58%] bottom-[36%] left-[3.39%] bg-black-2" />
      <div className="absolute h-[24.5%] w-[33.45%] top-[39%] left-[6.41%] leading-[20px] inline-block">
        Angels malu zip jeans slim black
      </div>
      <img
        className="absolute h-[15.46%] w-[1.61%] top-[39%] right-[95%] bottom-[45.54%] left-[3.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-33.svg"
      />
      <img
        className="absolute top-[89.29px] left-[1835.29px] w-[22.41px] h-[22.41px]"
        alt=""
        src="/frame-3.svg"
      />
    </div>
  );
};

export default Search1;
