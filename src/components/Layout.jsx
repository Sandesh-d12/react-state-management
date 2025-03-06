import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import ThemeToggle from "./ToggleTheme";

const Layout = ({ children }) => {
  return (
    <div className="_layoutWrapper">
      <div className="flex w-full px-4 py-4">
        {/* <label htmlFor="my-drawer-2"></label> */}
        <ul className="relative flex gap-15 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="relative group">
            <div className="font-semibold cursor-pointer">Campaign</div>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 z-10">
              <ul>
                <li>
                  <Link to="/campaign">All</Link>
                </li>
                <li>
                  <Link to="campaign/draft">Draft</Link>
                </li>
                <li>
                  <Link to="campaign/rejected">Rejected</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <Outlet />

      {children}
      {/* Footer */}
      <footer>
        <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
