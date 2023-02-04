import NavigationItem from './NavigationItem';

const NAVIGATION_ITEMS = [
  {
    href: '/events',
    label: 'Browse all events'
  }
];

function Navigation() {
  return (
    <ul>
      {NAVIGATION_ITEMS.map(({ href, label }) => (
        <NavigationItem key={href} href={href}>
          {label}
        </NavigationItem>
      ))}
    </ul>
  );
}

export default Navigation;
