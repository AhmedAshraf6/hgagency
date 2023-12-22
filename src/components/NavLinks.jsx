const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: '/aboutus', text: 'about us' },
  { id: 3, url: '/aboutceo', text: 'about ceo' },
  { id: 4, url: '/services', text: 'services' },
  { id: 5, url: '/projects', text: 'projects' },
];
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
