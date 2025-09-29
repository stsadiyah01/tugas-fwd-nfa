import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 link-body-emphasis text-decoration-none"
        >
          <i
            className="fa-solid fa-book fa-2xl"
            style={{ color: "#1b79c1ff" }}
          ></i>
          <span className="ms-2 fs-4 fw-bold">Bookstore</span>
        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-secondary" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-secondary" : ""}`
              }
            >
              Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-secondary" : ""}`
              }
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-secondary" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <NavLink to="/login">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
}
