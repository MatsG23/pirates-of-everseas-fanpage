import { useLocation, Link } from "react-router-dom";

export default function NavLink(props) {
  const location = useLocation();

  return (
    <li className="nav-item">
      <Link
        to={props.to}
        className={
          "nav-link" + (location.pathname === props.to ? " active" : "")
        }
      >
        {props.text}
      </Link>
    </li>
  );
}
