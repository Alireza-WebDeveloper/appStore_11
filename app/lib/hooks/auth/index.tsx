import { useMutation, useQuery } from '@tanstack/react-query';
import { getMe, signIn, signUp, verifyCode } from '../../services/auth';

import useSignInStore from '../../store/sign-in';
import {
  deleteCookie,
  setCookieWithExactDate,
} from '../../utils/document.cookies';
import { SignUpSchema } from '../../schema/sign-up';
import toast from 'react-hot-toast';
import { SignInProps, VerifyProps } from './index.types';
import { useToastify } from '../global/toast-notify';

const useSignIn = () => {
  const { setStep, setExpiresAt } = useSignInStore();
  return useMutation({
    mutationFn: (data: SignInProps) => {
      return signIn(data);
    },
    onSuccess: (response) => {
      //
      setExpiresAt(response.data.expiresAt);
      setStep('verify-code');
      console.log(response);
    },
    onError: (error) => {
      //
    },
  });
};

const useVerifyCode = () => {
  const { setStep } = useSignInStore();
  return useMutation({
    mutationFn: (data: VerifyProps) => {
      return verifyCode(data);
    },
    onSuccess: ({
      accessToken,
      accessTokenExpire,
      refreshToken,
      refreshTokenExpire,
    }) => {
      setCookieWithExactDate('access', accessToken, accessTokenExpire);
      setCookieWithExactDate('refresh', refreshToken, refreshTokenExpire);
      // setStep('successfully');
      window.location.href = '/';
    },
    onError: (error) => {
      //
    },
  });
};

const useFetchProfile = () => {
  return useQuery(['Profile'], {
    queryFn: () => {
      return getMe();
    },
  });
};

const useSignOut = () => {
  const mutate = () => {
    deleteCookie('access');
    deleteCookie('refresh');
    window.location.href = '/';
  };

  return { mutate };
};

export const useSignUp = () => {
  const { OpenToastify } = useToastify();
  return useMutation({
    mutationFn: (data: SignUpSchema) => {
      return signUp(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      window.location.href = '/auth/sign-in';
    },
    onError: () => {
      //
    },
  });
};

export { useSignIn, useVerifyCode, useFetchProfile, useSignOut };
