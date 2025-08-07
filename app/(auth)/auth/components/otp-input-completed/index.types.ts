export interface OtpInputProps {
  value: string;
  onChange: (newCode: string) => void;
  length: number;
  onComplete?: () => void;
  errorMessage?: string;
}
