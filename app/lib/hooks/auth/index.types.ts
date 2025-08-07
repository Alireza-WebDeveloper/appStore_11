// !! State

export interface UserState {
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

// !! Response
export interface GetMeResponse {
  message: string;
  user: UserState;
}

export interface SignInResponse {
  message: string;
  data: {
    code: string;
    expiresAt: string;
    expiresIn: number;
  };
}

export interface VerifyResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpire: string;
  refreshTokenExpire: string;
}

// !! Props
export interface SignInProps {
  email: string;
  password: string;
}

export interface VerifyProps extends SignInProps {
  code: string;
}
