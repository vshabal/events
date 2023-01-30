import DateIcon from "./DateIcon";
import classes from "./index.module.css";

type Props = {
  children: string;
};

function EventDate({ children }: Props) {
  return (
    <div className={classes.dateContainer}>
      <span className={classes.iconContainer}>
        <DateIcon />
      </span>
      <time>{children}</time>
    </div>
  );
}

export default EventDate;
