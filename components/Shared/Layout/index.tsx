type Props = {
  title: string;
  children?: JSX.Element;
};

export function Layout({ children, title }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {children ? children : null}
    </div>
  );
}
