import { whatsapp, instagram, hell, call } from "../../assets";

function Footer({ fixed }: any) {
  return (
    <div
      className={`${
        fixed ? "fixed" : ""
      } w-full px-12 bottom-0 overflow-hidden`}
    >
      <div className="flex my-4 items-center justify-around  px-5 language_choose">
        <a href="https://wa.me/97126220095&text=Hello">
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a href="instagram://user?username=hatimaltai.ae">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.tiktok.com/@hatimaltai.ae">
          <img src={hell} alt="tiktok" />
        </a>
        <a href="tel:+97126220095">
          <img src={call} alt="call" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
