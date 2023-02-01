import classes from './index.module.css';

type Props = {
  summary: JSX.Element;
  actions: JSX.Element;
};

function EventContent({ summary, actions }: Props) {
  return (
    <div className={classes.content}>
      <div>{summary}</div>
      <div className={classes.actions}>{actions}</div>
    </div>
  );
}

export default EventContent;
