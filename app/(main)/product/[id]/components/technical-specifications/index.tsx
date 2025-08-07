import SectionTitle from '@/app/lib/design/common/section-title';
import React from 'react';
import { Props } from './index.types';
import TechnicalList from './technical-list';

const TechnicalSpecifications: React.FC<Props> = () => {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="مشخصات فنی محصول" />
      <TechnicalList />
    </section>
  );
};

export default TechnicalSpecifications;
