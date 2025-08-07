export interface DropDownLineProps {
    isOpen: boolean;
    toggleDropdown: () => void;
    selectedLabel: string | null;
    placeholder: string;
    disabled: boolean;
  }
  