import ImgContainer from '@/app/lib/design/common/img-container';
import Image1 from '@/public/images/auth/fc2.png';

const Banner = () => {
  return (
    <ImgContainer src={Image1.src} className="w-[50vw] h-full object-cover" />
  );
};

export default Banner;
