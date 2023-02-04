import classes from './index.module.css';

type Props = {
  children: string | JSX.Element;
  type: 'button' | 'submit' | 'reset' | undefined;
};

function Button({ children, type }: Props) {
  return (
    <button className={classes.btn} type={type}>
      {children}
    </button>
  );
}

export default Button;
