interface Props {
  isFetching: boolean;
  error: Error | null;
  children: React.ReactNode;
}

export default function ThrowError({ isFetching, error, children }: Props) {
  if (error && !isFetching) {
    throw error;
  }

  return <>{children}</>;
}
