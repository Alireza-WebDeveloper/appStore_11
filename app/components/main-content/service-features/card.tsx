import ImgContainer from '@/app/lib/design/common/img-container';
import Text from '@/app/lib/design/common/text';

interface Props {
  src: string;
  title: string;
  subtitle: string;
  hasBorder?: boolean;
}

const CardItem: React.FC<Props> = ({
  src,
  title,
  subtitle,
  hasBorder = true,
}) => {
  return (
    <section className="flex items-center gap-4">
      <ImgContainer className={'w-20 h-20'} src={src} />
      <section className="flex flex-col gap-2">
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </section>
      {hasBorder && (
        <span className="w-[1px] h-[90px] bg-gray-400 hidden sm:block" />
      )}
    </section>
  );
};

export default CardItem;
