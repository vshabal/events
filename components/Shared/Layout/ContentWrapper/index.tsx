type Props = {
  children: JSX.Element | (JSX.Element | string)[];
};

function ContentWrapper({ children }: Props) {
  return <main>{children}</main>;
}

export default ContentWrapper;
