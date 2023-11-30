import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="text-align: center">Welcome to AssertAi Dashboard</h1>
      </div>

      <nav>
        <ul>
          <ol>
            <Link to="/"></Link>
          </ol>
          <li>
            <Link to="/dashboard">UserMetrices</Link>
          </li>

          <li>
            <Link to="/sales">SalesMetrices</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
