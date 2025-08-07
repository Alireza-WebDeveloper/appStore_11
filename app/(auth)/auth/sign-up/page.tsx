import SectionSpace from '@/app/lib/design/common/section-space';

import SignUp from './components';

const Page = () => {
  return (
    <SectionSpace className="relative rounded-xl shadow-lg p-6 max-w-lg w-full">
      <SignUp />
    </SectionSpace>
  );
};

export default Page;
