interface NavLink {
  title: string;
  urlPath: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
  buttons: NavLink[];
}

const Navbar = ({ logo, links, buttons }: NavbarProps) => (
  <div>about us our program community hiring partners</div>
);

export default Navbar;
