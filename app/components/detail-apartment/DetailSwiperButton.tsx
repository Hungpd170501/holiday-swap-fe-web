import { useSwiper } from "swiper/react";
import DetailApartmentBot from "./DetailApartmentBot";

interface SwiperButtonNextProps {
  children: React.ReactNode;
}

const DetailSwiperButton: React.FC<SwiperButtonNextProps> = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="bg-[#ededed] hover:bg-slate-300 rounded-full p-4"
    >
      {children}
    </div>
  );
};

export default DetailSwiperButton;
