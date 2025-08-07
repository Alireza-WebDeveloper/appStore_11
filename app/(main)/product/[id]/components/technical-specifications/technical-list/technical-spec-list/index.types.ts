import { TechnicalSpecificationsState } from "@/app/lib/hooks/product/index.types";

 

export interface Props {
  specifications: TechnicalSpecificationsState[];
  showMore: boolean;
  onToggleShowMore(): void;
}
