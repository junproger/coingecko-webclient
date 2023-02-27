export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export interface LoaderProps {
  loading?: boolean | undefined;
  size?: LoaderSize;
  className?: string;
}
