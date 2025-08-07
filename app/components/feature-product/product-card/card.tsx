import React from 'react';
import { Props } from './index.types';
import Text from '@/app/lib/design/common/text';
import Button from '@/app/lib/design/common/button';
import ImgContainer from '@/app/lib/design/common/img-container';

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div
      className="
        relative flex flex-col md:flex-row items-center gap-6
        p-6 rounded-2xl
        bg-white/20 backdrop-blur-md border border-white/30
        shadow-md hover:shadow-lg transition-shadow duration-300
        text-white max-w-md
      "
      style={{ minWidth: 320 }}
    >
      {/* متن و دکمه */}
      <section className="flex flex-col flex-1 gap-4 text-gray-900">
        {item.title.map((text, idx) => (
          <Text
            key={idx}
            as="p"
            size="xl"
            className="font-semibold tracking-wide"
          >
            {text}
          </Text>
        ))}

        <Button
          aria-label="btn-img"
          isOutline
          className="
            self-start border-gray-900 text-gray-900
            hover:bg-gray-900 hover:text-white
            px-6 py-2 rounded-lg font-semibold
            transition transform hover:scale-105 duration-300
          "
        >
          {item.buttonText}
        </Button>
      </section>

      {/* تصویر */}
      <div className="relative w-[220px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white/50">
        <ImgContainer
          className="w-full h-full object-contain"
          src={item.image}
          alt={item.title.join(' ')}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
};

export default Card;
