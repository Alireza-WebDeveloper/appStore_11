import LinkContainer from '@/app/lib/design/common/link-container';
import Text from '@/app/lib/design/common/text';

const Prompt = () => {
  return (
    <div className="flex justify-center gap-2 items-center">
      <Text className="text-sm text-gray-600">قبلاً ثبت نام کرده‌اید؟</Text>
      <LinkContainer
        href={'/auth/sign-in'}
        className="text-primary font-semibold"
      >
        وارد حساب کاربری شوید
      </LinkContainer>
    </div>
  );
};

export default Prompt;
