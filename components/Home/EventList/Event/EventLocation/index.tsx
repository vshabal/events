import classes from './index.module.css';
import LocationIcon from '@/icons/location.svg';

type Props = {
  children: string;
};

function EventLocation({ children }: Props) {
  return (
    <div className={classes.container}>
      <LocationIcon className={classes.icon} />
      <time>{children}</time>
    </div>
  );
}

export default EventLocation;
