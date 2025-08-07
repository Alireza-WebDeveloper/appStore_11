export interface Option {
  value: string | number;
  label: string;
}

export interface DropDownProps {
  options: Option[];
  onSelect: (selectedOption: Option) => void;
  placeholder?: string;
  disabled?: boolean;
  selectedValue?: Option | null;
  emptyMessage?: string;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  variant?: 'button' | 'line';
}
