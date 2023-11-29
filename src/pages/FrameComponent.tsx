import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[790px] text-left text-smi text-black font-oswald-medium-14">
      <div className="absolute top-[0px] left-[0px] w-[624px] h-[790px]">
        <img
          className="absolute top-[0px] left-[0px] w-[624px] h-[790px] object-cover"
          alt=""
          src="/rectangle-741@2x.png"
        />
        <div className="absolute top-[752px] left-[550px] w-[74px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] bg-white w-[74px] h-[38px]" />
          <div className="absolute top-[13px] left-[15px] w-[46px] h-3">
            <img
              className="absolute top-[8px] left-[-0.5px] w-[4.5px] h-[4.5px]"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="absolute top-[1.5px] left-[-0.5px] w-[4.5px] h-[4.5px]"
              alt=""
              src="/vector-4.svg"
            />
            <div className="absolute top-[0px] left-[17px] leading-[68px] uppercase flex items-center w-[29px] h-3">
              Zoom
            </div>
            <img
              className="absolute top-[1.5px] left-[6px] w-[4.5px] h-[4.5px]"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="absolute top-[8px] left-[6px] w-[4.5px] h-[4.5px]"
              alt=""
              src="/vector-6.svg"
            />
            <img
              className="absolute top-[1.65px] left-[-0.35px] w-[10.71px] h-[10.71px]"
              alt=""
              src="/vector-7.svg"
            />
            <img
              className="absolute top-[1.5px] left-[-0.49px] w-[10.99px] h-[10.99px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
