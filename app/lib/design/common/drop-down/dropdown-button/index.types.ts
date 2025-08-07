export interface DropDownButtonProps {
    isOpen: boolean;
    toggleDropdown: () => void;
    selectedLabel: string | null;
    placeholder: string;
    disabled: boolean;
    buttonClassName: string;
  }
  