import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInPopUp1 from "../components/SignInPopUp1";
import PortalPopup from "../components/PortalPopup";
import MiniCart1 from "../components/MiniCart1";
import Search1 from "../components/Search1";

const Product1: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isMiniCart1Open, setMiniCart1Open] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);

  const onProduct1Click = useCallback(() => {
    navigate("/article-1");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
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

  const onRectangleImageClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  return (
    <>
      <div
        className="relative bg-white w-full h-[3135px] overflow-hidden cursor-pointer text-left text-sm text-black font-oswald-medium-14"
        onClick={onProduct1Click}
      >
        <div className="absolute top-[94px] left-[990px] bg-divider w-[17px] h-[17px] hidden" />
        <div className="absolute top-[172px] left-[1032px] leading-[68px] font-roboto-regular-14-aa text-gray-1 flex items-center w-[239px] h-9">
          Home / Womens Dress / Angels malu
        </div>
        <div className="absolute top-[2608px] left-[0px] w-[1920px] h-[527px] text-lg text-white">
          <div className="absolute top-[0px] left-[0px] bg-black w-[1920px] h-[527px]" />
          <div className="absolute top-[451.5px] left-[20.5px] box-border w-[1879px] h-px border-t-[1px] border-solid border-gray-2" />
          <b className="absolute top-[466px] left-[21px] text-xs leading-[27px] uppercase inline-block font-roboto-regular-14-aa w-[251px] h-[21px]">
            © 2019. Crisp theme Developed by Belvg
          </b>
          <div className="absolute top-[63px] left-[21px] w-[102.34px] h-11 text-center text-xl">
            <div className="absolute top-[0px] left-[0px] w-[102.34px] h-11">
              <div className="absolute top-[3px] left-[5.44px] bg-black box-border w-[93.63px] h-9 hidden border-[3px] border-solid border-white" />
              <div className="absolute top-[0px] left-[9.8px] bg-black box-border w-[92.54px] h-[35px] hidden border-[3px] border-solid border-white" />
              <div className="absolute top-[9px] left-[0px] bg-gray-500 box-border w-[92.54px] h-[35px] border-[3px] border-solid border-white" />
              <div className="absolute top-[10px] left-[0px] tracking-[2px] uppercase font-medium flex items-center justify-center w-[92.54px] h-8">
                crisp
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[7.08px] w-[95.13px] h-[38px]"
              alt=""
              src="/vector8.svg"
            />
          </div>
          <div className="absolute top-[65px] left-[310px] w-[106px] h-[203px]">
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
          <div className="absolute top-[65px] left-[603px] w-[117px] h-[203px]">
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
          <div className="absolute top-[65px] left-[906.11px] w-[212.3px] h-[270px]">
            <div className="absolute top-[0px] left-[0px] w-[106.24px] h-[203px]">
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
            <div className="absolute top-[47px] left-[0px] w-[212.3px] h-[223px] text-xs text-gray-1 font-roboto-medium-14">
              <div className="absolute top-[18px] left-[0px] leading-[45.5px] uppercase inline-block w-[212.3px] h-[205px]">
                <p className="m-0">123 STREET NAME, CITY, ENGLAND</p>
                <p className="m-0">(123) 456-7890</p>
                <p className="m-0">MAIL@EXAMPLE.COM</p>
                <p className="m-0">MON - SUN / 9:00AM - 8:00PM</p>
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[45px] uppercase font-medium font-oswald-medium-14 text-white inline-block w-[155.97px] h-[196px]">
                <p className="m-0">Address:</p>
                <p className="m-0">Phone:</p>
                <p className="m-0">email:</p>
                <p className="m-0">working days/hours</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[65px] left-[1619.21px] w-[280px] h-[172px] text-smi">
            <div className="absolute top-[57px] left-[0px] leading-[27px] uppercase font-roboto-medium-14 text-gray-1 flex items-center w-[279.79px] h-[18px]">
              Subscribe to our newsletters
            </div>
            <div className="absolute top-[0px] left-[0px] text-lg uppercase font-semibold inline-block w-[115.4px] h-[27px]">
              join us
            </div>
            <div className="absolute top-[85px] left-[0px] w-[280px] h-10 text-[11px] font-roboto-regular-14-aa">
              <div className="absolute top-[0px] left-[0px] bg-black box-border w-[280px] h-10 border-[1px] border-solid border-white" />
              <div className="absolute top-[0px] left-[15.25px] leading-[27px] flex items-center w-[198.29px] h-10">
                Email Address
              </div>
            </div>
            <div className="absolute top-[132px] left-[0px] w-[280px] h-10 text-center text-sm text-black-2">
              <div className="absolute top-[0px] left-[0px] bg-white w-[280px] h-10" />
              <div className="absolute top-[0px] left-[0px] uppercase font-medium flex items-center justify-center w-[280px] h-10">
                Subscribe!
              </div>
            </div>
          </div>
          <div className="absolute top-[65px] left-[1304.57px] w-[128.47px] h-[234px]">
            <div className="absolute top-[0px] left-[0px] uppercase font-semibold inline-block w-[124.84px] h-[27px]">
              follow us
            </div>
            <div className="absolute top-[48px] left-[0.43px] w-[128.04px] h-[186px] text-smi text-gray-1 font-roboto-medium-14">
              <img
                className="absolute top-[10px] left-[0px] w-[21px] h-[21px] overflow-hidden"
                alt=""
                src="/facebook-3.svg"
              />
              <div className="absolute top-[0px] left-[39.7px] leading-[46px] uppercase inline-block w-[88.33px] h-[186px]">
                <p className="m-0">FACEBOOK</p>
                <p className="m-0">TWITTER</p>
                <p className="m-0">INSTAGRAM</p>
              </div>
              <img
                className="absolute top-[103px] left-[0px] w-[21px] h-[21px] overflow-hidden"
                alt=""
                src="/instagramphotocamerasymbol1.svg"
              />
              <img
                className="absolute top-[57px] left-[0px] w-[21px] h-[21px] overflow-hidden"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[1920px] h-[115px] cursor-pointer text-white"
          onClick={onComponent2ContainerClick}
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
          <span
            className="absolute top-[38.26%] left-[45.05%] uppercase font-semibold cursor-pointer"
            onClick={onBlogClick}
          >
            blog
          </span>
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
              src="/group-35.svg"
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
        <img
          className="absolute top-[172px] left-[339px] w-[624px] h-[790px] object-cover cursor-pointer"
          alt=""
          src="/rectangle-728@2x.png"
          onClick={onRectangleImageClick}
        />
        <div className="absolute top-[167px] left-[238px] bg-white box-border w-[86px] h-[106px] border-[2px] border-solid border-black" />
        <img
          className="absolute top-[172px] left-[243px] w-[76px] h-24 object-cover"
          alt=""
          src="/rectangle-751@2x.png"
        />
        <img
          className="absolute top-[288px] left-[243px] w-[76px] h-24 object-cover"
          alt=""
          src="/rectangle-729@2x.png"
        />
        <img
          className="absolute top-[404px] left-[243px] w-[76px] h-24 object-cover"
          alt=""
          src="/rectangle-731@2x.png"
        />
        <div className="absolute top-[255px] left-[1032px] text-29xl leading-[56px] font-medium flex items-center w-[493px] h-[115px]">
          Women Black Checked Fit and Flare Dress
        </div>
        <div className="absolute top-[479px] left-[1032px] w-[549px] h-[134.34px] text-center text-gray-1">
          <div className="absolute top-[0px] left-[0px] uppercase text-black text-left flex items-center w-[533px] h-[22px]">
            Select size (Inches)
          </div>
          <div className="absolute top-[0px] left-[139px] [text-decoration:underline] font-roboto-regular-14-aa text-link text-right flex items-center w-[410px] h-[22px]">
            Size guide
          </div>
          <div className="absolute top-[32.34px] left-[0px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              osfa
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[56px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w26
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[112px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w27
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[168px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w28
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[224px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w29
            </div>
            <img
              className="absolute h-[97.19%] w-[97.19%] top-[1.41%] right-[1.41%] bottom-[1.41%] left-[1.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[280px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w30
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32.34px] left-[335px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w31
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32px] left-[391px] w-[46px] h-[46px] text-black">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center [-webkit-text-stroke:3px_#000]">
              w32
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[32px] left-[447px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w33
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[32px] left-[503px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w34
            </div>
            <img
              className="absolute h-[97.19%] w-[97.19%] top-[1.41%] right-[1.41%] bottom-[1.41%] left-[1.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88.34px] left-[1px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w35
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88.34px] left-[57px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w36
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88.34px] left-[113px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w38
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88.34px] left-[169px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w40
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[225px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w42
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[280px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w44
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[336px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w46
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[393px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w48
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[447px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w50
            </div>
            <img
              className="absolute h-[97.19%] w-[97.19%] top-[1.41%] right-[1.41%] bottom-[1.41%] left-[1.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
          <div className="absolute top-[88px] left-[503px] w-[46px] h-[46px]">
            <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
              w52
            </div>
            <img
              className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/missing.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
          </div>
        </div>
        <div className="absolute top-[924px] left-[889px] w-[74px] h-[38px] text-smi">
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
              className="absolute top-[1.51px] left-[-0.5px] w-[10.99px] h-[10.99px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
        <div className="absolute top-[398px] left-[1032px] w-[434px] h-[22px]">
          <div className="absolute top-[0px] left-[0px] uppercase flex items-center w-[434px] h-[22px]">
            Select Color
          </div>
        </div>
        <div className="absolute top-[759px] left-[1032px] w-[221px] h-[50px] text-center text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
            Add to bag
          </div>
        </div>
        <div className="absolute top-[759.34px] left-[1285px] tracking-[0.5px] uppercase font-medium text-black-2 text-center flex items-center justify-center w-[207px] h-[50px]">
          Save
        </div>
        <div className="absolute top-[759px] left-[1271.58px] box-border w-[220.42px] h-[50px] border-[2px] border-solid border-divider" />
        <div className="absolute top-[820px] left-[1032px] w-[85px] h-[18px] text-xs text-gray-1">
          <img
            className="absolute top-[4.15px] left-[-0.85px] w-[13.7px] h-[9.55px]"
            alt=""
            src="/vector-23.svg"
          />
          <div className="absolute top-[0px] left-[18px] leading-[68px] uppercase flex items-center w-[67px] h-[18px]">
            Free shipping
          </div>
        </div>
        <div className="absolute top-[820px] left-[1132px] text-xs leading-[68px] uppercase text-gray-1 flex items-center w-[126px] h-[18px]">
          <span className="[line-break:anywhere] w-full">
            <span className="font-medium">Product code:</span>
            <span> RFKK1024</span>
          </span>
        </div>
        <div className="absolute top-[820px] left-[1273px] text-xs leading-[68px] uppercase text-gray-1 flex items-center w-[219px] h-[18px]">
          <span className="[line-break:anywhere] w-full">
            <span className="font-medium">TAGS:</span>
            <span> NEW arrivals, Top women</span>
          </span>
        </div>
        <div className="absolute top-[1033px] left-[339px] bg-whitesmoke w-[1242px] h-[599px]" />
        <div className="absolute top-[1061px] left-[1536px] w-4 h-4">
          <div className="absolute top-[7px] left-[0px] bg-gray-1 w-4 h-0.5" />
          <div className="absolute top-[0px] left-[9px] bg-black-2 w-4 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0] hidden" />
        </div>
        <div className="absolute top-[1058px] left-[366px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          Details
        </div>
        <div className="absolute top-[1642px] left-[366px] w-[1206px] h-[72px] text-5xl">
          <div className="absolute h-full w-[102.99%] top-[0%] right-[-0.75%] bottom-[0%] left-[-2.24%] bg-whitesmoke" />
          <div className="absolute h-[22.22%] w-[1.33%] top-[38.89%] right-[1.66%] bottom-[38.89%] left-[97.01%]">
            <div className="absolute top-[7px] left-[0px] bg-gray-1 w-4 h-0.5" />
            <div className="absolute top-[0px] left-[9px] bg-gray-1 w-4 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </div>
          <div className="absolute h-[30.56%] w-[16.92%] top-[34.72%] left-[0%] leading-[68px] flex items-center">
            Other information
          </div>
        </div>
        <div className="absolute top-[1724px] left-[366px] w-[1206px] h-[72px] text-5xl">
          <div className="absolute h-full w-[102.99%] top-[0%] right-[-0.75%] bottom-[0%] left-[-2.24%] bg-whitesmoke" />
          <div className="absolute h-[22.22%] w-[1.33%] top-[38.89%] right-[1.66%] bottom-[38.89%] left-[97.01%]">
            <div className="absolute top-[7px] left-[0px] bg-gray-1 w-4 h-0.5" />
            <div className="absolute top-[0px] left-[9px] bg-gray-1 w-4 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </div>
          <div className="absolute h-[30.56%] w-[16.92%] top-[34.72%] left-[0%] leading-[68px] flex items-center">
            Another tab
          </div>
        </div>
        <div className="absolute top-[1918px] left-[1546px] w-[353px] h-[548px] text-xs">
          <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
            <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
              Angels malu zip jeans slim black used
            </div>
            <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
          </div>
          <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
            TOP women
          </div>
          <img
            className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-718@2x.png"
          />
          <div className="absolute h-[3.1%] w-[9.3%] top-[96.9%] right-[43.02%] bottom-[0%] left-[47.67%] hidden text-center text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
            <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
              -16%
            </div>
          </div>
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] hidden text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-5 text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-black w-10 h-5" />
              <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-10 h-5">
                -30%
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1918px] left-[1165px] w-[354px] h-[548px] text-xs">
          <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
            <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
              Angels malu zip jeans slim black used
            </div>
            <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
          </div>
          <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
            TOP women
          </div>
          <img
            className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-719@2x.png"
          />
          <div className="absolute h-[3.1%] w-[9.3%] top-[96.9%] right-[43.02%] bottom-[0%] left-[47.67%] hidden text-center text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
            <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
              -16%
            </div>
          </div>
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] hidden text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-5 text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-black w-10 h-5" />
              <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-10 h-5">
                -30%
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1918px] left-[405px] w-[354px] h-[548px] text-xs">
          <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
            <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
              Angels malu zip jeans slim black used
            </div>
            <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
          </div>
          <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
            TOP women
          </div>
          <img
            className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-720@2x.png"
          />
          <div className="absolute h-[3.1%] w-[9.3%] top-[96.9%] right-[43.02%] bottom-[0%] left-[47.67%] hidden text-center text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
            <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
              -16%
            </div>
          </div>
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] hidden text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-5 text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-black w-10 h-5" />
              <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-10 h-5">
                -30%
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1918px] left-[21px] w-[353px] h-[548px] text-xs">
          <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
            <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
              Angels malu zip jeans slim black used
            </div>
            <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
          </div>
          <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
            TOP women
          </div>
          <img
            className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-721@2x.png"
          />
          <div className="absolute h-[3.1%] w-[9.3%] top-[96.9%] right-[43.02%] bottom-[0%] left-[47.67%] hidden text-center text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
            <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
              -16%
            </div>
          </div>
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] hidden text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-5 text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-black w-10 h-5" />
              <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-10 h-5">
                -30%
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1918px] left-[785px] w-[354px] h-[548px] text-xs">
          <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
            <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
              Angels malu zip jeans slim black used
            </div>
            <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
          </div>
          <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
            TOP women
          </div>
          <img
            className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-722@2x.png"
          />
          <div className="absolute h-[3.1%] w-[9.3%] top-[96.9%] right-[43.02%] bottom-[0%] left-[47.67%] hidden text-center text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
            <div className="absolute h-full w-full top-[0%] left-[0%] uppercase flex items-center justify-center">
              -16%
            </div>
          </div>
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] hidden text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium flex items-center">
              139,00 EUR
            </div>
            <div className="absolute top-[0px] left-[0px] w-10 h-5 text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-black w-10 h-5" />
              <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-10 h-5">
                -30%
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1862px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          You May Also Like
        </div>
        <div className="absolute top-[1852px] left-[1815px] w-10 h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.93%] w-[18.12%] top-[34.67%] right-[42.53%] bottom-[34.39%] left-[39.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector23.svg"
          />
        </div>
        <div className="absolute top-[1892px] left-[1899px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.93%] w-[18.12%] top-[-65.61%] right-[139.35%] bottom-[134.67%] left-[-57.47%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector24.svg"
          />
        </div>
        <div className="absolute top-[2508px] left-[0px] w-[1920px] h-[100px]">
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
        <img
          className="absolute top-[775px] left-[1351px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/heartoutline.svg"
        />
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
        <div className="absolute top-[649px] left-[1032px] uppercase flex items-center w-[84px]">
          Quantity
        </div>
        <div className="absolute top-[649px] left-[1176px] uppercase flex items-center w-[360px] h-[22px]">
          price total
        </div>
        <div className="absolute top-[680px] left-[1176px] text-7xl uppercase font-medium flex items-center w-[360px] h-[37px]">
          90,00 EUR
        </div>
        <div className="absolute top-[1104.5px] left-[365.5px] box-border w-[1187px] h-px border-t-[1px] border-solid border-divider" />
        <div className="absolute top-[220px] left-[1031px] bg-light-blue-hover w-[75px] h-[35px]" />
        <img
          className="absolute top-[231px] left-[1043px] w-[51px] h-[14.01px]"
          alt=""
          src="/group1.svg"
        />
        <div className="absolute top-[977px] left-[588px] w-[125px] h-[18px] text-xs">
          <div className="absolute top-[0px] left-[0px] leading-[68px] uppercase font-medium flex items-center w-[35px] h-[18px]">
            Share:
          </div>
          <img
            className="absolute top-[2px] left-[48px] w-1.5 h-[13px]"
            alt=""
            src="/path-212-1.svg"
          />
          <img
            className="absolute top-[4px] left-[66px] w-[13px] h-2.5"
            alt=""
            src="/path-211-1.svg"
          />
          <img
            className="absolute top-[3px] left-[91px] w-[10.11px] h-[13px]"
            alt=""
            src="/group-83-1.svg"
          />
          <img
            className="absolute top-[3px] left-[113px] w-3 h-3"
            alt=""
            src="/group2.svg"
          />
        </div>
        <div className="absolute top-[1137px] left-[366px] flex items-center w-[567px] h-[92px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0 leading-[25px]">ABOUT PRODUCT</p>
            <p className="m-0 text-black-2 font-roboto-regular-14-aa">
              <span>
                <span className="leading-[30px]">{`Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. `}</span>
                <span className="leading-[20px]">
                  This tank features a smocked body, adjustable straps, scoop
                  neckline, ruffled hems, and a cropped fit.
                </span>
              </span>
            </p>
          </span>
        </div>
        <div className="absolute top-[1137px] left-[985px] flex items-center w-[567px] h-48">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0 leading-[25px]">SHIPPING</p>
            <p className="m-0 text-black-2 font-roboto-regular-14-aa">
              <span>
                <span className="leading-[30px]">{`We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of `}</span>
                <span className="leading-[20px]">
                  Columbia. The minimum order value must be $75 before taxes,
                  shipping and handling. Shipping fees are non-refundable.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="leading-[20px]">&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="leading-[20px]">
                  Please allow up to 2 business days (excluding weekends,
                  holidays, and sale days) to process your order.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="leading-[20px]">&nbsp;</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="leading-[20px]">
                  Processing Time + Shipping Time = Delivery Time
                </span>
              </span>
            </p>
          </span>
        </div>
        <div className="absolute top-[430px] left-[1031px] w-[101px] h-[27px]">
          <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
          <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
          <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
          <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
          <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-linen" />
          <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
        </div>
        <div className="absolute top-[680px] left-[1033px] w-[119px] h-[43px] text-center text-base">
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
        <div className="absolute top-[1244px] left-[366px] w-[189px] h-[246px] text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[0px] whitespace-pre-wrap flex items-center w-[189px] h-[246px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 leading-[25px] font-oswald-medium-14 text-black">
                ADVANTAGES
              </p>
              <p className="m-0 leading-[28px]"> Smocked body</p>
              <p className="m-0 leading-[28px]"> Adjustable straps</p>
              <p className="m-0 leading-[28px]"> Scoop neckline</p>
              <p className="m-0 leading-[28px]"> Ruffled hems</p>
              <p className="m-0 leading-[28px]"> Cropped length</p>
              <p className="m-0 leading-[28px]"> Model is wearing a small</p>
              <p className="m-0 leading-[28px]"> 100% rayon</p>
              <p className="m-0 leading-[28px]"> Machine washable</p>
            </span>
          </div>
          <div className="absolute top-[37px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[65px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[93px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[121px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[149px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[177px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[205px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[233px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
        </div>
        <div className="absolute top-[1534px] left-[368px] w-[189px] h-[79px] text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[0px] whitespace-pre-wrap flex items-center w-[189px] h-[79px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 leading-[25px] font-oswald-medium-14 text-black">
                ADVANTAGES
              </p>
              <p className="m-0 leading-[28px]"> Smocked body</p>
              <p className="m-0 leading-[28px]"> Adjustable straps</p>
              <p className="m-0 leading-[28px]"> Scoop neckline</p>
            </span>
          </div>
          <div className="absolute top-[12px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[40px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
          <div className="absolute top-[68px] left-[2px] bg-black-2 w-[3px] h-[3px]" />
        </div>
        <div className="absolute top-[549px] left-[1880px] w-[200px] h-10 [transform:_rotate(-90deg)] [transform-origin:0_0] text-center text-white">
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

export default Product1;
