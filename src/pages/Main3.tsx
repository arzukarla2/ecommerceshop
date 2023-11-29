import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import SignInPopUp1 from "../components/SignInPopUp1";
import MiniCart1 from "../components/MiniCart1";
import Search1 from "../components/Search1";

const Main3: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSignInPopUp1Open, setSignInPopUp1Open] = useState(false);
  const [isMiniCart1Open, setMiniCart1Open] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);

  const onMain3Click = useCallback(() => {
    navigate("/catalog-1");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onComponent2Container4Click = useCallback(() => {
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

  const onGroupClick = useCallback(() => {
    navigate("/catalog-filter-1");
  }, [navigate]);

  return (
    <>
      <div
        className="relative bg-white w-full h-[7039px] overflow-hidden cursor-pointer text-left text-xs text-black font-oswald-medium-14"
        onClick={onMain3Click}
      >
        <div className="absolute top-[6512px] left-[0px] w-[1920px] h-[527px] text-lg text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-[0.19%] w-[97.86%] top-[85.67%] right-[1.07%] bottom-[14.14%] left-[1.07%] box-border border-t-[1px] border-solid border-gray-2" />
          <b className="absolute h-[3.98%] w-[13.07%] top-[88.43%] left-[1.09%] text-xs leading-[27px] uppercase inline-block font-roboto-regular-14-aa">
            © 2019. Crisp theme Developed by Belvg
          </b>
          <div className="absolute h-[8.35%] w-[5.33%] top-[11.95%] right-[93.58%] bottom-[79.7%] left-[1.09%] text-center text-xl">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[81.82%] w-[91.49%] top-[6.82%] right-[3.19%] bottom-[11.36%] left-[5.32%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-[79.55%] w-[90.43%] top-[0%] right-[0%] bottom-[20.45%] left-[9.57%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-[79.55%] w-[90.43%] top-[20.45%] right-[9.57%] bottom-[0%] left-[0%] bg-gray-500 box-border border-[3px] border-solid border-white" />
              <div className="absolute h-[72.73%] w-[90.43%] top-[22.73%] left-[0%] tracking-[2px] uppercase font-medium flex items-center justify-center">
                crisp
              </div>
            </div>
            <img
              className="absolute h-[86.36%] w-[92.96%] top-[0%] right-[0.13%] bottom-[13.64%] left-[6.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector6.svg"
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
                src="/instagramphotocamerasymbol3.svg"
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
          className="absolute top-[136px] left-[21px] w-[1878px] h-[800px] object-cover"
          alt=""
          src="/image1@2x.png"
        />
        <div className="absolute top-[2152px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          Shop Some Wear:
        </div>
        <div className="absolute top-[886px] left-[1796px] w-[50px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[50px] h-[50px]" />
          <img
            className="absolute top-[17.29px] left-[19.59px] w-[9.19px] h-[15.56px]"
            alt=""
            src="/vector15.svg"
          />
        </div>
        <div className="absolute top-[936px] left-[1899px] w-[50px] h-[50px] [transform:_rotate(-180deg)] [transform-origin:0_0]">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[50px] h-[50px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[-32.85px] left-[-28.78px] w-[9.19px] h-[15.56px]"
            alt=""
            src="/vector16.svg"
          />
        </div>
        <div className="absolute top-[2247px] left-[21px] w-[114px] h-[22px] text-sm text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
            NEW Arivals
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
        <div className="absolute top-[2205px] left-[21px] w-[114px] h-[22px] text-sm text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[95px] h-[22px]">
            Best sellers
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
        <div className="absolute top-[2289px] left-[21px] w-[114px] h-[22px] text-sm font-roboto-regular-14-aa">
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
            TOP women
          </div>
        </div>
        <div className="absolute top-[2373px] left-[21px] w-[191px] h-[22px] text-sm text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[172px] h-[22px]">
            Collection: spring
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
        <div className="absolute top-[2331px] left-[21px] w-[177px] h-[22px] text-sm text-black-2 font-roboto-regular-14-aa">
          <div className="absolute top-[0px] left-[19px] leading-[68px] uppercase flex items-center w-[158px] h-[22px]">
            Collection: Summer
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
        <div className="absolute top-[2415px] left-[21px] w-[114px] h-[22px] text-sm text-black-2 font-roboto-regular-14-aa">
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
            TREnding
          </div>
        </div>
        <div className="absolute top-[2134px] left-[815px] w-[344px] h-[548px]">
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
        <div className="absolute top-[2134px] left-[1185px] w-[344px] h-[548px]">
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
        <div className="absolute top-[2134px] left-[1555px] w-[344px] h-[548px]">
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
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium text-main-color-2 flex items-center">
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
        <div className="absolute top-[2730px] left-[1555px] w-[344px] h-[548px]">
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
        <div className="absolute top-[2730px] left-[1185px] w-[344px] h-[548px]">
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
        <div className="absolute top-[2730px] left-[445px] w-[344px] h-[548px]">
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
        <div className="absolute top-[2730px] left-[815px] w-[344px] h-[548px]">
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
          <div className="absolute h-[97.26%] w-full top-[2.74%] right-[0%] bottom-[0%] left-[0%] text-sm text-gray-1">
            <div className="absolute h-[2.06%] w-[17.44%] top-[97.37%] right-[50%] bottom-[0.56%] left-[32.56%]">
              <div className="absolute h-full w-[98.33%] top-[0%] left-[1.67%] uppercase flex items-center">
                119,00 EUR
              </div>
              <div className="absolute h-[9.09%] w-full top-[54.55%] right-[0%] bottom-[36.36%] left-[0%] bg-gray-1" />
            </div>
            <div className="absolute h-[4.13%] w-full top-[95.87%] left-[0%] text-3xl uppercase font-medium text-main-color-2 flex items-center">
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
        <div className="absolute top-[4054px] left-[1546px] w-[353px] h-[548px]">
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
        <div className="absolute top-[4054px] left-[1165px] w-[354px] h-[548px]">
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
        <div className="absolute top-[4054px] left-[405px] w-[354px] h-[548px]">
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
        <div
          className="absolute top-[4054px] left-[21px] w-[353px] h-[548px] cursor-pointer"
          onClick={openFrame}
        >
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
        <div className="absolute top-[4054px] left-[785px] w-[354px] h-[548px]">
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
        <div className="absolute top-[3998px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          Featured Items
        </div>
        <div className="absolute top-[4737px] left-[1546px] w-[353px] h-[548px]">
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
            src="/rectangle-723@2x.png"
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
        <div className="absolute top-[4737px] left-[1165px] w-[354px] h-[548px]">
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
        <div className="absolute top-[4737px] left-[405px] w-[354px] h-[548px]">
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
            src="/rectangle-724@2x.png"
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
        <div className="absolute top-[4737px] left-[21px] w-[353px] h-[548px]">
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
            src="/rectangle-725@2x.png"
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
        <div className="absolute top-[4737px] left-[785px] w-[354px] h-[548px]">
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
            src="/rectangle-726@2x.png"
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
        <div className="absolute top-[4681px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
          Most Popular
        </div>
        <div className="absolute top-[2133.5px] left-[414.5px] box-border w-px h-[1297px] border-r-[1px] border-solid border-divider" />
        <div className="absolute top-[4028px] left-[1899px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.76%] w-[17.85%] top-[-65.52%] right-[139.52%] bottom-[134.76%] left-[-57.38%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector17.svg"
          />
        </div>
        <div className="absolute top-[4670px] left-[1815px] w-10 h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.93%] w-[18.12%] top-[34.67%] right-[42.53%] bottom-[34.39%] left-[39.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector18.svg"
          />
        </div>
        <div className="absolute top-[4710px] left-[1899px] w-10 h-10 [transform:_rotate(-180deg)] [transform-origin:0_0]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.93%] w-[18.12%] top-[-65.61%] right-[139.35%] bottom-[134.67%] left-[-57.47%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector17.svg"
          />
        </div>
        <img
          className="absolute top-[3454px] left-[689px] w-[1210px] h-[467px] object-cover"
          alt=""
          src="/rectangle-7110@2x.png"
        />
        <div className="absolute top-[3454px] left-[21px] [background:linear-gradient(90deg,_#ddebf1,_#d3e5ee_42.71%,_#c8deec_69.27%,_rgba(255,_255,_255,_0))] w-[1357px] h-[467px]" />
        <div className="absolute top-[3787px] left-[290px] w-[175px] h-14 text-center text-lg">
          <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
            shop now
          </div>
          <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[3550px] left-[290px] text-37xl leading-[72px] uppercase font-medium">
          shoping without limits.
        </div>
        <div className="absolute top-[3639px] left-[290px] text-6xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block w-[639px] h-[124px]">
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco. We will deliver your purchase
          anywhere!
        </div>
        <img
          className="absolute top-[3530px] left-[327px] w-[603px] h-[101.5px]"
          alt=""
          src="/vector7.svg"
        />
        <div className="absolute top-[5403px] left-[21px] w-[1798px] h-[363px] text-37xl">
          <div className="absolute top-[21px] left-[1156px] leading-[72px] uppercase font-medium [-webkit-text-stroke:2px_#000]">
            EXPLORE THE BEST OF YOU.
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[1060px] h-[363px] object-cover"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[1060px] h-[363px] object-cover"
            alt=""
            src="/image-21@2x.png"
          />
          <img
            className="absolute top-[-1px] left-[1170px] w-[627px] h-[115.5px]"
            alt=""
            src="/vector19.svg"
          />
          <div className="absolute top-[234px] left-[1156px] w-[175px] h-14 text-center text-lg">
            <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
              shop now
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[127px] left-[1158px] text-6xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block w-[640px] h-[124px]">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco.
          </div>
        </div>
        <div className="absolute top-[5848px] left-[0px] w-[1920px] h-[564px] text-base">
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[564px]" />
          <div className="absolute top-[46px] left-[21px] text-5xl leading-[68px] flex items-center w-[182px] h-[22px]">
            Blog
          </div>
          <div className="absolute top-[98px] left-[21px] w-[447px] h-[420px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-[29.52%] w-[89.19%] top-[38.33%] left-[5.41%] tracking-[0.01em] leading-[24px] font-roboto-light inline-block">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </div>
            <img
              className="absolute h-[0.71%] w-[89.19%] top-[91.07%] right-[5.41%] bottom-[8.21%] left-[5.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-21.svg"
            />
            <div className="absolute h-[8.57%] w-[90.83%] top-[91.43%] left-[5.37%] text-smi leading-[37px] font-light text-gray-2 flex items-center">
              21 January 2018 by guido
            </div>
            <div className="absolute h-[14.76%] w-[90.77%] top-[15.95%] left-[5.41%] text-7xl flex items-center">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </div>
            <div className="absolute h-[5.24%] w-[79.5%] top-[5.71%] left-[5.41%] text-lg uppercase font-semibold text-gray-4 flex items-center">
              Article
            </div>
          </div>
          <div className="absolute top-[98px] left-[498px] w-[447px] h-[420px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-[29.52%] w-[89.19%] top-[38.33%] left-[5.41%] tracking-[0.01em] leading-[24px] font-roboto-light inline-block">{`When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. `}</div>
            <img
              className="absolute h-[0.71%] w-[89.19%] top-[91.07%] right-[5.41%] bottom-[8.21%] left-[5.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-21.svg"
            />
            <div className="absolute h-[8.57%] w-[90.83%] top-[91.43%] left-[5.37%] text-smi leading-[37px] font-light text-gray-2 flex items-center">
              21 January 2018 by guido
            </div>
            <div className="absolute h-[14.76%] w-[90.77%] top-[15.95%] left-[5.41%] text-7xl flex items-center">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </div>
            <div className="absolute h-[5.24%] w-[79.5%] top-[5.71%] left-[5.41%] text-lg uppercase font-semibold text-gray-4 flex items-center">
              TIPS
            </div>
          </div>
          <div className="absolute top-[98px] left-[975px] w-[447px] h-[420px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-[29.52%] w-[89.19%] top-[38.33%] left-[5.41%] tracking-[0.01em] leading-[24px] font-roboto-light inline-block">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </div>
            <img
              className="absolute h-[0.71%] w-[89.19%] top-[91.07%] right-[5.41%] bottom-[8.21%] left-[5.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-22.svg"
            />
            <div className="absolute h-[8.57%] w-[90.83%] top-[91.43%] left-[5.37%] text-smi leading-[37px] font-light text-gray-2 flex items-center">
              21 January 2018 by guido
            </div>
            <div className="absolute h-[14.76%] w-[90.77%] top-[15.95%] left-[5.41%] text-7xl flex items-center">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </div>
            <div className="absolute h-[5.24%] w-[79.5%] top-[5.71%] left-[5.41%] text-lg uppercase font-semibold text-gray-4 flex items-center">
              TIPS
            </div>
          </div>
          <div className="absolute top-[98px] left-[1452px] w-[447px] h-[420px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute h-[29.52%] w-[89.19%] top-[38.33%] left-[5.41%] tracking-[0.01em] leading-[24px] font-roboto-light inline-block">{`When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. `}</div>
            <img
              className="absolute h-[0.71%] w-[89.19%] top-[91.07%] right-[5.41%] bottom-[8.21%] left-[5.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-21.svg"
            />
            <div className="absolute h-[8.57%] w-[90.83%] top-[91.43%] left-[5.37%] text-smi leading-[37px] font-light text-gray-2 flex items-center">
              21 January 2018 by guido
            </div>
            <div className="absolute h-[14.76%] w-[90.77%] top-[15.95%] left-[5.41%] text-7xl flex items-center">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </div>
            <div className="absolute h-[5.24%] w-[79.5%] top-[5.71%] left-[5.41%] text-lg uppercase font-semibold text-gray-4 flex items-center">
              Article
            </div>
          </div>
        </div>
        <div className="absolute top-[955px] left-[21px] w-[1878px] h-[221px] text-center text-5xl">
          <img
            className="absolute top-[22px] left-[-1px] w-[1880px] h-[200px]"
            alt=""
            src="/rectangle-727.svg"
          />
          <div className="absolute top-[0px] left-[636px] leading-[68px] uppercase flex items-center justify-center w-[606px] h-[45px]">
            chose your brand
          </div>
          <img
            className="absolute top-[51px] left-[11px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame1.svg"
          />
          <img
            className="absolute top-[51px] left-[281px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame2.svg"
          />
          <img
            className="absolute top-[51px] left-[551px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame3.svg"
          />
          <img
            className="absolute top-[51px] left-[821px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame4.svg"
          />
          <img
            className="absolute top-[51px] left-[1091px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame5.svg"
          />
          <img
            className="absolute top-[51px] left-[1361px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame6.svg"
          />
          <img
            className="absolute top-[51px] left-[1631px] w-[235px] h-[141px] overflow-hidden"
            alt=""
            src="/frame7.svg"
          />
        </div>
        <div className="absolute top-[183px] left-[255px] w-[1458px] h-[709px] text-center text-lg">
          <div className="absolute top-[493px] left-[0px] w-[175px] h-14">
            <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
              shop now
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[157px] left-[0px] text-[86px] leading-[96px] uppercase font-semibold text-left [-webkit-text-stroke:2px_#000]">
            <p className="m-0">SUMMER SALE</p>
            <p className="m-0">
              <span>{`GEt `}</span>30% OFF
            </p>
            <p className="m-0">On all dress.</p>
          </div>
          <img
            className="absolute top-[29px] left-[640px] w-[464px] h-[671px] object-cover"
            alt=""
            src="/image-22@2x.png"
          />
          <img
            className="absolute top-[-14px] left-[970px] w-[522px] h-[757px] object-cover"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <div className="absolute top-[892px] left-[49px] w-[100px] h-[22px]">
          <div className="absolute top-[2px] left-[0px] box-border w-[18px] h-[18px] border-[1px] border-solid border-gray-1" />
          <div className="absolute top-[2px] left-[56px] box-border w-[18px] h-[18px] border-[1px] border-solid border-gray-1" />
          <div className="absolute top-[2px] left-[82px] box-border w-[18px] h-[18px] border-[1px] border-solid border-gray-1" />
          <div className="absolute top-[0px] left-[26px] bg-black box-border w-[22px] h-[22px] border-[1px] border-solid border-black" />
        </div>
        <div className="absolute top-[3341px] left-[1102px] w-[140px] h-[50.33px] text-center text-sm text-gray-1">
          <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[140px] h-[50.33px]">
            Load more
          </div>
          <div className="absolute top-[0px] left-[0px] box-border w-[140px] h-[50.33px] border-[2px] border-solid border-divider" />
        </div>
        <div className="absolute top-[1670px] left-[21px] bg-divider w-[924px] h-[434px]" />
        <div className="absolute top-[1206px] left-[21px] w-[924px] h-[434px] text-29xl">
          <div className="absolute top-[0px] left-[0px] bg-divider w-[924px] h-[434px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[448px] h-[434px] object-cover"
            alt=""
            src="/image-31@2x.png"
          />
          <div className="absolute top-[434px] left-[924px] [background:linear-gradient(-90deg,_rgba(241,_239,_240,_0),_#f1f0f0_10.94%,_#f3f0ef)] w-[545px] h-[434px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          <div className="absolute top-[82px] left-[491px] w-[369px] h-[269px]">
            <div className="absolute top-[0px] left-[0px] leading-[62px] uppercase font-semibold">
              <p className="m-0">{`choosе `}</p>
              <p className="m-0">your look</p>
            </div>
            <div className="absolute top-[213px] left-[0px] w-[175px] h-14 text-center text-lg">
              <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
                see offers
              </div>
              <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
            </div>
            <div className="absolute top-[131px] left-[0px] text-3xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block w-[369px] h-[31px]">
              See our clothing collections
            </div>
          </div>
        </div>
        <img
          className="absolute top-[1670px] left-[388px] w-[557px] h-[434px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="absolute top-[1670px] left-[21px] [background:linear-gradient(90deg,_#f7e0d5,_#f3dcd2_83.85%,_rgba(243,_220,_210,_0.14))] w-[448px] h-[434px]" />
        <div className="absolute top-[1785px] left-[115px] w-[369px] h-[204px] text-29xl">
          <div className="absolute top-[0px] left-[0px] leading-[62px] uppercase font-semibold">
            brand new style
          </div>
          <div className="absolute top-[148px] left-[0px] w-[175px] h-14 text-center text-lg">
            <div className="absolute top-[0px] left-[0px] tracking-[0.5px] uppercase font-medium flex items-center justify-center w-[175px] h-14">
              see offers
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
          </div>
          <div className="absolute top-[67px] left-[0px] text-3xl tracking-[0.01em] leading-[37px] font-roboto-light inline-block w-[369px] h-[31px]">
            Popular clothing brands
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[1920px] h-[115px] cursor-pointer text-sm text-white"
          onClick={onComponent2Container4Click}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
          <div className="absolute h-[38.26%] w-[4.9%] top-[30.43%] right-[94.01%] bottom-[31.3%] left-[1.09%] text-center text-xl">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[81.82%] w-[91.49%] top-[6.82%] right-[3.19%] bottom-[11.36%] left-[5.32%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-[79.55%] w-[90.43%] top-[0%] right-[0%] bottom-[20.45%] left-[9.57%] bg-black box-border hidden border-[3px] border-solid border-white" />
              <div className="absolute h-[79.55%] w-[90.43%] top-[20.45%] right-[9.57%] bottom-[0%] left-[0%] bg-gray-500 box-border border-[3px] border-solid border-white" />
              <div className="absolute h-[72.73%] w-[90.43%] top-[22.73%] left-[0%] tracking-[2px] uppercase font-medium flex items-center justify-center">
                crisp
              </div>
            </div>
            <img
              className="absolute h-[86.36%] w-[93.09%] top-[0%] right-[0%] bottom-[13.64%] left-[6.91%] max-w-full overflow-hidden max-h-full"
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
              src="/group-37.svg"
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
        <div className="absolute top-[1206px] left-[974px] w-[925px] h-[898px] text-[96px] text-gray-200">
          <img
            className="absolute top-[0px] left-[86px] w-[839px] h-[898px] object-cover"
            alt=""
            src="/image-5@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#e0ded3,_#e0ddd5_86.82%,_#e0ddd5)] w-[225px] h-[898px]" />
          <div className="absolute top-[430px] left-[86px] leading-[110px] uppercase font-semibold">
            <p className="m-0">Up to</p>
            <p className="m-0">40% off</p>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[739px] left-[86px] w-[175px] h-14"
            onClick={onGroupClick}
          >
            <div className="absolute top-[0px] left-[0px] text-lg tracking-[0.5px] uppercase font-medium font-oswald-medium-14 text-black text-center flex items-center justify-center w-[175px] h-14">
              shop now
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[175px] h-14 border-[2px] border-solid border-black" />
          </button>
          <div className="absolute top-[657px] left-[86px] text-6xl tracking-[0.01em] leading-[37px] font-roboto-light text-black inline-block w-[369px] h-[31px]">
            Special offers and great deals
          </div>
        </div>
        <img
          className="absolute top-[318px] left-[303.5px] w-[497.5px] h-[101.5px]"
          alt=""
          src="/vector20.svg"
        />
        <div className="absolute top-[2134px] left-[445px] w-[344px] h-[548px]">
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
        <div className="absolute top-[6412px] left-[0px] w-[1920px] h-[100px] text-sm">
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
        <div className="absolute top-[3988px] left-[1815px] w-10 h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-400 box-border border-[2px] border-solid border-divider" />
          <img
            className="absolute h-[30.93%] w-[18.12%] top-[34.67%] right-[42.53%] bottom-[34.39%] left-[39.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector18.svg"
          />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent1 onClose={closeFrame} />
        </PortalPopup>
      )}
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

export default Main3;
