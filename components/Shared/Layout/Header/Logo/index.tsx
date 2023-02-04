import Link from 'next/link';
import classes from './index.module.css';

function Logo() {
  return (
    <Link href="/" className={classes.container}>
      NextEvents
    </Link>
  );
}

export default Logo;
