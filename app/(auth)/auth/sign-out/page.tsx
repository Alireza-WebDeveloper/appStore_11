'use client';
import React from 'react';

import SectionSpace from '@/app/lib/design/common/section-space';
import LinkContainer from '@/app/lib/design/common/link-container';
import { Button } from '@nextui-org/react';
import { useSignOut } from '@/app/lib/hooks/auth';

const SignOut = () => {
  const { mutate: signOutMutate } = useSignOut();
  return (
    <SectionSpace className="relative flex items-center justify-center max-w-lg ">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          آیا از خروج مطمئن هستید؟
        </h2>
        <p className="text-gray-600 mb-8">
          پس از خروج، تمام پیشرفت‌های شما از دست خواهد رفت. مطمئن هستید که
          می‌خواهید خارج شوید؟
        </p>
        <div className="flex justify-center gap-6">
          <LinkContainer
            href={'/'}
            className="w-32 rounded-lg py-2 transition-transform duration-300 ease-in-out hover:scale-105 bg-primary-500 text-white"
          >
            لغو
          </LinkContainer>
          <Button
            aria-label="sign-out"
            color="danger"
            onPress={() => signOutMutate()}
            className="w-32 rounded-lg py-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            خروج
          </Button>
        </div>
      </div>
    </SectionSpace>
  );
};

export default SignOut;
