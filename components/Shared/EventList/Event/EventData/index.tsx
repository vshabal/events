import classes from './index.module.css';

type Props = {
  children: JSX.Element;
  icon: React.ElementType;
};

function EventData({ children, icon: Icon }: Props) {
  return (
    <div className={classes.container}>
      <Icon className={classes.icon} />
      {children}
    </div>
  );
}

export default EventData;
