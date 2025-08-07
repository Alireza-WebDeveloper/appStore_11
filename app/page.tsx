'use client';

import BrandSlider from './components/brands-slider';
import DiscountProduct from './components/discount-product';
import FeatureProduct from './components/feature-product';
import MainContent from './components/main-content';
import NewestProduct from './components/newest-product';
import OverviewProduct from './components/overview-product';
import RatingProduct from './components/rating-product';
import UserComments from './components/user-comments';

import SectionSpace from './lib/design/common/section-space';

const Page = () => {
  return (
    <SectionSpace className="mt-5 flex flex-col gap-4">
      <MainContent />
      <FeatureProduct />
      <BrandSlider />
      <NewestProduct />
      <DiscountProduct />
      <OverviewProduct />
      <RatingProduct />
      <UserComments />
    </SectionSpace>
  );
};

export default Page;
