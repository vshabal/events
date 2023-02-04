import classes from './index.module.css';

type Props = {
  children: string;
};

function EventTitle({ children: title }: Props) {
  return <h1 className={classes.title}>{title}</h1>;
}

export default EventTitle;
