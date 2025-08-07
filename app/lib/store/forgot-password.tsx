import { create } from 'zustand';

type StepState =
  | 'send-email'
  | 'verify-code'
  | 'resetPassword'
  | 'successfully';

interface ForgotPasswordStoreState {
  email: string;
  code: string;
  step: StepState;
  expiresAt: string;
  setEmail(value: string): void;
  setStep(value: StepState): void;
  setCode(value: string): void;
  setExpiresAt(value: string): void;
}

const useForgotPasswordStore = create<ForgotPasswordStoreState>((set) => ({
  email: '',
  code: '',
  step: 'send-email',
  expiresAt: '',
  setStep: (value: StepState) => set({ step: value }),
  setEmail: (value: string) => set({ email: value }),
  setCode: (value: string) => set({ code: value }),
  setExpiresAt: (value: string) => set({ expiresAt: value }),
}));

export default useForgotPasswordStore;
