import Image1 from '@/public/images/slider-img-2-min.png';
import Image2 from '@/public/images/slider-img-3-min-1.png';
import Image3 from '@/public/images/slider-img-4-min.png';
import Image4 from '@/public/images/slider-img-1-2-min.png';
import Card from './card';
const items = [
  {
    bg: 'bg-teal-400',
    title: ['جارو', 'برقی هوشمند'],
    buttonText: 'فروشگاه',
    image: Image1.src,
  },
  {
    bg: 'bg-orange-400',
    title: ['انواع', 'تلویزیون'],
    buttonText: 'فروشگاه',
    image: Image2.src,
  },
  {
    bg: 'bg-purple-400',
    title: ['انواع', 'دستگاه'],
    buttonText: 'آبمیوه گیری',
    image: Image3.src,
  },
  {
    bg: 'bg-gray-400',
    title: ['دستگاه', 'اسپرسو ساز'],
    buttonText: 'فروشگاه',
    image: Image4.src,
  },
];

const ProductCard = () => {
  return (
    <section className="flex justify-center gap-8 mt-5 md:flex-row  flex-wrap">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </section>
  );
};

export default ProductCard;
