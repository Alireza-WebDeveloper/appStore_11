import api from '..';
import {
  GetMeResponse,
  SignInProps,
  SignInResponse,
  VerifyProps,
  VerifyResponse,
} from '../../hooks/auth/index.types';
import { SignUpSchema } from '../../schema/sign-up';

const signIn = async (data: SignInProps) => {
  const response = await api.post<SignInResponse>('/auth/signin', data);
  return response.data;
};

const signUp = async (data: SignUpSchema) => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

const verifyCode = async (data: VerifyProps) => {
  const response = await api.post<VerifyResponse>('/auth/verify-code', data);
  return response.data;
};

const getMe = async () => {
  const response = await api.get<GetMeResponse>('/auth/me');
  return response.data;
};

const getNewsAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  const response = await api.post('/auth/refresh-token', { refreshToken });
  return response.data;
};

export { signIn, verifyCode, getMe, signUp, getNewsAccessToken };
