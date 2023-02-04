import classes from './index.module.css';

type Props = {
  children: JSX.Element[];
};

function EventContainer({ children }: Props) {
  return <section className={classes.container}>{children}</section>;
}

export default EventContainer;
