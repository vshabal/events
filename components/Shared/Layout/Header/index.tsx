import classes from './index.module.css';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
