import DateIcon from './DateIcon';
import classes from './index.module.css';

type Props = {
  children: string;
};

function EventDate({ children }: Props) {
  return (
    <div className={classes['date-container']}>
      <span className={classes['icon-container']}>
        <DateIcon />
      </span>
      <time>{children}</time>
    </div>
  );
}

export default EventDate;
