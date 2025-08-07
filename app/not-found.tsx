import LinkContainer from './lib/design/common/link-container';
import Text from './lib/design/common/text';
import Title from './lib/design/common/title';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <Title level={1} className="text-6xl font-bold text-gray-800">
          404
        </Title>
        <Title level={2} className="text-2xl text-gray-600 mt-4">
          صفحه مورد نظر یافت نشد
        </Title>
        <Text className="text-gray-500 mt-2">
          متاسفانه صفحه‌ای که به دنبالش هستید موجود نیست.
        </Text>
        <LinkContainer
          href={'/'}
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          بازگشت به صفحه اصلی
        </LinkContainer>
      </div>
    </div>
  );
}
