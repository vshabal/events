import CalendarIcon from '@/icons/calendar.svg';
import classes from './index.module.css';

type Props = {
  children: string;
};

function EventDate({ children }: Props) {
  return (
    <div className={classes.container}>
      <CalendarIcon className={classes.icon} />
      <time>{children}</time>
    </div>
  );
}

export default EventDate;
