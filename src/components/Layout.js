import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="navTitle" to="/hellohooks">HelloHooks</Link>
          </li>
          <li>
            <Link className="navTitle" to="/count">Count</Link>
          </li>
          <li>
            <Link className="navTitle" to="/object">UpdateObject</Link>
          </li>
          <li>
            <Link className="navTitle" to="/quiz1">Quiz#1</Link>
          </li>
          <li>
            <Link className="navTitle" to="/quiz2">Quiz#2</Link>
          </li>
          <li>
            <Link className="navTitle" to="/quiz3">Quiz#3</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;