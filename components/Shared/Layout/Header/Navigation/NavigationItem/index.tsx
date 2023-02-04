import Link from 'next/link';
import classes from './index.module.css';

type Props = {
  children: string;
  href: string;
};

function NavigationItem({ href, children }: Props) {
  return (
    <Link href={href} className={classes.container}>
      {children}
    </Link>
  );
}

export default NavigationItem;
