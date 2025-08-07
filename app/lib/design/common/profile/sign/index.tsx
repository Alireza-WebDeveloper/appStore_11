import { SignInSquareIcon } from '../../icons';
import LinkContainer from '../../link-container';
import Text from '../../text';

const Sign = () => {
  return (
    <LinkContainer href={'/auth/sign-in'}>
      <section className="flex items-center gap-2">
        <SignInSquareIcon width={30} height={30} />
        <Text as="span" className="text-white">
          ورود / ثبت نام
        </Text>
      </section>
    </LinkContainer>
  );
};

export default Sign;
