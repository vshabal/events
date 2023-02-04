type Props = {
  children?: JSX.Element;
};

export function Layout({ children }: Props) {
  return <div>{children ? children : null}</div>;
}
