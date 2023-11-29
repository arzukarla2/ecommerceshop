import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInPopUp1 from "../components/SignInPopUp1";
import PortalPopup from "../components/PortalPopup";
import MiniCart1 from "../components/MiniCart1";
import Search1 from "../components/Search1";

const Article1: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isMiniCart1Open, setMiniCart1Open] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);

  const onArticle1Click = useCallback(() => {
    navigate("/create-account-1");
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

  return (
    <>
      <div
        className="relative bg-white w-full h-[4260px] overflow-hidden cursor-pointer text-left text-xs text-black font-oswald-medium-14"
        onClick={onArticle1Click}
      >
        <div className="absolute top-[94px] left-[990px] bg-divider w-[17px] h-[17px] hidden" />
        <div className="absolute top-[115px] left-[339px] text-sm leading-[68px] font-roboto-regular-14-aa text-gray-1 text-center flex items-center justify-center w-[1242px] h-[50px]">
          Home / Womens Dress / Angels malu
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[1920px] h-[115px] cursor-pointer text-sm text-white"
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
        <div className="absolute top-[3043px] left-[1546px] w-[353px] h-[548px]">
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
        <div className="absolute top-[3043px] left-[1165px] w-[354px] h-[548px]">
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
        <div className="absolute top-[3043px] left-[405px] w-[354px] h-[548px]">
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
        <div className="absolute top-[3043px] left-[21px] w-[353px] h-[548px]">
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
        <div className="absolute top-[3043px] left-[785px] w-[354px] h-[548px]">
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
        <div className="absolute top-[2987px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          You May Also Like
        </div>
        <div className="absolute top-[2977px] left-[1815px] w-10 h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.94%] w-[18.12%] top-[34.67%] right-[42.53%] bottom-[34.39%] left-[39.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector21.svg"
          />
        </div>
        <div className="absolute top-[3017px] left-[1899px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.94%] w-[18.12%] top-[-65.61%] right-[139.35%] bottom-[134.67%] left-[-57.47%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector22.svg"
          />
        </div>
        <div className="absolute top-[3633px] left-[0px] w-[1920px] h-[100px] text-sm">
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
        <img
          className="absolute top-[169px] left-[21px] w-[1878px] h-[478px] object-cover"
          alt=""
          src="/image2@2x.png"
        />
        <div className="absolute top-[358px] left-[339px] w-[1242px] h-[100px] text-center text-29xl">
          <div className="absolute top-[0px] left-[0px] bg-white w-[1242px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] leading-[68px] flex items-center justify-center w-[1242px] h-[100px]">
            WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?
          </div>
        </div>
        <div className="absolute top-[672px] left-[339px] inline-block w-[818px] h-[634px] text-13xl">
          <p className="m-0 leading-[68px]">The Dress</p>
          <p className="m-0 text-lg text-black-2 font-roboto-regular-14-aa">
            <span>
              <span className="leading-[50px]">
                It’s a tricky thing, being a wedding guest.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                Among the endless list of requirements – buy a present, arrange
                accommodation, practise your small talk – there’s one obligation
                that trumps them all in terms of effort: fix up and look sharp.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                The rules surrounding wedding guest dressing are as nuanced as
                they come.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                There are some obvious musts – avoiding white is always a good
                idea – and others that are only acknowledged by serial
                wedding-goers, such as steering clear of stilettos unless you
                enjoy the feeling of numbness in your feet.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                In the summer, things get even more complicated. Not only do you
                have to find a sweat-free way to “dress to the nines”, but you
                have to strike the right balance between playful sunshine garb
                and formal occasionwear. This forces you to ask difficult
                questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’”
                and “Does this hat make me look like a chic French woman, or a
                dishevelled bird?”
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                It’s no mean feat, so here’s our handy guide to summer wedding
                guest dressing, with tips from industry experts on the trends
                and colours you need to know about this season .
              </span>
            </span>
          </p>
        </div>
        <div className="absolute top-[1941px] left-[339px] inline-block w-[818px] h-[945px] text-13xl">
          <p className="m-0 leading-[68px]">The Dress</p>
          <p className="m-0 text-lg text-black-2 font-roboto-regular-14-aa">
            <span>
              <span className="leading-[50px]">
                It’s a tricky thing, being a wedding guest.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                Among the endless list of requirements – buy a present, arrange
                accommodation, practise your small talk – there’s one obligation
                that trumps them all in terms of effort: fix up and look sharp.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                The rules surrounding wedding guest dressing are as nuanced as
                they come.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                There are some obvious musts – avoiding white is always a good
                idea – and others that are only acknowledged by serial
                wedding-goers, such as steering clear of stilettos unless you
                enjoy the feeling of numbness in your feet.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                In the summer, things get even more complicated. Not only do you
                have to find a sweat-free way to “dress to the nines”, but you
                have to strike the right balance between playful sunshine garb
                and formal occasionwear. This forces you to ask difficult
                questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’”
                and “Does this hat make me look like a chic French woman, or a
                dishevelled bird?”
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                It’s no mean feat, so here’s our handy guide to summer wedding
                guest dressing, with tips from industry experts on the trends
                and colours you need to know about this season .
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                It’s a tricky thing, being a wedding guest.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                Among the endless list of requirements – buy a present, arrange
                accommodation, practise your small talk – there’s one obligation
                that trumps them all in terms of effort: fix up and look sharp.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                The rules surrounding wedding guest dressing are as nuanced as
                they come.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="leading-[30px]">
                In the summer, things get even more complicated. Not only do you
                have to find a sweat-free way to “dress to the nines”, but you
                have to strike the right balance between playful sunshine garb
                and formal occasionwear. This forces you to ask difficult
                questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’”
                and “Does this hat make me look like a chic French woman, or a
                dishevelled bird?”
              </span>
            </span>
          </p>
        </div>
        <img
          className="absolute top-[1306px] left-[339px] w-[813px] h-[610px] object-cover"
          alt=""
          src="/image-23@2x.png"
        />
        <img
          className="absolute top-[699px] left-[1256px] w-[307px] h-[617px] object-cover"
          alt=""
          src="/image-32@2x.png"
        />
        <img
          className="absolute top-[1339px] left-[1249px] w-[332px] h-[617px] object-cover"
          alt=""
          src="/image-41@2x.png"
        />
        <div className="absolute top-[3733px] left-[0px] w-[1920px] h-[527px] text-lg text-white">
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
              src="/vector8.svg"
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

export default Article1;
