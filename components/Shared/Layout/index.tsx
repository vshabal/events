import ContentWrapper from './ContentWrapper';
import Header from './Header';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

export default Layout;
