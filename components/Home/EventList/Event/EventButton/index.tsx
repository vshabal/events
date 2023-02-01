import LinkButton from '@/components/Shared/LinkButton';
import classes from './index.module.css';
import RightArrowIcon from '@/icons/arrowRight.svg';

type Props = {
  eventId: string;
};

function EventButton({ eventId }: Props) {
  return (
    <LinkButton url={`/events/${eventId}`}>
      <span className={classes.container}>
        <span>Explore Event</span>
        <RightArrowIcon className={classes.icon} />
      </span>
    </LinkButton>
  );
}

export default EventButton;
