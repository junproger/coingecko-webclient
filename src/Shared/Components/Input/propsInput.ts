export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  disabled?: boolean | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}
