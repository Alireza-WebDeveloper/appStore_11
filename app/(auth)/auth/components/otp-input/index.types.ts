export interface OtpInputProps {
  value: string;
  onChange: (newCode: string) => void;
  length: number;
  errorMessage?: string;
}
