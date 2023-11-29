import { FunctionComponent } from "react";

type FrameComponent1Type = {
  onClose?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  onClose,
}) => {
  return (
    <div className="relative w-[344px] h-[100px] max-w-full max-h-full overflow-auto text-center text-sm text-white font-oswald-medium-14">
      <div className="absolute top-[0px] left-[0px] bg-white w-[344px] h-[100px]" />
      <div className="absolute top-[38px] left-[15px] w-[150px] h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
          Add to bag
        </div>
      </div>
      <div className="absolute top-[16px] left-[137px] w-1.5 h-1.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-divider hidden" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-22.svg"
        />
      </div>
      <div className="absolute top-[16px] left-[153px] w-1.5 h-1.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-divider hidden" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-22.svg"
        />
      </div>
      <div className="absolute top-[16px] left-[169px] w-1.5 h-1.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black hidden" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-221.svg"
        />
      </div>
      <div className="absolute top-[16px] left-[185px] w-1.5 h-1.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-divider hidden" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-22.svg"
        />
      </div>
      <div className="absolute top-[16px] left-[201px] w-1.5 h-1.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-divider hidden" />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-22.svg"
        />
      </div>
      <div className="absolute h-3/6 w-[43.6%] top-[38%] right-[4.36%] bottom-[12%] left-[52.03%] text-gray-1">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[2px] border-solid border-divider" />
        <div className="absolute h-full w-[36.67%] top-[0%] right-[32.67%] bottom-[0%] left-[30.67%]">
          <div className="absolute h-full w-3/5 top-[0%] left-[40%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
            save
          </div>
          <img
            className="absolute top-[16px] left-[0px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/heartoutline1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
