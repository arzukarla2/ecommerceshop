import { FunctionComponent } from "react";

type MiniCart1Type = {
  onClose?: () => void;
};

const MiniCart1: FunctionComponent<MiniCart1Type> = ({ onClose }) => {
  return (
    <div className="relative w-[388px] h-[1289px] max-w-full max-h-full overflow-auto text-left text-sm text-black font-oswald-medium-14">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.14)] w-[388px] h-[1289px]" />
      <img
        className="absolute top-[44.29px] left-[29.29px] w-[22.41px] h-[22.41px]"
        alt=""
        src="/frame-3.svg"
      />
      <div className="absolute top-[1208px] left-[31px] w-[327px] h-[50px] text-center text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
          go to checkout
        </div>
      </div>
      <div className="absolute top-[1143px] left-[30px] w-[328px] h-[50px] text-center text-black-2">
        <div className="absolute top-[0px] left-[0.62px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[327.38px] h-[50px]">
          View and edit cart
        </div>
        <div className="absolute top-[0px] left-[0px] box-border w-[328px] h-[50px] border-[2px] border-solid border-divider" />
      </div>
      <div className="absolute top-[1083px] left-[31px] text-xl leading-[68px] flex items-center w-[327px] h-[45px]">
        Cart Subtotal:
      </div>
      <div className="absolute top-[1083px] left-[31px] text-xl leading-[68px] text-right flex items-center w-[327px] h-[45px]">
        139,00 EUR
      </div>
      <div className="absolute top-[1070px] left-[0px] bg-light-blue-hover w-[388px] h-0.5" />
      <div className="absolute top-[222px] left-[30px] bg-light-blue-hover w-[328px] h-0.5" />
      <img
        className="absolute h-[8.01%] w-[21.54%] top-[7.91%] right-[70.72%] bottom-[84.08%] left-[7.73%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <div className="absolute h-[2.64%] w-[47.42%] top-[7.91%] left-[33.76%] text-lg leading-[24px] font-medium flex items-center">
        Angels malu zip jeans slim black used
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[11.64%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-gray-4">
        <span className="[line-break:anywhere] w-full">
          <span>{`Size: `}</span>
          <span className="text-black-2">W31/L34</span>
        </span>
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[13.18%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-gray-4">
        <span className="[line-break:anywhere] w-full">
          <span>{`Art.No.: `}</span>
          <span className="text-black-2">434536465</span>
        </span>
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[14.72%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-black-2">
        <span className="[line-break:anywhere] w-full">
          <span>1 x</span>
          <span className="text-gray-4">{` `}</span>
          <span>129,00 EUR</span>
        </span>
      </div>
      <img
        className="absolute h-[8.01%] w-[21.54%] top-[18.7%] right-[70.72%] bottom-[73.3%] left-[7.73%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-71@2x.png"
      />
      <div className="absolute h-[2.64%] w-[41.49%] top-[18.7%] left-[33.76%] text-lg leading-[24px] font-medium flex items-center">
        Angels malu zip jeans slim black used
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[22.42%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-gray-4">
        <span className="[line-break:anywhere] w-full">
          <span>{`Size: `}</span>
          <span className="text-black-2">W31/L34</span>
        </span>
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[23.96%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-gray-4">
        <span className="[line-break:anywhere] w-full">
          <span>{`Art.No.: `}</span>
          <span className="text-black-2">434536465</span>
        </span>
      </div>
      <div className="absolute h-[1.15%] w-[52.51%] top-[25.5%] left-[33.85%] leading-[68px] uppercase font-roboto-regular-14-aa flex items-center text-black-2">
        <span className="[line-break:anywhere] w-full">
          <span>1 x</span>
          <span className="text-gray-4">{` `}</span>
          <span>129,00 EUR</span>
        </span>
      </div>
      <img
        className="absolute top-[102px] left-[334px] w-6 h-6"
        alt=""
        src="/group-34.svg"
      />
      <img
        className="absolute top-[241px] left-[334px] w-6 h-6"
        alt=""
        src="/group-34.svg"
      />
      <div className="absolute top-[131px] left-[334px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6">
          <div className="absolute top-[0px] left-[0px] bg-main-color w-6 h-6" />
        </div>
        <img
          className="absolute h-[45%] w-[45%] top-[30%] right-[25%] bottom-[25%] left-[30%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[270px] left-[334px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6">
          <div className="absolute top-[0px] left-[0px] bg-main-color w-6 h-6" />
        </div>
        <img
          className="absolute h-[45%] w-[45%] top-[30%] right-[25%] bottom-[25%] left-[30%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
    </div>
  );
};

export default MiniCart1;
