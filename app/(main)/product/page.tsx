import SectionSpace from '@/app/lib/design/common/section-space';

import Banner from './components/banner';
import Main from './components/content';

const Page = () => {
  return (
    <SectionSpace className="flex flex-col gap-3">
      <Banner />
      <Main />
    </SectionSpace>
  );
};

export default Page;
