type HrefObject = {
  pathname: string;
  query?: Record<string, string | string[] | undefined>;
};

export type Props = {
  href?: string | null | HrefObject;
  children: React.ReactNode;
  className?: string;
  id?: string;
};
