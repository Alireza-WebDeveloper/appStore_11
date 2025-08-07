import { ItemProps } from './index.types';
import Text from '@/app/lib/design/common/text';
import Title from '@/app/lib/design/common/title';
import { CommentIcon } from '@/app/lib/design/common/icons';

const Item: React.FC<ItemProps> = ({ name, description }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <section className="flex gap-1 items-start">
        <CommentIcon />
        <div className="flex flex-col gap-2">
          <Title level={4} className="text-teal-600 font-semibold text-lg">
            {name}
          </Title>
        </div>
      </section>
      <Text className="mt-4 text-gray-600 text-base">{description}</Text>
    </section>
  );
};

export default Item;
