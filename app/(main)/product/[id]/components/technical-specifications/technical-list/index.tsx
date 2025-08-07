'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useGetProductById } from '@/app/lib/hooks/product';
import Text from '@/app/lib/design/common/text';
import Animation from '@/app/lib/design/common/animation';

import TechnicalSpecList from './technical-spec-list';
import { getProductById } from '@/app/lib/services/product';

const TechnicalList = () => {
  // !! Get Product By Id Params
  const param = useParams();
  const id = param.id;
  const { data } = useGetProductById({ id: String(id) });
  const product = data?.data.product;

  // !! State
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white p-6 rounded-lg">
      {product && (
        <TechnicalSpecList
          specifications={product.technicalSpecifications}
          showMore={showMore}
          onToggleShowMore={() => setShowMore((prev) => !prev)}
        />
      )}
    </section>
  );
};

export default TechnicalList;
