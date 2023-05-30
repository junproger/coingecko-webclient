export interface Option {
  /** Key of item, using in scripts */
  category_id: string;
  /** Value of item, show to users */
  name: string;
}

export interface MultiDropdownProps {
  value: Option[];
  options: Option[];
  tabIndex?: number;
  multiChoose?: boolean;
  onChange: (value: Option[]) => void;
  pluralizeOptions: (value: Option[]) => string;
  placeHolder?: string;
  className?: string;
  disabled?: boolean;
}
