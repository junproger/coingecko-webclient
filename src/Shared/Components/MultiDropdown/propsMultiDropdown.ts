export interface Option {
  /** Ключ варианта, используется в скриптах */
  key: string;
  /** Значение варианта, отображается на сайте */
  value: string;
}

export interface MultiDropdownProps {
  tabIndex?: number;
  value: Option[];
  options: Option[];
  onChange: (value: Option[]) => void;
  pluralizeOptions: (value: Option[]) => string;
  placeHolder?: string;
  className?: string;
  disabled?: boolean;
}
