import { FunctionComponent } from "react";

type SignInPopUp1Type = {
  onClose?: () => void;
};

const SignInPopUp1: FunctionComponent<SignInPopUp1Type> = ({ onClose }) => {
  return (
    <div className="relative w-[388px] h-[1289px] max-w-full max-h-full overflow-auto text-left text-sm text-black-2 font-oswald-medium-14">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.14)] w-[388px] h-[1289px]" />
      <img
        className="absolute top-[44.29px] left-[29.29px] w-[22.41px] h-[22.41px]"
        alt=""
        src="/frame-3.svg"
      />
      <div className="absolute top-[173px] left-[30px] bg-white box-border w-[328px] h-11 border-[1px] border-solid border-divider" />
      <div className="absolute top-[477px] left-[31px] w-[327px] h-[50px] text-center text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
          create an account
        </div>
      </div>
      <div className="absolute top-[412px] left-[30px] w-[328px] h-[50px] text-center">
        <div className="absolute top-[0px] left-[0.62px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[327.38px] h-[50px]">
          sign in
        </div>
        <div className="absolute top-[0px] left-[0px] box-border w-[328px] h-[50px] border-[2px] border-solid border-divider" />
      </div>
      <div className="absolute top-[290px] left-[53px] leading-[20px] font-roboto-regular-14-aa text-gray-1 flex items-center w-[305px]">
        By using this form you agree with the storage and handling of your data
        by this website.
      </div>
      <div className="absolute top-[295px] left-[34px] w-2.5 h-2.5">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-gray-1" />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <img
            className="absolute h-2/5 w-[65%] top-[30%] right-[15%] bottom-[30%] left-[20%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[97px] left-[30px] text-5xl leading-[68px] uppercase text-black flex items-center w-[327px] h-[45px]">
        login your account
      </div>
      <div className="absolute top-[173px] left-[44px] text-base leading-[20px] font-roboto-regular-14-aa flex items-center w-[313px] h-11">
        daisy.watson@example.com
      </div>
      <div className="absolute top-[235px] left-[30px] bg-white box-border w-[328px] h-11 border-[1px] border-solid border-divider" />
      <div className="absolute top-[235px] left-[44px] text-base leading-[20px] font-roboto-regular-14-aa text-gray-1 flex items-center w-[313px] h-11">
        Password
      </div>
    </div>
  );
};

export default SignInPopUp1;
