'use client';

import { EmailIcon } from '@/app/lib/design/common/icons';
import EmailContact from './email';
import PhoneContact from './phone';

const Page = () => {
  return (
    <main className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md flex flex-col gap-5">
      <EmailContact />
      <PhoneContact />
    </main>
  );
};

export default Page;
