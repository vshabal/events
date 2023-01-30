import Link from 'next/link';
import classes from './index.module.css';

type Props = {
  children: string;
  url: string;
};

function LinkButton({ children, url }: Props) {
  return (
    <Link href={url} className={classes.btn}>
      {children}
    </Link>
  );
}

export default LinkButton;
