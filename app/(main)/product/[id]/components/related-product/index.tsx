import React from 'react';
import { Props } from './index.types';
import SectionTitle from '@/app/lib/design/common/section-title';
import RelatedList from './related-list';

const RelatedProducts: React.FC<Props> = () => {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="محصولات مرتبط" />
      <RelatedList />
    </section>
  );
};

export default RelatedProducts;
