import Banner from './banner';
import ServiceFeatures from './service-features';
import ProductCard from './product';
import CategorySideBar from './category-sidebar';
import React from 'react';

const MainContent = async () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid xl:grid-cols-5 grid-cols-1 gap-2">
        <CategorySideBar />
        <div className="flex flex-col col-span-3">
          <Banner />
          <ServiceFeatures />
        </div>
        <ProductCard />
      </div>
    </section>
  );
};

export default MainContent;
