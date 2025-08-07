export interface InputContainerProps {
  value: string;
  onChangeValue(value: string): void;
  selectSize: 'sm' | 'md' | 'lg' | 'xl';
}
