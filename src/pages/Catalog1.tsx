import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInPopUp1 from "../components/SignInPopUp1";
import PortalPopup from "../components/PortalPopup";
import MiniCart1 from "../components/MiniCart1";
import Search1 from "../components/Search1";

const Catalog1: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isMiniCart1Open, setMiniCart1Open] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);

  const onCatalog1Click = useCallback(() => {
    navigate("/catalog-filter-1");
  }, [navigate]);

  const onComponent2Container19Click = useCallback(() => {
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
        className="relative bg-white w-full h-[5675px] overflow-hidden cursor-pointer text-center text-sm text-gray-1 font-oswald-medium-14"
        onClick={onCatalog1Click}
      >
        <div className="absolute top-[94px] left-[990px] bg-divider w-[17px] h-[17px] hidden" />
        <div className="absolute top-[671.5px] left-[414.5px] box-border w-px h-[4338px] border-r-[1px] border-solid border-divider" />
        <div className="absolute top-[618px] left-[21px] leading-[68px] font-roboto-regular-14-aa text-left flex items-center w-[1878px] h-9">
          Home / Womens Dress / Best Chose
        </div>
        <div className="absolute top-[690px] left-[21px] w-[355px] h-[285px] text-left text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[0px] text-5xl leading-[68px] font-oswald-medium-14 text-black flex items-center w-[182px] h-[22px]">
            Brand
          </div>
          <div className="absolute top-[95px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              Cooper
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[53px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              State
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[137px] left-[0px] w-[114px] h-[22px] text-black">
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border hidden border-[1px] border-solid border-gray-1" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
                <img
                  className="absolute h-[50.61%] w-[72.07%] top-[26.46%] right-[11.46%] bottom-[22.93%] left-[16.46%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              bardot
            </div>
          </div>
          <div className="absolute top-[221px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              cece
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[179px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              alfani
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[263px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              donna ricco
            </div>
          </div>
          <div className="absolute top-[10px] left-[343px] bg-black-2 w-3 h-0.5" />
        </div>
        <div className="absolute top-[1362px] left-[21px] w-[355px] h-[243px] text-left text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[0px] text-5xl leading-[68px] font-oswald-medium-14 text-black flex items-center w-[182px] h-[22px]">
            Dress length
          </div>
          <div className="absolute top-[95px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              knee length
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[53px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              short
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[137px] left-[0px] w-[114px] h-[22px] text-black">
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border hidden border-[1px] border-solid border-gray-1" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
                <img
                  className="absolute h-[50.61%] w-[72.07%] top-[26.46%] right-[11.46%] bottom-[22.93%] left-[16.46%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              hight low
            </div>
          </div>
          <div className="absolute top-[221px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              midi
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[179px] left-[0px] w-[114px] h-[22px]">
            <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
              long
            </div>
            <div className="absolute top-[6px] left-[0px] w-2.5 h-2.5">
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
          </div>
          <div className="absolute top-[10px] left-[343px] bg-black-2 w-3 h-0.5" />
        </div>
        <div className="absolute top-[1035px] left-[21px] text-5xl leading-[68px] text-black text-left flex items-center w-[182px] h-[22px]">
          Size (Inches)
        </div>
        <div className="absolute top-[1045px] left-[364px] bg-black-2 w-3 h-0.5" />
        <div className="absolute top-[1088px] left-[77px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w26
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1088px] left-[133px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w27
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1088px] left-[189px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w28
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1088px] left-[245px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w29
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1144px] left-[21px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w30
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1144px] left-[77px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w31
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1144px] left-[133px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1144px] left-[189px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1144px] left-[245px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w34
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1200px] left-[21px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w35
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1200px] left-[77px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w36
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1200px] left-[133px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w38
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1200px] left-[189px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w40
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1200px] left-[245px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1256px] left-[21px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1256px] left-[77px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1256px] left-[133px] w-[46px] h-[46px]">
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
        <div className="absolute top-[1256px] left-[189px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            w50
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1256px] left-[245px] w-[46px] h-[46px]">
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
        <div className="absolute top-[672px] left-[1555px] w-[255px] h-[46px] text-left text-black">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-divider" />
          <img
            className="absolute h-[21.74%] top-[39.13%] right-[15.65px] bottom-[39.13%] max-h-full w-[10.71px]"
            alt=""
            src="/frame.svg"
          />
          <div className="absolute top-[11px] left-[11px] leading-[68px] uppercase flex items-center w-[220px] h-6">
            price (High to low)
          </div>
        </div>
        <div className="absolute top-[672px] left-[1830px] w-[69px] h-[46px] text-left text-black">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-divider" />
          <img
            className="absolute h-[21.74%] top-[39.13%] right-[15.65px] bottom-[39.13%] max-h-full w-[10.71px]"
            alt=""
            src="/frame.svg"
          />
          <div className="absolute top-[11px] left-[11px] leading-[68px] uppercase flex items-center w-[58px] h-6">
            48
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[1920px] h-[115px] cursor-pointer text-left text-white"
          onClick={onComponent2Container19Click}
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
              1 item(s)
            </div>
            <b className="absolute h-[48.28%] w-[76.56%] top-[51.72%] left-[22.66%] text-sm tracking-[0.01em] leading-[30px] flex font-roboto-regular-14-aa items-center">
              139,00 EUR
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
              src="/group-36.svg"
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
        <div className="absolute top-[5048px] left-[0px] w-[1920px] h-[100px] text-left text-black">
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
        <div className="absolute top-[5148px] left-[0px] w-[1920px] h-[527px] text-left text-lg text-white">
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
              src="/vector14.svg"
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
                src="/instagramphotocamerasymbol2.svg"
              />
              <img
                className="absolute h-[11.29%] w-[16.4%] top-[30.65%] right-[83.6%] bottom-[58.06%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[1088px] left-[21px] w-[46px] h-[46px]">
          <div className="absolute h-[52.38%] w-full top-[23.81%] left-[0%] leading-[68px] uppercase flex items-center justify-center">
            osfa
          </div>
          <img
            className="absolute h-[95.65%] w-[95.65%] top-[2.17%] right-[2.17%] bottom-[2.17%] left-[2.17%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/missing.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-divider" />
        </div>
        <div className="absolute top-[2042px] left-[21px] w-[355px] h-[22px] text-left text-5xl text-black">
          <div className="absolute top-[0px] left-[0px] leading-[68px] flex items-center w-[182px] h-[22px]">
            Dress Length
          </div>
          <div className="absolute top-[10px] left-[343px] bg-black-2 w-3 h-0.5" />
          <div className="absolute top-[5px] left-[350px] bg-black-2 w-3 h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[2124px] left-[21px] w-[355px] h-[295px] text-left text-5xl text-black">
          <div className="absolute top-[0px] left-[0px] leading-[68px] flex items-center w-[182px] h-[22px]">
            About Dresses
          </div>
          <div className="absolute top-[43px] left-[0px] text-lg tracking-[0.01em] leading-[28px] font-roboto-light inline-block w-[355px] h-[252px]">
            Every day we’re gonna be dropping the latest trends to help you nail
            every Summer sitch. Whether it’s a graduation, your mate's wedding,
            or just a cute day at the races with the gals, our occasion dresses
            have got you covered. Not looking for something fancy? No stress.
            We’ve got day dresses for days (aka bodycon dresses, t-shirt
            dresses, oversized shirt dresses).
          </div>
        </div>
        <div className="absolute top-[1816px] left-[21px] w-[355px] h-[166px] text-left text-black font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[0px] w-[355px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] text-5xl leading-[68px] font-oswald-medium-14 flex items-center w-[182px] h-[22px]">
              Price Range
            </div>
            <div className="absolute top-[46px] left-[0px] leading-[68px] uppercase flex items-center w-[76px] h-[22px]">
              0.00 EUR
            </div>
            <div className="absolute top-[46px] left-[279px] leading-[68px] uppercase text-right flex items-center w-[76px] h-[22px]">
              250.00 EUR
            </div>
            <div className="absolute top-[10px] left-[343px] bg-black-2 w-3 h-0.5" />
            <img
              className="absolute top-[89px] left-[1px] w-[211px] h-0.5"
              alt=""
              src="/vector11.svg"
            />
            <img
              className="absolute top-[89px] left-[212px] w-[143px] h-0.5"
              alt=""
              src="/vector12.svg"
            />
            <div className="absolute top-[80px] left-[1px] bg-black w-1.5 h-5" />
            <div className="absolute top-[80px] left-[209px] bg-black w-1.5 h-5" />
          </div>
          <div className="absolute top-[126px] left-[241px] w-[114px] h-10 text-center text-gray-1 font-oswald-medium-14">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-light-blue-hover box-border border-[2px] border-solid border-divider" />
            <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
              Apply
            </div>
          </div>
        </div>
        <div className="absolute top-[1655px] left-[21px] w-[355px] h-[101px] text-left text-5xl text-black">
          <div className="absolute top-[0px] left-[0px] leading-[68px] flex items-center w-[182px] h-[22px]">
            Color
          </div>
          <div className="absolute top-[10px] left-[343px] bg-black-2 w-3 h-0.5" />
          <div className="absolute top-[44px] left-[2px] w-[239px] h-[57px]">
            <div className="absolute top-[0px] left-[106px] bg-white box-border w-[27px] h-[27px] border-[2px] border-solid border-black" />
            <div className="absolute top-[5px] left-[0px] bg-gray-100 w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[37px] bg-linen w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[74px] bg-steelblue-200 w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[111px] bg-darkslategray w-[17px] h-[17px]" />
            <div className="absolute top-[40px] left-[0px] bg-brown w-[17px] h-[17px]" />
            <div className="absolute top-[40px] left-[37px] bg-darkgoldenrod w-[17px] h-[17px]" />
            <div className="absolute top-[40px] left-[74px] bg-dimgray w-[17px] h-[17px]" />
            <div className="absolute top-[40px] left-[111px] bg-pink-200 w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[148px] bg-slategray w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[185px] bg-silver w-[17px] h-[17px]" />
            <div className="absolute top-[5px] left-[222px] bg-darkgray w-[17px] h-[17px]" />
            <div className="absolute top-[40px] left-[148px] bg-darkcyan w-[17px] h-[17px]" />
          </div>
        </div>
        <div className="absolute top-[738px] left-[445px] w-[1454px] h-[4227px] text-left text-xs text-black">
          <div className="absolute top-[1907.34px] left-[0px] w-[1454px] h-[430px] text-lg text-white">
            <div className="absolute top-[0px] left-[0px] w-[1454px] h-[430px]">
              <img
                className="absolute top-[0px] left-[596.18px] w-[857.82px] h-[430px] object-cover"
                alt=""
                src="/rectangle-712@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#000,_#000_69.37%,_#000_89.11%,_rgba(0,_0,_0,_0))] w-[724px] h-[430px]" />
            </div>
            <div className="absolute top-[315px] left-[179px] w-[175px] h-14 text-center">
              <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
                shop now
              </div>
              <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-white" />
            </div>
            <div className="absolute top-[78px] left-[179px] text-37xl leading-[72px] uppercase font-medium">
              shoping without limits.
            </div>
            <div className="absolute top-[167px] left-[179px] text-6xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block w-[639px] h-[124px]">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco. We will deliver your
              purchase anywhere!
            </div>
            <img
              className="absolute top-[58px] left-[216px] w-[603px] h-[101.5px]"
              alt=""
              src="/vector13.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-72@2x.png"
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
          <div className="absolute top-[0px] left-[370px] w-[344px] h-[548px]">
            <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
              <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
                Angels malu zip jeans slim black used
              </div>
              <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
                235,00 EUR
              </div>
            </div>
            <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
              TOP women
            </div>
            <img
              className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-73@2x.png"
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
          <div className="absolute top-[0px] left-[740px] w-[344px] h-[548px]">
            <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
              <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
                Angels malu zip jeans slim black used
              </div>
              <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
                90,00 EUR
              </div>
            </div>
            <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
              TOP women
            </div>
            <img
              className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-74@2x.png"
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
          <div className="absolute top-[0px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-75@2x.png"
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
          <div className="absolute top-[632px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-76@2x.png"
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
          <div className="absolute top-[632px] left-[740px] w-[344px] h-[548px]">
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
              src="/rectangle-73@2x.png"
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
          <div className="absolute top-[632px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-77@2x.png"
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
          <div className="absolute top-[632px] left-[370px] w-[344px] h-[548px]">
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
              src="/rectangle-78@2x.png"
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
          <div className="absolute top-[1272px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-76@2x.png"
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
          <div className="absolute top-[1272px] left-[740px] w-[344px] h-[548px]">
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
              src="/rectangle-77@2x.png"
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
          <div className="absolute top-[1272px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-75@2x.png"
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
          <div className="absolute top-[1272px] left-[370px] w-[344px] h-[548px]">
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
              src="/rectangle-72@2x.png"
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
          <div className="absolute top-[2363.34px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-79@2x.png"
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
          <div className="absolute top-[2363.34px] left-[370px] w-[344px] h-[548px]">
            <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
              <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
                Angels malu zip jeans slim black used
              </div>
              <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
                235,00 EUR
              </div>
            </div>
            <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
              TOP women
            </div>
            <img
              className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-710@2x.png"
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
          <div className="absolute top-[2363.34px] left-[740px] w-[344px] h-[548px]">
            <div className="absolute h-[11.31%] w-full top-[88.69%] right-[0%] bottom-[0%] left-[0%] text-lg">
              <div className="absolute h-[35.48%] w-full top-[0%] left-[0%] font-light flex items-center">
                Angels malu zip jeans slim black used
              </div>
              <div className="absolute h-[35.48%] w-full top-[64.52%] left-[0%] text-3xl uppercase font-medium flex items-center">
                90,00 EUR
              </div>
            </div>
            <div className="absolute h-[4.01%] w-full top-[84.67%] left-[0%] uppercase font-semibold text-gray-4 flex items-center">
              TOP women
            </div>
            <img
              className="absolute h-[82.12%] w-full top-[0%] right-[0%] bottom-[17.88%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-713@2x.png"
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
          <div className="absolute top-[2363.34px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-714@2x.png"
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
          <div className="absolute top-[2995.34px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-715@2x.png"
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
          <div className="absolute top-[2995.34px] left-[740px] w-[344px] h-[548px]">
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
              src="/rectangle-710@2x.png"
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
          <div className="absolute top-[2995.34px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-716@2x.png"
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
          <div className="absolute top-[2995.34px] left-[370px] w-[344px] h-[548px]">
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
              src="/rectangle-717@2x.png"
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
          <div className="absolute top-[3635.34px] left-[1110px] w-[344px] h-[548px]">
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
              src="/rectangle-715@2x.png"
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
          <div className="absolute top-[3635.34px] left-[740px] w-[344px] h-[548px]">
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
              src="/rectangle-716@2x.png"
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
          <div className="absolute top-[3635.34px] left-[0px] w-[344px] h-[548px]">
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
              src="/rectangle-714@2x.png"
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
          <div className="absolute top-[3635.34px] left-[370px] w-[344px] h-[548px]">
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
              src="/rectangle-79@2x.png"
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
          <div className="absolute top-[564px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-darkslategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[564px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-silver" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgoldenrod" />
          </div>
          <div className="absolute top-[564px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[564px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[1836px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-darkslategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[1836px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-silver" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgoldenrod" />
          </div>
          <div className="absolute top-[1836px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[1836px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[1196px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-darkcyan" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-brown" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[1196px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[1196px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-gray-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgray" />
          </div>
          <div className="absolute top-[1196px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-slategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-gray-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-linen" />
          </div>
          <div className="absolute top-[2928px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-darkslategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[2928px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-silver" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgoldenrod" />
          </div>
          <div className="absolute top-[2928px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[2928px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[4200px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-darkslategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[4200px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-silver" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgoldenrod" />
          </div>
          <div className="absolute top-[4200px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-steelblue-200" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[4200px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[3560px] left-[0px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-darkcyan" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-brown" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-slategray" />
          </div>
          <div className="absolute top-[3560px] left-[740px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-lightsteelblue" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-pink-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-indianred" />
          </div>
          <div className="absolute top-[3560px] left-[1110px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-linen" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-gray-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-darkgray" />
          </div>
          <div className="absolute top-[3560px] left-[370px] w-[101px] h-[27px]">
            <div className="absolute h-full w-[26.73%] top-[0%] right-[36.63%] bottom-[0%] left-[36.63%] bg-white box-border border-[2px] border-solid border-black" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[73.27%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-full w-[26.73%] top-[0%] right-[0%] bottom-[0%] left-[73.27%] bg-white" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[78.22%] bottom-[18.52%] left-[4.95%] bg-slategray" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[41.58%] bottom-[18.52%] left-[41.58%] bg-gray-100" />
            <div className="absolute h-[62.96%] w-[16.83%] top-[18.52%] right-[4.95%] bottom-[18.52%] left-[78.22%] bg-linen" />
          </div>
        </div>
        <div className="absolute top-[133px] left-[21px] w-[1878px] h-[467px] text-left text-lg text-black">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-[45.68%] top-[0%] right-[0%] bottom-[0%] left-[54.32%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-711@2x.png"
            />
            <div className="absolute h-full w-[72.79%] top-[0%] right-[27.21%] bottom-[0%] left-[0%] [background:linear-gradient(90deg,_#f6f8fc,_#f6f8fc_44.79%,_#f5f7fa_74.48%,_rgba(243,_239,_238,_0))]" />
          </div>
          <div className="absolute h-[11.99%] w-[9.32%] top-[71.31%] right-[76.36%] bottom-[16.7%] left-[14.32%] text-center">
            <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.5px] uppercase font-medium flex items-center justify-center">
              shop now
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[20.56%] left-[14.32%] text-37xl leading-[72px] uppercase font-medium">
            shoping without limits.
          </div>
          <div className="absolute h-[26.55%] w-[34.03%] top-[39.61%] left-[14.32%] text-6xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco. We will deliver your
            purchase anywhere!
          </div>
          <img
            className="absolute h-[21.73%] w-[32.11%] top-[16.27%] right-[51.6%] bottom-[61.99%] left-[16.29%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector7.svg"
          />
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

export default Catalog1;
