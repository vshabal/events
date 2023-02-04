import classes from './index.module.css';

type Props = {
  icon: React.ElementType;
  children: JSX.Element;
};

function EventData({ icon: Icon, children }: Props) {
  return (
    <li className={classes.container}>
      <Icon className={classes.icon} />
      <span className={classes.text}>{children}</span>
    </li>
  );
}

export default EventData;
