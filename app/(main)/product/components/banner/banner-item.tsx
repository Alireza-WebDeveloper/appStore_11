import ImgContainer from '@/app/lib/design/common/img-container';
import Text from '@/app/lib/design/common/text';
import Title from '@/app/lib/design/common/title';
import { Button } from '@nextui-org/react';
import React from 'react';

interface Props {
  item: { src: string; title: string; description: string };
}

const BannerItem: React.FC<Props> = ({ item }) => {
  const { title, src, description } = item;

  return (
    <div className="relative h-[300px] lg:h-[550px] w-full overflow-hidden rounded-xl">
      {/* Background Image */}
      <ImgContainer
        src={src}
        className="absolute inset-0 w-full h-full object-fill  z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <div className="max-w-xl">
          <Title level={1} className="text-white font-bold mb-4">
            {title}
          </Title>
          <Text size="lg" className="text-white leading-relaxed mb-6">
            {description}
          </Text>
          <Button
            aria-label="btn-buy"
            size="lg"
            radius="lg"
            className="bg-gradient-to-r from-purple-400 to-teal-500 text-white font-bold hover:from-purple-500 hover:to-teal-600 transition"
            variant="shadow"
          >
            مشاهده و خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
