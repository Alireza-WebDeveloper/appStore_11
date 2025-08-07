export interface BudgetSliderProps {
  minValue?: number;
  maxValue?: number;
  step?: number;
  value: number[];
  onChange: (val: number[]) => void;
  label?: string;
  className?: string;
}
