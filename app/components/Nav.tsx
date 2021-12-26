import { Link } from 'remix';

export const Nav = () => {
  return (
    <nav className="flex justify-between mt-4 pb-4">
      <ul className="flex">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
