import Text from '@/app/lib/design/common/text';
import React from 'react';
import { Props } from './index.types';

const TechnicalSpecItem: React.FC<Props> = ({ spec, isDimmed }) => {
  return (
    <div
      className={`px-6 py-4 rounded-md shadow-md flex items-center gap-3 transition-all duration-300 ${
        isDimmed ? 'opacity-60' : ''
      } hover:bg-blue-50`}
    >
      <Text size="md" weight="bold" className="text-gray-900">
        {spec.key}
      </Text>
      <Text size="md" className="text-gray-700">
        : {spec.value}
      </Text>
    </div>
  );
};

export default TechnicalSpecItem;
