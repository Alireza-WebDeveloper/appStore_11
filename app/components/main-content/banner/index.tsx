import Button from '@/app/lib/design/common/button';
import Text from '@/app/lib/design/common/text';
import Title from '@/app/lib/design/common/title';
import { cn } from '@/app/lib/utils/cn';

interface Props {
  className?: string;
}

const Banner: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#0e7490] to-[#2dd4bf] text-white shadow-2xl hover:scale-[1.01] transition-transform duration-500 ease-in-out',
        className
      )}
    >
      {/* تزئینات پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-ping" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* محتوای بنر */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl">
        {/* برچسب بالا */}
        <div className="inline-block bg-yellow-400 text-black text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-5 shadow-md">
          اطلاع‌رسانی
        </div>

        {/* عنوان */}
        <Title
          level={1}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg flex items-center justify-center gap-2"
        >
          <span className="text-yellow-300">تخفیف محصولات</span>
          <span className="animate-bounce text-2xl">🔥</span> شروع شد!
        </Title>

        {/* توضیح */}
        <Text
          as="p"
          className="text-lg md:text-2xl mt-6 text-white/90 drop-shadow-sm"
        >
          تا ۵۰٪ تخفیف روی برندهای منتخب، فقط برای مدت محدود. همین الان فرصت
          خرید ویژه رو از دست نده!
        </Text>

        {/* تایمر نمونه */}
        <p className="mt-4 text-sm md:text-base text-white/70">
          زمان باقی‌مانده تا پایان تخفیف:{' '}
          <span className="font-bold text-yellow-300">02:14:36</span>
        </p>

        {/* دکمه */}
        <div className="mt-8 flex justify-center">
          <Button
            aria-label="product-show"
            className="bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            مشاهده محصولات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
