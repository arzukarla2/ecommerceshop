import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInPopUp1 from "../components/SignInPopUp1";
import PortalPopup from "../components/PortalPopup";
import MiniCart1 from "../components/MiniCart1";
import Search1 from "../components/Search1";

const Main: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isMiniCart1Open, setMiniCart1Open] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);

  const onMainContainerClick = useCallback(() => {
    // Please sync "Main" to the project
  }, []);

  const onComponent2Click = useCallback(() => {
    navigate("/popup-menu-1");
  }, [navigate]);

  const openSignInPopUp1 = useCallback(() => {
    setSignInPopUp1Open(true);
  }, []);

  const closeSignInPopUp1 = useCallback(() => {
    setSignInPopUp1Open(false);
  }, []);

  const onCREATEANACCOUNTClick = useCallback(() => {
    navigate("/create-account-1");
  }, [navigate]);

  const openMiniCart1 = useCallback(() => {
    setMiniCart1Open(true);
  }, []);

  const closeMiniCart1 = useCallback(() => {
    setMiniCart1Open(false);
  }, []);

  const onShopClick = useCallback(() => {
    navigate("/catalog-1");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/article-1");
  }, [navigate]);

  const openSearch1 = useCallback(() => {
    setSearch1Open(true);
  }, []);

  const closeSearch1 = useCallback(() => {
    setSearch1Open(false);
  }, []);

  return (
    <>
      <div
        className="relative bg-white w-full h-[1998px] overflow-hidden cursor-pointer text-left text-sm text-black font-oswald-medium-14"
        onClick={onMainContainerClick}
      >
        <div className="absolute top-[94px] left-[990px] bg-divider w-[17px] h-[17px] hidden" />
        <div className="absolute top-[128px] left-[233px] leading-[68px] font-roboto-regular-14-aa text-gray-1 text-center flex items-center justify-center w-[1454px] h-9">
          Home / Shopping Cart
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[1920px] h-[115px] cursor-pointer text-white"
          onClick={onComponent2Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-[36.96%] w-[4.82%] top-[31.74%] right-[94.09%] bottom-[31.3%] left-[1.09%] text-center text-xl">
            <div className="absolute h-[82.35%] w-[91.89%] top-[17.65%] right-[8.11%] bottom-[0%] left-[0%]">
              <div className="absolute h-[102.86%] w-[101.18%] top-[-17.14%] right-[-7.06%] bottom-[14.29%] left-[5.88%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-full w-full top-[-25.71%] right-[-10.59%] bottom-[25.71%] left-[10.59%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-500 box-border border-[3px] border-solid border-white" />
              <div className="absolute h-[91.43%] w-full top-[2.86%] left-[0%] tracking-[2px] uppercase font-medium flex items-center justify-center">
                crisp
              </div>
            </div>
            <img
              className="absolute h-[89.41%] w-[94.59%] top-[-3.53%] right-[-1.62%] bottom-[14.12%] left-[7.03%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="absolute h-[18.26%] w-[8.96%] top-[40.87%] right-[10.21%] bottom-[40.87%] left-[80.83%]">
            <div
              className="absolute top-[0%] left-[0%] uppercase font-semibold cursor-pointer"
              onClick={openSignInPopUp1}
            >
              SIGN IN
            </div>
            <div
              className="absolute top-[0%] left-[31.98%] uppercase font-semibold cursor-pointer"
              onClick={onCREATEANACCOUNTClick}
            >
              CREATE AN ACCOUNT
            </div>
          </div>
          <div
            className="absolute h-[25.22%] w-[6.67%] top-[37.39%] right-[0%] bottom-[37.39%] left-[93.33%] cursor-pointer text-xs font-roboto-medium-14"
            onClick={openMiniCart1}
          >
            <img
              className="absolute h-[73.1%] w-[14.06%] top-[9.66%] right-[85.94%] bottom-[17.24%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-3.svg"
            />
            <div className="absolute h-[48.28%] w-[77.34%] top-[0%] left-[22.66%] tracking-[0.01em] leading-[30px] flex items-center">
              Shopping Cart
            </div>
            <b className="absolute h-[48.28%] w-[76.56%] top-[51.72%] left-[22.66%] text-sm tracking-[0.01em] leading-[30px] flex font-roboto-regular-14-aa items-center">
              0,00 EUR
            </b>
          </div>
          <div
            className="absolute top-[38.26%] left-[41.88%] uppercase font-semibold cursor-pointer"
            onClick={onShopClick}
          >
            Shop
          </div>
          <div
            className="absolute top-[38.26%] left-[45.05%] uppercase font-semibold cursor-pointer"
            onClick={onBlogClick}
          >
            blog
          </div>
          <div className="absolute top-[38.26%] left-[48.13%] uppercase font-semibold">
            Sale
          </div>
          <div className="absolute top-[38.26%] left-[50.99%] uppercase font-semibold">
            contact us
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[18.26%] w-[3.59%] top-[38.26%] right-[40.26%] bottom-[43.48%] left-[56.15%]"
            onClick={openSearch1}
          >
            <div className="absolute top-[0%] left-[34.78%] text-sm uppercase font-semibold font-oswald-medium-14 text-white text-left">
              search
            </div>
            <img
              className="absolute h-[80.23%] w-[24.42%] top-[14.29%] right-[75.58%] bottom-[5.48%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-31.svg"
            />
          </button>
          <div className="absolute h-[24.35%] w-[2.81%] top-[38.26%] right-[59.06%] bottom-[37.39%] left-[38.13%]">
            <div className="absolute top-[0%] left-[18.52%] uppercase font-semibold">
              home
            </div>
            <div className="absolute h-[7.14%] w-full top-[92.86%] right-[0%] bottom-[0%] left-[0%] bg-main-color-2" />
          </div>
          <img
            className="absolute h-[17.9%] w-[1.14%] top-[41.39%] right-[7.58%] bottom-[40.7%] left-[91.28%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="absolute top-[1371px] left-[0px] w-[1920px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] bg-main-color w-[1920px] h-[100px]" />
          <div className="absolute top-[35px] left-[611px] w-[155px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-main-color box-border hidden border-[2px] border-solid border-black" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[6.67%] right-[0%] bottom-[6.67%] left-[6.67%] bg-main-color hidden" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[30%] right-[-26.67%] bottom-[-16.67%] left-[33.33%] bg-main-color hidden" />
              <img
                className="absolute h-[37.11%] w-[51.45%] top-[34.34%] right-[24.28%] bottom-[28.55%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[44px] flex items-center w-[111px] h-[30px]">
              Free Express Shipping
            </div>
          </div>
          <div className="absolute top-[35px] left-[969px] w-[119px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-main-color box-border hidden border-[2px] border-solid border-black" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[6.67%] right-[0%] bottom-[6.67%] left-[6.67%] bg-main-color hidden" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[30%] right-[-26.67%] bottom-[-16.67%] left-[33.33%] bg-main-color hidden" />
              <img
                className="absolute h-[37.11%] w-[51.45%] top-[34.34%] right-[24.28%] bottom-[28.55%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[44px] flex items-center w-[75px] h-[30px]">
              Customer Love
            </div>
          </div>
          <div className="absolute top-[35px] left-[1291px] w-[110px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-main-color box-border hidden border-[2px] border-solid border-black" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[6.67%] right-[0%] bottom-[6.67%] left-[6.67%] bg-main-color hidden" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[30%] right-[-26.67%] bottom-[-16.67%] left-[33.33%] bg-main-color hidden" />
              <img
                className="absolute h-[37.11%] w-[51.45%] top-[34.34%] right-[24.28%] bottom-[28.55%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[44px] flex items-center w-[66px] h-[30px]">
              Easy Returns
            </div>
          </div>
          <div className="absolute top-[35px] left-[1604px] w-[127px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-main-color box-border hidden border-[2px] border-solid border-black" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[6.67%] right-[0%] bottom-[6.67%] left-[6.67%] bg-main-color hidden" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[30%] right-[-26.67%] bottom-[-16.67%] left-[33.33%] bg-main-color hidden" />
              <img
                className="absolute h-[37.11%] w-[51.45%] top-[34.34%] right-[24.28%] bottom-[28.55%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[44px] flex items-center w-[83px] h-[30px]">
              Secure Payment
            </div>
          </div>
          <div className="absolute top-[35px] left-[217px] w-[191px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-main-color box-border hidden border-[2px] border-solid border-black" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[6.67%] right-[0%] bottom-[6.67%] left-[6.67%] bg-main-color hidden" />
              <div className="absolute h-[86.67%] w-[93.33%] top-[30%] right-[-26.67%] bottom-[-16.67%] left-[33.33%] bg-main-color hidden" />
              <img
                className="absolute h-[37.11%] w-[51.45%] top-[34.34%] right-[24.28%] bottom-[28.55%] left-[24.28%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[44px] flex items-center w-[147px] h-[30px]">
              Duties and Taxes Guaranteed
            </div>
          </div>
        </div>
        <div className="absolute h-[0.84%] w-[10.73%] top-[25.15%] right-[30.42%] bottom-[74%] left-[58.85%] hidden text-lg text-gray-1">
          <div className="absolute h-3/6 w-[38.35%] top-[40.91%] right-[0%] bottom-[9.09%] left-[61.65%]">
            <div className="absolute h-full w-[96.2%] top-[0%] left-[1.27%] uppercase flex items-center">
              119,00 EUR
            </div>
            <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
          </div>
          <div className="absolute h-full w-[57.77%] top-[0%] left-[0%] text-7xl uppercase font-medium flex items-center">
            139,00 EUR
          </div>
        </div>
        <div className="absolute top-[177px] left-[233px] text-29xl leading-[68px] text-center flex items-center justify-center w-[1454px] h-[90px]">
          Shopping Cart
        </div>
        <div className="absolute top-[361.5px] left-[232.5px] box-border w-[884px] h-px border-t-[1px] border-solid border-divider" />
        <div className="absolute top-[633.5px] left-[232.5px] box-border w-[884px] h-px border-t-[1px] border-solid border-divider" />
        <div className="absolute top-[322px] left-[233px] text-lg tracking-[0.5px] uppercase font-medium text-gray-1 flex items-center w-[182px] h-[22px]">
          Product
        </div>
        <img
          className="absolute top-[386px] left-[233px] w-[83.59px] h-[103.2px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div className="absolute top-[386px] left-[334px] text-lg tracking-[0.5px] uppercase font-medium flex items-center w-[187px] h-[45px]">
          Angels malu zip jeans slim black used
        </div>
        <div className="absolute top-[658px] left-[233px] w-[200px] h-10 text-center text-gray-1">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-blue-hover box-border border-[2px] border-solid border-divider" />
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
            continue shopping
          </div>
        </div>
        <div className="absolute top-[658px] left-[901px] w-[215px] h-10 text-center text-gray-1">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-blue-hover box-border border-[2px] border-solid border-divider" />
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
            clear shopping cart
          </div>
        </div>
        <div className="absolute top-[322px] left-[751px] w-[119px] h-[259px] text-center text-base">
          <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.5px] uppercase font-medium text-gray-1 text-left flex items-center w-[119px] h-[22px]">
            Quantity
          </div>
          <div className="absolute top-[95px] left-[0px] w-[119px] h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-divider" />
            <div className="absolute h-[4.65%] w-[8.4%] top-[51.16%] right-[75.63%] bottom-[44.19%] left-[15.97%] bg-divider" />
            <div className="absolute h-[27.91%] w-[10.08%] top-[37.21%] right-[13.45%] bottom-[34.88%] left-[76.47%]">
              <div className="absolute h-[16.67%] w-full top-[41.67%] right-[0%] bottom-[41.67%] left-[0%] bg-divider" />
              <div className="absolute h-[16.67%] w-full top-[0%] right-[-58.33%] bottom-[83.33%] left-[58.33%] bg-divider [transform:_rotate(90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute h-full w-[25.21%] top-[0%] left-[37.82%] uppercase flex items-center justify-center">
              1
            </div>
          </div>
          <div className="absolute top-[216px] left-[0px] w-[119px] h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-divider" />
            <div className="absolute h-[4.65%] w-[8.4%] top-[51.16%] right-[75.63%] bottom-[44.19%] left-[15.97%] bg-divider" />
            <div className="absolute h-[27.91%] w-[10.08%] top-[37.21%] right-[13.45%] bottom-[34.88%] left-[76.47%]">
              <div className="absolute h-[16.67%] w-full top-[41.67%] right-[0%] bottom-[41.67%] left-[0%] bg-divider" />
              <div className="absolute h-[16.67%] w-full top-[0%] right-[-58.33%] bottom-[83.33%] left-[58.33%] bg-divider [transform:_rotate(90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute h-full w-[25.21%] top-[0%] left-[37.82%] uppercase flex items-center justify-center">
              1
            </div>
          </div>
        </div>
        <div className="absolute top-[322px] left-[1187px] bg-light-blue-hover box-border w-[500px] h-[614px] border-[2px] border-solid border-divider" />
        <div className="absolute top-[960px] left-[1187px] bg-light-blue-hover box-border w-[500px] h-[295px] border-[2px] border-solid border-divider" />
        <img
          className="absolute top-[507px] left-[233px] w-[83.59px] h-[103.2px] object-cover"
          alt=""
          src="/rectangle-71@2x.png"
        />
        <div className="absolute top-[507px] left-[334px] text-lg tracking-[0.5px] uppercase font-medium flex items-center w-[187px] h-[45px]">
          Angels malu zip jeans slim black used
        </div>
        <div className="absolute top-[322px] left-[556px] w-[78px] h-72 font-roboto-medium-14">
          <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.5px] uppercase font-medium font-oswald-medium-14 text-gray-1 flex items-center w-[78px] h-[22px]">
            Price
          </div>
          <div className="absolute top-[64px] left-[0px] leading-[20px] flex items-center w-[78px] h-[103px]">
            120,00 EUR
          </div>
          <div className="absolute top-[185px] left-[0px] leading-[20px] flex items-center w-[78px] h-[103px]">
            120,00 EUR
          </div>
        </div>
        <div className="absolute top-[322px] left-[910px] w-[88px] h-72 font-roboto-medium-14">
          <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.5px] uppercase font-medium font-oswald-medium-14 text-gray-1 flex items-center w-[88px] h-[22px]">
            Total
          </div>
          <div className="absolute top-[64px] left-[0px] leading-[20px] flex items-center w-[76px] h-[103px]">
            120,00 EUR
          </div>
          <div className="absolute top-[185px] left-[0px] leading-[20px] flex items-center w-[76px] h-[103px]">
            120,00 EUR
          </div>
        </div>
        <div className="absolute top-[322px] left-[674px] w-[37px] h-72 font-roboto-medium-14">
          <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.5px] uppercase font-medium font-oswald-medium-14 text-gray-1 flex items-center w-[37px] h-[22px]">
            Size
          </div>
          <div className="absolute top-[64px] left-[0px] leading-[20px] flex items-center w-8 h-[103px]">
            W32
          </div>
          <div className="absolute top-[185px] left-[0px] leading-[20px] flex items-center w-8 h-[103px]">
            W32
          </div>
        </div>
        <div className="absolute top-[358px] left-[1219px] text-5xl leading-[68px] flex items-center w-[444px] h-[22px]">
          Apply Discount Code
        </div>
        <div className="absolute top-[402px] left-[1219px] bg-white box-border w-[444px] h-11 border-[1px] border-solid border-divider" />
        <div className="absolute top-[402px] left-[1235px] text-base leading-[20px] font-roboto-regular-14-aa text-divider flex items-center w-[313px] h-11">
          Enter discount code
        </div>
        <div className="absolute top-[402px] left-[1537px] tracking-[0.5px] uppercase font-medium text-black-2 text-right flex items-center w-[111px] h-11">
          Apply Discount
        </div>
        <div className="absolute top-[472px] left-[1219px] text-5xl leading-[68px] flex items-center w-[444px] h-[22px]">
          Estimate Shipping and Tax
        </div>
        <div className="absolute top-[502px] left-[1219px] text-base leading-[20px] font-roboto-regular-14-aa text-gray-1 flex items-center w-[444px] h-10">
          Enter your destination to get a shipping estimate.
        </div>
        <div className="absolute top-[557px] left-[1374px] bg-white box-border w-[289px] h-11 border-[1px] border-solid border-divider" />
        <div className="absolute top-[557px] left-[1390px] text-base leading-[20px] font-roboto-regular-14-aa text-black-2 flex items-center w-[273px] h-11">
          United States
        </div>
        <div className="absolute top-[557px] left-[1219px] text-base leading-[20px] font-roboto-regular-14-aa flex items-center w-[108px] h-[27px] text-black-2">
          <span className="[line-break:anywhere] w-full">
            <span>{`Country  `}</span>
            <span className="text-main-color-2">*</span>
          </span>
        </div>
        <div className="absolute top-[628px] left-[1219px] text-base leading-[20px] font-roboto-regular-14-aa flex items-center w-[124px] h-[27px] text-black-2">
          <span className="[line-break:anywhere] w-full">
            <span>{`State/Province  `}</span>
            <span className="text-main-color-2">*</span>
          </span>
        </div>
        <img
          className="absolute top-[-7854px] left-[26683px] w-2 h-[18px]"
          alt=""
          src="/component-4.svg"
        />
        <div className="absolute top-[696px] left-[1374px] bg-white box-border w-[289px] h-11 border-[1px] border-solid border-divider" />
        <div className="absolute top-[696px] left-[1219px] text-base leading-[20px] font-roboto-regular-14-aa text-black-2 flex items-center w-[140px] h-[27px]">
          Zip/Postal Code
        </div>
        <div className="absolute top-[764px] left-[1219px] w-[444px] h-[68px] text-lg">
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-medium flex items-center w-[444px] h-[22px]">
            Flat Rate
          </div>
          <div className="absolute top-[28px] left-[23px] text-sm leading-[20px] font-roboto-regular-14-aa flex items-center w-[421px] h-10">
            Fixed 5.00 EUR
          </div>
          <img
            className="absolute top-[43px] left-[0px] w-2.5 h-2.5"
            alt=""
            src="/ellipse.svg"
          />
        </div>
        <div className="absolute top-[847px] left-[1219px] w-[444px] h-[68px] text-lg">
          <div className="absolute top-[0px] left-[0px] leading-[24px] font-medium flex items-center w-[444px] h-[22px]">
            Best Way
          </div>
          <div className="absolute top-[28px] left-[23px] text-sm leading-[20px] font-roboto-regular-14-aa text-gray-1 flex items-center w-[421px] h-10">
            Table Rate 10.00 EUR
          </div>
          <img
            className="absolute top-[43px] left-[0px] w-2.5 h-2.5"
            alt=""
            src="/ellipse1.svg"
          />
        </div>
        <div className="absolute top-[1471px] left-[0px] w-[1920px] h-[527px] text-lg text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-[0.19%] w-[97.86%] top-[85.67%] right-[1.07%] bottom-[14.14%] left-[1.07%] box-border border-t-[1px] border-solid border-gray-2" />
          <b className="absolute h-[3.98%] w-[13.07%] top-[88.43%] left-[1.09%] text-xs leading-[27px] uppercase inline-block font-roboto-regular-14-aa">
            © 2019. Crisp theme Developed by Belvg
          </b>
          <div className="absolute h-[8.06%] w-[5.25%] top-[12.24%] right-[93.66%] bottom-[79.7%] left-[1.09%] text-center text-xl">
            <div className="absolute h-[82.35%] w-[91.89%] top-[17.65%] right-[8.11%] bottom-[0%] left-[0%]">
              <div className="absolute h-[102.86%] w-[101.18%] top-[-17.14%] right-[-7.06%] bottom-[14.29%] left-[5.88%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-full w-full top-[-25.71%] right-[-10.59%] bottom-[25.71%] left-[10.59%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-500 box-border border-[3px] border-solid border-white" />
              <div className="absolute h-[91.43%] w-full top-[2.86%] left-[0%] tracking-[2px] uppercase font-medium flex items-center justify-center">
                crisp
              </div>
            </div>
            <img
              className="absolute h-[89.41%] w-[94.46%] top-[-3.53%] right-[-1.49%] bottom-[14.12%] left-[7.03%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="absolute h-[38.52%] w-[5.52%] top-[12.33%] right-[78.33%] bottom-[49.15%] left-[16.15%]">
            <div className="absolute h-[13.3%] w-[124.71%] top-[0%] left-[0%] uppercase font-semibold inline-block">
              features
            </div>
            <div className="absolute h-[96.55%] w-[124.71%] top-[28.08%] left-[0%] text-smi leading-[27px] uppercase font-roboto-medium-14 text-gray-1 inline-block">
              <p className="m-0">men</p>
              <p className="m-0">Women</p>
              <p className="m-0">boys</p>
              <p className="m-0">girls</p>
              <p className="m-0">new arrivals</p>
              <p className="m-0">shoes</p>
              <p className="m-0">cothes</p>
              <p className="m-0">accessories</p>
            </div>
          </div>
          <div className="absolute h-[38.52%] w-[6.09%] top-[12.33%] right-[62.5%] bottom-[49.15%] left-[31.41%]">
            <div className="absolute h-[13.3%] w-[124.71%] top-[0%] left-[0%] uppercase font-semibold inline-block">
              Menu
            </div>
            <div className="absolute h-[96.55%] w-[124.71%] top-[28.08%] left-[0%] text-smi leading-[27px] uppercase font-roboto-medium-14 text-gray-1 inline-block">
              <p className="m-0">About us</p>
              <p className="m-0">contact us</p>
              <p className="m-0">my account</p>
              <p className="m-0">orders history</p>
              <p className="m-0">MY WISHLIST</p>
              <p className="m-0">BLOG</p>
              <p className="m-0">LOGIN</p>
            </div>
          </div>
          <div className="absolute h-[51.23%] w-[11.06%] top-[12.33%] right-[41.75%] bottom-[36.43%] left-[47.19%]">
            <div className="absolute h-[75.19%] w-[50.04%] top-[0%] right-[49.96%] bottom-[24.81%] left-[0%]">
              <div className="absolute h-[13.3%] w-[124.71%] top-[0%] left-[0%] uppercase font-semibold inline-block">
                contact us
              </div>
              <div className="absolute h-[96.55%] w-[124.71%] top-[28.08%] left-[0%] text-smi leading-[27px] uppercase font-roboto-medium-14 text-gray-1 hidden">
                <p className="m-0">About us</p>
                <p className="m-0">contuct us</p>
                <p className="m-0">my account</p>
                <p className="m-0">orders history</p>
                <p className="m-0">MY WISHLIST</p>
                <p className="m-0">BLOG</p>
                <p className="m-0">LOGIN</p>
              </div>
            </div>
            <div className="absolute h-[82.59%] w-full top-[17.41%] right-[0%] bottom-[0%] left-[0%] text-xs text-gray-1 font-roboto-medium-14">
              <div className="absolute h-[91.93%] w-full top-[8.07%] left-[0%] leading-[45.5px] uppercase inline-block">
                <p className="m-0">123 STREET NAME, CITY, ENGLAND</p>
                <p className="m-0">(123) 456-7890</p>
                <p className="m-0">MAIL@EXAMPLE.COM</p>
                <p className="m-0">MON - SUN / 9:00AM - 8:00PM</p>
              </div>
              <div className="absolute h-[87.89%] w-[73.47%] top-[0%] left-[0%] leading-[45px] uppercase font-medium font-oswald-medium-14 text-white inline-block">
                <p className="m-0">Address:</p>
                <p className="m-0">Phone:</p>
                <p className="m-0">email:</p>
                <p className="m-0">working days/hours</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[32.64%] w-[14.58%] top-[12.33%] right-[1.08%] bottom-[55.03%] left-[84.33%] text-smi">
            <div className="absolute h-[10.47%] w-[99.93%] top-[33.14%] left-[0%] leading-[27px] uppercase font-roboto-medium-14 text-gray-1 flex items-center">
              Subscribe to our newsletters
            </div>
            <div className="absolute h-[15.7%] w-[41.21%] top-[0%] left-[0%] text-lg uppercase font-semibold inline-block">
              join us
            </div>
            <div className="absolute h-[23.26%] w-full top-[49.42%] right-[0%] bottom-[27.33%] left-[0%] text-xs font-roboto-regular-14-aa">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black box-border border-[1px] border-solid border-white" />
              <div className="absolute h-full w-[70.82%] top-[0%] left-[5.45%] leading-[20px] flex items-center">
                Email Address
              </div>
            </div>
            <div className="absolute h-[23.26%] w-full top-[76.74%] right-[0%] bottom-[0%] left-[0%] text-center text-sm text-black-2">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
              <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
                Subscribe!
              </div>
            </div>
          </div>
          <div className="absolute h-[44.4%] w-[6.69%] top-[12.33%] right-[25.36%] bottom-[43.26%] left-[67.95%]">
            <div className="absolute h-[11.54%] w-[97.18%] top-[0%] left-[0%] uppercase font-semibold inline-block">
              follow us
            </div>
            <div className="absolute h-[79.49%] w-[99.67%] top-[20.51%] right-[0%] bottom-[0%] left-[0.33%] text-smi text-gray-1 font-roboto-medium-14">
              <img
                className="absolute h-[11.29%] w-[16.4%] top-[5.38%] right-[83.6%] bottom-[83.33%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/facebook-3.svg"
              />
              <div className="absolute h-full w-[68.99%] top-[0%] left-[31.01%] leading-[46px] uppercase inline-block">
                <p className="m-0">FACEBOOK</p>
                <p className="m-0">TWITTER</p>
                <p className="m-0">INSTAGRAM</p>
              </div>
              <img
                className="absolute h-[11.29%] w-[16.4%] top-[55.38%] right-[83.6%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/instagramphotocamerasymbol1.svg"
              />
              <img
                className="absolute h-[11.29%] w-[16.4%] top-[30.65%] right-[83.6%] bottom-[58.06%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[426px] left-[1024px] w-[92px] h-6"
          alt=""
          src="/group-38.svg"
        />
        <img
          className="absolute top-[548px] left-[1024px] w-[92px] h-6"
          alt=""
          src="/group-38.svg"
        />
        <img
          className="absolute top-[576px] left-[1637.65px] w-[10.71px] h-2.5"
          alt=""
          src="/frame.svg"
        />
        <div className="absolute top-[627px] left-[1374px] bg-white box-border w-[289px] h-11 border-[1px] border-solid border-divider" />
        <div className="absolute top-[627px] left-[1390px] text-base leading-[20px] font-roboto-regular-14-aa text-black-2 flex items-center w-[273px] h-11">
          Alaska
        </div>
        <img
          className="absolute top-[646px] left-[1637.65px] w-[10.71px] h-2.5"
          alt=""
          src="/frame.svg"
        />
        <div className="absolute top-[444px] left-[334px] w-[23px] h-[23px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[23px] h-[23px] border-[1px] border-solid border-divider" />
          <div className="absolute top-[4px] left-[4px] bg-steelblue-100 w-[15px] h-[15px]" />
        </div>
        <div className="absolute top-[565px] left-[334px] w-[23px] h-[23px]">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[23px] h-[23px] border-[1px] border-solid border-divider" />
          <div className="absolute top-[4px] left-[4px] bg-palevioletred w-[15px] h-[15px]" />
        </div>
        <div className="absolute h-[0.8%] w-[0.83%] top-[23.92%] right-[13.59%] bottom-[75.28%] left-[85.57%]">
          <div className="absolute top-[7px] left-[0px] bg-gray-1 w-4 h-0.5" />
          <div className="absolute top-[0px] left-[9px] bg-gray-1 w-4 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0] hidden" />
        </div>
        <div className="absolute top-[1200px] left-[1189px] w-[500px] h-[55px] text-center text-white">
          <div className="absolute top-[0px] left-[0px] bg-black w-[500px] h-[55px]" />
          <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[500px] h-[55px]">
            proceed to checkout
          </div>
        </div>
        <div className="absolute top-[994px] left-[1217px] text-lg leading-[24px] font-medium flex items-center w-[437px] h-[22px]">
          Subtotal
        </div>
        <div className="absolute top-[994px] left-[1224px] text-lg leading-[24px] font-medium text-right flex items-center w-[437px] h-[22px]">
          120.00 EUR
        </div>
        <div className="absolute top-[1088px] left-[1217px] text-5xl leading-[68px] flex items-center w-[437px] h-[22px]">
          Order Total
        </div>
        <div className="absolute top-[1088px] left-[1224px] text-5xl leading-[68px] text-right flex items-center w-[437px] h-[22px]">
          120.00 EUR
        </div>
        <div className="absolute top-[1039px] left-[1217px] text-lg leading-[24px] font-medium text-gray-1 flex items-center w-[437px] h-[22px]">
          Tax
        </div>
        <div className="absolute top-[1029px] left-[1224px] text-lg leading-[24px] font-medium text-gray-1 text-right flex items-center w-[437px] h-[22px]">
          0.00 EUR
        </div>
        <div className="absolute top-[1139.5px] left-[1216.5px] box-border w-[445px] h-px border-t-[1px] border-solid border-divider" />
        <div className="absolute top-[1140px] left-[1189px] tracking-[0.5px] uppercase font-medium text-gray-1 text-center flex items-center justify-center w-[500px] h-[60px]">
          Check Out with Multiple Addresses
        </div>
        <div className="absolute top-[521px] left-[1880px] w-[200px] h-10 [transform:_rotate(-90deg)] [transform-origin:0_0] text-center text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
            Contact US
          </div>
        </div>
      </div>
      {isSignInPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp1}
        >
          <SignInPopUp1 onClose={closeSignInPopUp1} />
        </PortalPopup>
      )}
      {isMiniCart1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMiniCart1}
        >
          <MiniCart1 onClose={closeMiniCart1} />
        </PortalPopup>
      )}
      {isSearch1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch1}
        >
          <Search1 onClose={closeSearch1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Main;
