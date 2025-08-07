import SectionSpace from '@/app/lib/design/common/section-space';
import Product from './components/product';
import TechnicalSpecifications from './components/technical-specifications';
import RelatedProducts from './components/related-product';
import Comments from './components/comments';
 

const Page = () => {
  return (
    <SectionSpace className="flex flex-col gap-20 p-2">
      <Product />
      <TechnicalSpecifications />
      <RelatedProducts />
      <Comments/>
    </SectionSpace>
  );
};

export default Page;
