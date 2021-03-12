import { Link } from "react-router-dom";

export default function NavbarBrand(props) {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src={props.img}
        alt="Logo"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      <span style={{ marginLeft: "5px" }}>{props.text}</span>
    </Link>
  );
}
