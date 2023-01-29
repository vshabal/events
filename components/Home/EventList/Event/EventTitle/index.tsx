import classes from "./index.module.css";

type Props = {
  children: string;
};

function EventTitle({ children }: Props) {
  return <h2 className={classes.title}>{children}</h2>;
}

export default EventTitle;
