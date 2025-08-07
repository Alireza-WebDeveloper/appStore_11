export interface PriceRangeSliderProps {
  minRange: number;
  maxRange: number;
  initialMinValue: number;
  initialMaxValue: number;
  currency: 'toman' | 'rial';
  onChange?: (minValue: number, maxValue: number) => void;
  className?: string;
}

export interface RangeLabelsProps {
  maxRange: number;
  minRange: number;
  currency: 'toman' | 'rial';
}

export interface SliderLabelsProps {
  minPrice: number;
  maxPrice: number;
  calculatePosition: (value: number) => number;
}

export interface SliderThumbProps {
  position: number;
  onMouseDown: (e: React.MouseEvent) => void;
  onClick(e: React.MouseEvent): void;
}

export interface SliderTrackProps {
  minPrice: number;
  maxPrice: number;
  calculatePosition: (value: number) => number;
}
