import SectionSpace from '@/app/lib/design/common/section-space';
import SignIn from './components';

const Page = () => {
  return (
    <SectionSpace className="relative rounded-xl shadow-lg p-6 max-w-xl w-full">
      <SignIn />
    </SectionSpace>
  );
};

export default Page;
