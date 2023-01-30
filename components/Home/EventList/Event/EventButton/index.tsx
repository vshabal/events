import LinkButton from '@/components/Shared/LinkButton';
import classes from './index.module.css';
import RightArrowIcon from './RightArrowIcon';

type Props = {
  eventId: string;
};

function EventButton({ eventId }: Props) {
  return (
    <LinkButton url={`/events/${eventId}`}>
      <div className={classes.container}>
        <span>Explore Event</span>
        <span className={classes['icon-container']}><RightArrowIcon /></span>
      </div>
    </LinkButton>
  );
}

export default EventButton;
