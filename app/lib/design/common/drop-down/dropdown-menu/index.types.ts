export interface Option {
  value: string | number;
  label: string;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  options: Option[];
  handleSelect: (option: Option) => void;
  emptyMessage: string;
  dropdownClassName: string;
}
