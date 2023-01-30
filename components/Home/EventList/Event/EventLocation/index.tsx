import classes from './index.module.css';
import LocationIcon from './LocationIcon';

type Props = {
  children: string;
};

function EventLocation({ children }: Props) {

  return (
    <div className={classes['location-container']}>
      <span className={classes['icon-container']}>
        <LocationIcon />
      </span>
      <time>{children}</time>
    </div>
  );
}

export default EventLocation;
